(function (window, $, Backbone, Marionette, _, AgarBot, app) {
    AgarBot.Views.FeedBotPanel = Marionette.ItemView.extend({
        el: '#feedbot-pannel',
        events: {
            'click #feedBotToggle_master': 'onMasterToggle',
            'click #feedBotToggle_auto': 'onAutoToggle'
        },
        initialize: function (options) {
            var self = this;
            this.options = {};
            _.extend(this.options, options);
        },
        onMasterToggle: function (e) {
            e.preventDefault();
            var target = $(e.currentTarget);
            this.options.master = !this.options.master;
            if (this.options.master) {
                target.text('Make slave');
            } else {
                target.text('Make master');
            }
            AgarBot.pubsub.trigger('FeedBotPanel:changeSetting', this.options);
        },
        onAutoToggle: function (e) {
            e.preventDefault();
            var target = $(e.currentTarget);
            this.options.botEnabled = !this.options.botEnabled;
            if (this.options.botEnabled) {
                target.text('Disable Auto');
            } else {
                target.text('Enable auto');
            }
            AgarBot.pubsub.trigger('FeedBotPanel:changeSetting', this.options);
        },
        getTemplate: function () {
            var templateLoader = app.module('TemplateLoader');
            return templateLoader.getTemlate('feedBotPannel');
        }
    });

    AgarBot.Modules.OgarBot = Marionette.Module.extend({
        initialize: function (moduleName, app, options) {
            this.gameState = 0;
            this.path = [];

            this.predators = []; // List of cells that can eat this bot
            this.threats = []; // List of cells that can eat this bot but are too far away
            this.prey = []; // List of cells that can be eaten by this bot
            this.food = [];
            this.foodImportant = []; // Not used - Bots will attempt to eat this regardless of nearby prey/predators
            this.virus = []; // List of viruses
            this.juke = false;
            this.target = null;
            this.mouse = {};
            this.centerPos = {};
            this.targetVirus = null; // Virus used to shoot into the target
            this.splitDistance = 710;
            this.dangerTimeOut = 1500;
            //this.centerPos = {x: 0, x:0}; probs useless
            this.ejectMass = 0; // Amount of times to eject mass
            this.oldPos = {
                x: 0,
                y: 0
            };
            this.splitLock = false;
            this.walls = [];

            this.isEnable = true;
            this.botEnabled = true;
            this.pannelView = new AgarBot.Views.FeedBotPanel({
                isEnable: this.isEnable,
                botEnabled: this.botEnabled
            });
        },
        onStart: function (options) {
            var self = this;
            this.changeBotEnableStage(true);
            this.listenTo(AgarBot.pubsub, 'main_out:mainloop', this.mainLoop);
            this.listenTo(AgarBot.pubsub, 'document.ready', this.setDefautlNick);
            this.listenTo(AgarBot.pubsub, 'FeedBotPanel:changeSetting', this.onChangeSetting);
            document.addEventListener("visibilitychange", function () {
                self.onVisibilitychanged();
            }, false);
            this.pannelView.render();
        },
        setDefautlNick: function () {
            $('#nick').val("Agar.SenViet.org");
        },
        changeBotEnableStage: function (isEnabled) {
            this.botEnabled = isEnabled;
            if (this.botEnabled) {
                document.title = 'Agar.io - ' + 'Bot enabled';
            }
            else {
                document.title = 'Agar.io - ' + 'Bot disabled';
            }
        },
        onVisibilitychanged: function () {
            if (document.hidden) {
                this.prevBotEnabled = this.botEnabled;
                this.changeBotEnableStage(true);
            } else {
                this.changeBotEnableStage(this.prevBotEnabled);
            }
        },
        onChangeSetting: function (options) {
            if (typeof options.master != 'undefined') {
                this.master = options.master;
            }
            if (typeof options.botEnabled != 'undefined') {
                this.changeBotEnableStage(options.botEnabled);
            }
        },
        getType: function (cell) {
            if (cell.size < 30 && !cell.name) { //Food Cell.
                return 1;
            } else if (cell.isVirus()) { //Virus.
                return 2;
            } else if ((Math.floor(cell.size) === 37 || Math.floor(cell.size) === 38) && !cell.name) { //Ejected Mass.
                return 3;
            } else { //Probs a player.
                return 0;
            }
        },
        calcMass: function (cell) {
            return Math.pow(cell.size, 2) / 100;
        },
        getLowestCell: function () { // Gets the cell with the lowest mass
            var myCells = getPlayer();
            if (myCells.length <= 0) {
                return null; // Error!
            }

            // Starting cell
            var lowest = myCells[0];
            for (var i = 1; i < myCells.length; i++) {
                if (lowest.size > myCells[i].size) {
                    lowest = myCells[i];
                }
            }
            return lowest;
        },
        getHighestCell: function () { // Gets the cell with the highest mass
            var myCells = getPlayer();
            if (myCells.length <= 0) {
                return null; // Error!
            }

            // Starting cell
            var highest = myCells[0];
            for (var i = 1; i < myCells.length; i++) {
                if (highest.size < myCells[i].size) {
                    highest = myCells[i];
                }
            }
            return highest;
        },
        mainLoop: function () {
            var myCells = getPlayer();
            if(myCells.length <=0){
                return;
            }
            var allCells = getMemoryCells();
            var cell = this.getLowestCell();
            var r = cell.size;
            // Clear lists from last time we ran the loop
            this.clearLists();
            // Ignores targeting cells below this mass. Though currently not in use.
            var ignoreMass = Math.min((this.calcMass(cell) / 10), 150);
            // Get the center of all my cells.
            this.centerPos = this.combineVectors(myCells);
            this.distOffset = myCells.length < 1 ? this.findFarthestDist(this.centerPos, myCells) : 0; // Find the farthest distance from my centerPos so I can make the dist offset. TODO make this work well when all cells are equadistant
            drawCircle(this.centerPos.x, this.centerPos.y, this.distOffset, 1);
            var self = this;
            Object.keys(allCells).forEach(function (i, index) {
                var check = allCells[i];
                var splitDangerDistance = check.size + self.splitDistance + 150;
                var normalDangerDistance = check.size + 150;
                var shiftDistance = myCells[o].size;
                //console.log('it is definatly working right now');
                if (!check.size || !check.x || !check.y || !check.size || !check.id) { // Make sure nothing weird gets passed into the switch
                    return null;
                }
                var dist = self.getAccDist(self.centerPos, check) - (r + check.size + self.distOffset);
                // Cannot target itself
                for (var o in myCells) {
                    if (check.id === myCells[o].id) {
                        return null; // Continue onto the next iteration of the main loop as to not target ourself
                    }
                }
                var t = self.getType(check);
                // Sort by type
                switch (t) {
                    case 0: // Its a player
                        // Cannot target teammates
                        if (getMode() === ":teams") {
                            if (check.color === cell.color) { //TODO I dont belive that works I need to use substring
                                return null;
                            }
                        }

                        // Check for danger and prey
                        if ((self.calcMass(cell) * 1.33) > self.calcMass(check)) { // Prey
                            drawPoint(check.x, check.y, 1, 'prey');
                            if (dist < 600) {
                                self.prey.push(check);
                            }
                        } else if ((self.calcMass(check) * 2.5) > self.calcMass(cell) && (self.calcMass(check) * 20) < self.calcMass(cell)) { // This preditor could splitkill me!
                            drawPoint(check.x, check.y, 1, 'split preditor');

                            if (dist < 810) {
                                self.predators.push(check);
                            }
                            self.threats.push(check);
                        } else if ((self.calcMass(check) * 1.25) > self.calcMass(cell)) { // Preditor!
                            drawPoint(check.x, check.y, 1, 'preditor');
                            if (dist < 300) {
                                self.predators.push(check);
                                if ((myCells.length === 1) && (dist < 0)) { // Split to get out of danger
                                    self.juke = true;
                                }
                            }
                            self.threats.push(check);
                        } else {
                            drawPoint(check.x, check.y, 1, 'threats');
                            self.threats.push(check);
                        }
                        break;
                    case 1: // Just a food cell
                        drawPoint(check.x, check.y, 1, 'food');
                        self.food.push(check);
                        break;
                    case 2: // Virus
                        drawPoint(check.x, check.y, 1, 'virus');
                        if (dist < 100 && cell.size >= 115) { // Dangerous virus. 115 radius is equal to 132.25 mass
                            self.predators.push(check);
                        }
                        self.virus.push(check);
                        break;
                    case 3: // Ejected mass
                        drawPoint(check.x, check.y, 1, 'ejected mass');
                        self.food.push(check);
                        break;
                    default:
                        break;
                }

            });
            // Create wall enemies
            this.addWall(cell);
            // Get gamestate
            var newState = this.getState(cell);
            if ((newState !== this.gameState) && (newState !== 4)) {
                // Clear target
                this.target = null;
            }
            this.gameState = newState;
            var currentStateText = this.stateToText(this.gameState);
            // Action
            var cellWithCenterPos = cell;
            cellWithCenterPos.x = this.centerPos.x;
            cellWithCenterPos.y = this.centerPos.y;
            this.decide(cellWithCenterPos);
            // Draw a line to the target from all of my cells
            drawLine(this.centerPos.x, this.centerPos.y, this.mouse.x, this.mouse.y, 1);
            drawPoint(this.centerPos.x, this.centerPos.y + (myCells[0].size / 2.5), 1, currentStateText);
            setPoint(this.mouse.x, this.mouse.y);
        },
        addWall: function (cell) {
            // Bandaid wall code
            if (cell.x < getMapStartX() + 1500 && this.predators.length <= 1 + this.walls.length) {
                var fakeThreat = {x: getMapStartX(), y: cell.y, size: cell.size, isWall: true};
                if (cell.x < getMapStartX() + 1000) {
                    this.predators.push(fakeThreat);
                }
                this.walls.push(fakeThreat);
                drawPoint(fakeThreat.x, fakeThreat.y, 1, '');
            }

            if (cell.y < getMapStartY() + 1500 && this.predators.length <= 1 + this.walls.length) {
                var fakeThreat = {x: cell.x, y: getMapStartY(), size: cell.size, isWall: true};
                if (cell.y < getMapStartY() + 1000) {
                    this.predators.push(fakeThreat);
                }
                this.walls.push(fakeThreat);
                drawPoint(fakeThreat.x, fakeThreat.y, 1, '');
            }

            if (cell.x > getMapEndX() - 1500 && this.predators.length <= 1 + this.walls.length) {
                var fakeThreat = {x: getMapEndX(), y: cell.y, size: cell.size, isWall: true};
                if (cell.x > getMapEndX() - 1000) {
                    this.predators.push(fakeThreat);
                }
                this.walls.push(fakeThreat);
                drawPoint(fakeThreat.x, fakeThreat.y, 1, '');
            }

            if (cell.y > getMapEndY() - 1500 && this.predators.length <= 1 + this.walls.length) {
                var fakeThreat = {x: cell.x, y: getMapEndY(), size: cell.size, isWall: true};
                if (cell.y > getMapEndY() - 1000) {
                    this.predators.push(fakeThreat);
                }
                this.walls.push(fakeThreat);
                drawPoint(fakeThreat.x, fakeThreat.y, 1, '');
            }
        },
        stateToText: function (stateNum) {
            switch (stateNum) {
                case 0:
                    return 'wandering';
                case 1:
                    return 'eating food';
                case 2:
                    return 'running';
                case 3:
                    return 'eating player';
                case 4:
                    return 'shooting virus';
                default:
                    return 'unknown state';
            }
        },
        getState: function (cell) {
            var myCells = getPlayer();
            // Continue to shoot viruses
            if (this.gameState == 4) {
                return 4;
            }

            // Check for predators
            if (this.predators.length <= 0) {
                if (this.prey.length > 0) {
                    return 3;
                } else if (this.food.length > 0) {
                    return 1;
                }
            } else if (this.threats.length > 0) {
                if ((myCells.length === 1) && (this.calcMass(cell) > 180)) {
                    var t = this.getBiggest(this.threats);
                    var tl = this.findNearbyVirus(t, 500, this.virus);
                    if (tl !== false) {
                        this.target = t;
                        this.targetVirus = tl;
                        return 4;
                    }
                } else {
                    // Run
                    return 2;
                }
            }

            // Bot wanders by default
            return 0;
        },
        decide: function (cell) {
            var myCells = getPlayer();
            var allCells = getMemoryCells();
            // The bot decides what to do based on gamestate
            switch (this.gameState) {
                case 0: // Wander
                    //console.log("[Bot] "+cell.getName()+": Wandering");
                    if ((this.centerPos.x == this.mouse.x) && (this.centerPos.y == this.mouse.y)) {
                        // Get a new position
                        var index = Math.floor(Math.random() * allCells.length);
                        var randomNode = allCells[index];
                        var pos = {x: 0, y: 0};

                        if ((randomNode.getType() == 3) || (randomNode.getType() == 1)) {
                            pos.x = randomNode.position.x;
                            pos.y = randomNode.position.y;
                        } else {
                            // Not a food/ejected cell
                            pos = {
                                x:100,
                                y:100
                            };
                        }

                        // Set bot's mouse coords to this location
                        this.mouse = {x: pos.x, y: pos.y};
                    }
                    break;
                case 1: // Looking for food
                    //console.log("[Bot] "+cell.getName()+": Getting Food");
                    if ((!this.target) || (allCells.indexOf(this.target) == -1)) {
                        // Food is eaten/out of sight... so find a new food cell to target
                        this.target = this.findNearestSafe(cell, this.food);

                        this.mouse = {
                            x: this.target.x,
                            y: this.target.y
                        };
                    }
                    break;
                case 2: // Run from (potential) predators
                    var avoid = this.combineVectorsWithWeights(cell, this.predators);
                    //console.log("[Bot] "+cell.getName()+": Fleeing from "+avoid.getName());

                    // Find angle of vector between cell and predator
                    var deltaY = avoid.y - cell.y;
                    var deltaX = avoid.x - cell.x;
                    var angle = this.reverseAngle(Math.atan2(deltaX, deltaY));
                    // Direction to move
                    var x1 = cell.x + (500 * Math.sin(angle));
                    var y1 = cell.y + (500 * Math.cos(angle));

                    this.mouse = {
                        x: x1,
                        y: y1
                    };

                    if (this.juke) {
                        // Juking
                        if (!this.splitLock) {
                            sendMessage(17);
                            this.splitLock = true;
                        }
                        setTimeout(function () {
                            this.splitLock = false;
                        }, 300);
                    }

                    break;
                case 3: // Target prey
                    if ((!this.target) || (this.calcMass(cell) < (this.calcMass(this.target) * 1.25)) || (allCells.indexOf(this.target) == -1)) {
                        this.target = this.findNearestSafe(cell, this.prey);
                    }
                    //console.log("[Bot] "+cell.getName()+": Targeting "+this.target.getName());


                    this.mouse = {
                        x: this.target.x,
                        y: this.target.y
                    };

                    var massReq = 1.25 * (this.calcMass(this.target) * 2); // Mass required to splitkill the target

                    var speed = 30 * Math.pow(this.calcMass(cell), -1.0 / 4.5) * 50 / 40;

                    if ((this.calcMass(cell) > massReq) && (myCells.length == 1)) { // Will not split into more than 2 cells
                        var splitDist = (4 * (speed * 5)) + (cell.size * 1.75); // Distance needed to splitkill
                        var distToTarget = this.getAccDist(cell, this.target); // Distance between the target and this cell

                        if (splitDist >= distToTarget) {
                            if ((this.threats.length > 0) && (this.calcMass(this.getBiggest(this.threats)) > (1.25 * (this.calcMass(cell) / 2)))) {
                                // Dont splitkill when they are cells that can possibly eat you after the split
                                break;
                            }
                            // Splitkill
                            if (!this.splitLock) {
                                sendMessage(17);
                                this.splitLock = true;
                            }
                            setTimeout(function () {
                                this.splitLock = false;
                            }, 300);
                            //this.gameServer.splitCells(this);
                        }
                    }
                    break;
                case 4: // Shoot virus
                    if ((!this.target) || (!this.targetVirus) || (myCells.length !== 1) || (allCells.indexOf(this.target) == -1) || (allCells.indexOf(this.targetVirus) == -1)) {
                        this.gameState = 0; // Reset
                        this.target = null;
                        break;
                    }

                    // Make sure target is within range
                    var dist = this.getAccDist(this.targetVirus, this.target) - (this.target.size + 100);
                    if (dist > 500) {
                        this.gameState = 0; // Reset
                        this.target = null;
                        break;
                    }

                    // Find angle of vector between target and virus
                    var angle = this.getAngle(this.target, this.targetVirus);

                    // Now reverse the angle
                    var reversed = this.reverseAngle(angle);

                    // Get this bot cell's angle
                    var ourAngle = this.getAngle(cell, this.targetVirus);

                    // Check if bot cell is in position
                    if ((ourAngle <= (reversed + 0.25)) && (ourAngle >= (reversed - 0.25))) {
                        // In position!
                        this.mouse = {
                            x: this.targetVirus.x,
                            y: this.targetVirus.y
                        };

                        // Shoot
                        for (var v = 0; v < 7; v++) {
                            sendMessage(21);
                            //this.gameServer.ejectMass(this);
                        }

                        // Back to starting pos
                        this.mouse = {
                            x: cell.x,
                            y: cell.y
                        };

                        // Cleanup
                        this.gameState = 0; // Reset
                        this.target = null;
                    } else {
                        // Move to position
                        var r = cell.size;
                        var x1 = this.targetVirus.x + ((350 + r) * Math.sin(reversed));
                        var y1 = this.targetVirus.y + ((350 + r) * Math.cos(reversed));
                        this.mouse = {
                            x: x1,
                            y: y1
                        };
                    }

                    // console.log("[Bot] "+cell.getName()+": Targeting (virus) "+this.target.getName());
                    break;
                default:
                    //console.log("[Bot] "+cell.getName()+": Idle "+this.gameState);
                    this.gameState = 0;
                    break;
            }
        },
        findNearest : function(cell, list) {
            // Check for nearest cell in list
            var shortest = list[0];
            var shortestDist = this.getAccDist(cell, shortest) - (cell.size + shortest.size);
            for (var i = 0; i < list.length; i++) {
                var check = list[i];
                var dist = this.getAccDist(cell, check) - (cell.size + check.size);
                if (shortestDist > dist) {
                    shortest = check;
                    shortestDist = dist;
                }
            }
            return shortest;
        },
        findNearestSafe : function(cell, list) {
            // Check for nearest safe cell in list
            var shortest = list[0]; //TODO sometimes there is no safe cell at all so it just uses this that is not infact safe
            var shortestDist = 100000;
            foodCheckLoop: for (var i = 0; i < list.length; i++) {
                var check = list[i];
                var dist = this.getAccDist(cell, check) - (cell.size + check.size + this.distOffset);
                if (shortestDist > dist) {
                    for (var b = 0; b < this.threats; b++){
                        var checkEnemy = this.threats[b];
                        var checkEnemyDist = this.getAccDist(cell, checkEnemy) - (cell.size + check.size + this.distOffset);
                        if ((this.calcMass(checkEnemy) * 2.5) > this.calcMass(cell) && (this.calcMass(checkEnemy) * 20) < this.calcMass(cell) && checkEnemyDist < 910) { // Reusing my enemy detection code to figure out what shouldn't be used as food.
                            continue foodCheckLoop;
                        } else if ((this.calcMass(checkEnemy) * 1.25) > this.calcMass(cell) && checkEnemyDist < 400) {
                            continue foodCheckLoop;
                        }
                    }
                    if (this.walls.length >= 1){
                        var nearestWall = this.findNearest(cell,this.walls);
                        var distWall = this.getAccDist(nearestWall, check);
                        if (distWall <= 1500){
                            continue foodCheckLoop;
                        }
                    }
                    shortest = check;
                    shortestDist = dist;
                }
            }
            drawPoint(shortest.x, shortest.y, 1, '');
            return shortest;
        },
        findFarthestDist : function(cell, list) {
            // Check for farthest cell in list
            var farthest = list[0];
            var farthestDist = this.getAccDist(cell, farthest);
            for (var i = 0; i < list.length; i++) {
                var check = list[i];
                var dist = this.getAccDist(cell, check);
                if (farthestDist < dist) {
                    farthest = check;
                    farthestDist = dist;
                }
            }
            return farthestDist;
        },
        getRandom : function(list) {
            // Gets a random cell from the array
            var n = Math.floor(Math.random() * list.length);
            return list[n];
        },
        combineVectors : function(list) {
            // Gets the angles of all enemies approaching the cell
            var pos = {
                x: 0,
                y: 0
            };
            var check;
            for (var i = 0; i < list.length; i++) {
                check = list[i];
                pos.x += check.x;
                pos.y += check.y;
            }

            // Get avg
            pos.x = pos.x / list.length;
            pos.y = pos.y / list.length;

            drawPoint(pos.x, pos.y, 1, 'Midpoint');
            return pos;
        },
        combineVectorsWithWeights : function(cell, list) {
            // Gets the angles of all enemies approaching the cell
            var pos = {
                x: 0,
                y: 0
            };
            var farthestDist = this.findFarthestDist(cell, list);
            var biggestCell = this.getBiggest(list);
            var nearestCell = this.findNearest(cell, list);
            var sizeWeightRatio = farthestDist / biggestCell.size / 2; // 2 could be changed based on your needs
            var elementWeight = 0;
            var elementWeights = 0;
            for (var i = 0; i < list.length; i++) {
                elementWeight = farthestDist - this.getAccDist(cell, list[i]) + list[i].size * sizeWeightRatio;
                if (list[i].id === nearestCell.id){
                    elementWeight *= 2;
                }
                elementWeights += elementWeight;
                pos.x += list[i].x * elementWeight;
                pos.y += list[i].y * elementWeight;
            }

            // Get avg
            pos.x = pos.x / elementWeights;
            pos.y = pos.y / elementWeights;

            drawPoint(pos.x, pos.y, 1, 'Weighted Midpoint');
            return pos;
        },
        checkPath : function(cell, check) {
            // Get angle of path
            var v1 = Math.atan2(cell.x - this.mouse.x, cell.y - this.mouse.y);

            // Get angle of vector (cell -> virus)
            var v2 = this.getAngle(cell, check);
            var dist = this.getAccDist(cell, check);

            var inRange = Math.atan((2 * cell.size) / dist); // Opposite/adjacent
            if ((v1 <= (v2 + inRange)) && (v1 >= (v2 - inRange))) {
                // Path collides
                return true;
            }
            // No collide
            return false;
        },
        getBiggest : function(list) {
            // Gets the biggest cell from the array
            var biggest = list[0];
            for (var i = 1; i < list.length; i++) {
                var check = list[i];
                if (this.calcMass(check) > this.calcMass(biggest)) {
                    biggest = check;
                }
            }

            return biggest;
        },
        findNearbyVirus : function(cell, checkDist, list) {
            var r = cell.size + 100; // Gets radius + virus radius
            for (var i = 0; i < list.length; i++) {
                var check = list[i];
                var dist = this.getAccDist(cell, check) - r;
                if (checkDist > dist) {
                    return check;
                }
            }
            return false; // Returns a bool if no nearby viruses are found
        },
        getFastDist : function(cell, check) {
            // Fastest distance
            var xd = (check.x - cell.x);
            xd = xd < 0 ? xd * -1 : xd; // Math.abs is slow

            var yd = (check.y - cell.y);
            yd = yd < 0 ? yd * -1 : yd; // Math.abs is slow

            return (xd + yd);
        },
        getAccDist : function(cell, check) {
            // Accurate Distance
            var xs = check.x - cell.x;
            xs = xs * xs;

            var ys = check.y - cell.y;
            ys = ys * ys;

            return Math.sqrt(xs + ys);
        },
        getAngle : function(c1, c2) {
            var deltaY = c1.y - c2.y;
            var deltaX = c1.x - c2.x;
            return Math.atan2(deltaX, deltaY);
        },
        reverseAngle : function(angle) {
            if (angle > Math.PI) {
                angle -= Math.PI;
            } else {
                angle += Math.PI;
            }
            return angle;
        },
        clearLists: function () {
            this.predators = [];
            this.threats = [];
            this.prey = [];
            this.food = [];
            this.virus = [];
            this.walls = [];
            this.juke = false;
        }
    });
    app.module("OgarBot", {
        moduleClass: AgarBot.Modules.OgarBot
    });
})(window, jQuery, Backbone, Backbone.Marionette, _, AgarBot, AgarBot.app);