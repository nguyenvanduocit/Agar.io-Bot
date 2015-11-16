Number.prototype.mod = function(n) {
    return ((this % n) + n) % n;
};

Array.prototype.peek = function() {
    return this[this.length - 1];
};
(function (window, Parse, $, Backbone, Marionette, _, AgarBot, app) {
    Parse.initialize("nj3ycKuqW4k4CnzN1ZYtMYowoa97qNw7NafLimrF", "nh6arPQQxbE5rFOyR0dCgecQiDAN54Zgjsf7eAKH");
    AgarBot.Views.FeedBotPanel = Marionette.ItemView.extend({
        el:'#feedbot-pannel',
        events:{
            'click #feedBotToggle_master':'onMasterToggle',
            'click #feedBotToggle_auto':'onAutoToggle'
        },
        initialize: function (options){
            this.options = {};
            _.extend(this.options, options);
        },
        onMasterToggle:function(e){
            e.preventDefault();
            var target = $(e.currentTarget);
            this.options.master = !this.options.master;
            if(this.options.master)
            {
                target.text('Make slave');
            }else{
                target.text('Make master');
            }
            AgarBot.pubsub.trigger('FeedBotPanel:changeSetting', this.options);
        },
        onAutoToggle:function(e){
            e.preventDefault();
            var target = $(e.currentTarget);
            this.options.botEnabled = !this.options.botEnabled;
            if(this.options.botEnabled)
            {
                target.text('Disable Auto');
            }else{
                target.text('Enable auto');
            }
            AgarBot.pubsub.trigger('FeedBotPanel:changeSetting', this.options);
        },
        getTemplate: function () {
            var templateLoader = app.module('TemplateLoader');
            return templateLoader.getTemlate('feedBotPannel');
        }
    });

    AgarBot.Modules.FeedBot = Marionette.Module.extend({
        initialize: function (moduleName, app, options) {
            this.MasterLocation = Parse.Object.extend("MasterLocation");
            this.isEnable = true;
            this.master  = true;
            this.lastMasterUpdate = Date.now();
            this.botEnabled = true;
            this.masterLocation = [100, 100];
            this.masterId = false;
            this.splitDistance = 710;
            this.toggleFollow = false;
            this.minimumSizeToGoing = 10;
            this.dangerTimeOut = 1500;
            this.situation = 'DANGER';//DANGER, SAFE, ATTACT
            this.stage = 'EAT'; //EAT, SHOOT, RUN
            this.pannelView = new AgarBot.Views.FeedBotPanel({
                isEnable:this.isEnable,
                master:this.master,
                splitDistance:this.splitDistance,
                dangerTimeOut:this.dangerTimeOut,
                botEnabled:this.botEnabled
            });

        },
        onStart: function (options) {
            this.listenTo(AgarBot.pubsub, 'main_out:mainloop', this.mainLoop);
            this.listenTo(AgarBot.pubsub, 'FeedBotPanel:changeSetting', this.onChangeSetting);
            this.pannelView.render();
        },
        onChangeSetting:function(options){
            console.log(options);
            if(typeof options.master !='undefined'){
                this.master = options.master;
            }
            if(typeof options.botEnabled !='undefined'){
                this.botEnabled = options.botEnabled;
            }
        },
        mainLoop:function(){
            if (getPlayer().length > 0) {
                //DETECT CURRENT SITUATION
                this.detectSitualtion();
                //DECIDE
                this.decide();
            }
        },
        detectSitualtion:function(){
            this.situation = 'SAFE';
            this.stage = 'EAT';
        },
        decide:function(){
            switch (this.stage){
                case 'EAT':
                    var nextPoint = this.getNextPoint();
                    setPoint(nextPoint[0], nextPoint[1]);
                    break;
            }
        },
        getNextPoint:function(){
            var player = getPlayer();
            var interNodes = getMemoryCells();
            /**
             * toggle all bot, include send master
             */
            if (this.isEnable) {
                //The following code converts the mouse position into an
                //absolute game coordinate.
                var useMouseX = screenToGameX(getMouseX());
                var useMouseY = screenToGameY(getMouseY());
                var tempPoint = [useMouseX, useMouseY, 1];

                //The current destination that the cells were going towards.
                var tempMoveX = getPointX();
                var tempMoveY = getPointY();

                //This variable will be returned at the end.
                //It will contain the destination choices for all the cells.
                //BTW!!! ERROR ERROR ABORT MISSION!!!!!!! READ BELOW -----------
                //
                //SINCE IT'S STUPID NOW TO ASK EACH CELL WHERE THEY WANT TO GO,
                //THE BOT SHOULD SIMPLY PICK ONE AND THAT'S IT, I MEAN WTF....
                var destinationChoices = []; //destination, size, danger

                //Just to make sure the player is alive.
                /**
                 * Toggle is auto run bot ?
                 */
                if ( (player.length > 0) && this.botEnabled ) {
                    if (!this.master && Date.now() - this.lastMasterUpdate > 500) {
                        var query = new Parse.Query(this.MasterLocation);
                        var self = this;
                        query.equalTo("server", getServer());
                        query.first().then(function(object) {
                                if (typeof object != 'undefined') {
                                    console.log("Previous Location: " + self.masterLocation);
                                    console.log("Going to: " + object.get("location"));
                                    self.masterLocation = object.get("location");
                                    self.masterLocation = object.get("location");
                                    self.masterId = object.get("cellId");
                                    console.log("Updated Location: " + self.masterLocation);
                                } else {
                                    console.log("No master was found... Let's be the master.");
                                    self.master = true;
                                }
                            },
                            function(error) {
                                console.log("Error: " + error.code + " " + error.message);
                            });
                        this.lastMasterUpdate = Date.now();
                    }

                    //Loop through all the player's cells.
                    for (var k = 0; k < player.length; k++) {
                        if (true) {
                            drawPoint(player[k].x, player[k].y + player[k].size, 0, "" + (getLastUpdate() - player[k].birth) + " / " + (30000 + (player[k].birthMass * 57) - (getLastUpdate() - player[k].birth)) + " / " + player[k].birthMass);
                        }
                    }

                    //Loops only for one cell for now.
                    for (var k = 0; /*k < player.length*/ k < 1; k++) {

                        //console.log("Working on blob: " + k);

                        drawCircle(player[k].x, player[k].y, player[k].size + this.splitDistance, 5);
                        drawPoint(player[0].x, player[0].y - player[0].size, 3, "" + Math.floor(player[0].x) + ", " + Math.floor(player[0].y));

                        //var allDots = processEverything(interNodes);

                        //loop through everything that is on the screen and
                        //separate everything in it's own category.
                        var allIsAll = MapControl.getAll(player[k]);

                        //The food stored in element 0 of allIsAll
                        var allPossibleFood = allIsAll[0];
                        //The threats are stored in element 1 of allIsAll
                        var allPossibleThreats = allIsAll[1];
                        //The viruses are stored in element 2 of allIsAll
                        var allPossibleViruses = allIsAll[2];

                        if (allIsAll[4].length > 0) {
                            console.log("Found my real Master! " + allIsAll[4][0].id);
                            this.masterLocation = [allIsAll[4][0].x, allIsAll[4][0].y]
                        }


                        //The bot works by removing angles in which it is too
                        //dangerous to travel towards to.
                        var badAngles = [];
                        var obstacleList = [];

                        var isSafeSpot = true;
                        var isMouseSafe = true;

                        var clusterAllFood = MapControl.clusterFood(allPossibleFood, player[k].size);

                        //console.log("Looking for enemies!");

                        //Loop through all the cells that were identified as threats.
                        for (var i = 0; i < allPossibleThreats.length; i++) {

                            var enemyDistance = MapControl.computeDistanceFromCircleEdge(allPossibleThreats[i].x, allPossibleThreats[i].y, player[k].x, player[k].y, allPossibleThreats[i].size);

                            allPossibleThreats[i].enemyDist = enemyDistance;
                        }

                        allPossibleThreats.sort(function (a, b) {
                            return a.enemyDist - b.enemyDist;
                        });

                        for (var i = 0; i < allPossibleThreats.length; i++) {

                            var enemyDistance = MapControl.computeDistance(allPossibleThreats[i].x, allPossibleThreats[i].y, player[k].x, player[k].y);

                            var splitDangerDistance = allPossibleThreats[i].size + this.splitDistance + 150;

                            var normalDangerDistance = allPossibleThreats[i].size + 150;

                            var shiftDistance = player[k].size;

                            //console.log("Found distance.");

                            var enemyCanSplit = (this.master ? MapControl.canSplit(player[k], allPossibleThreats[i]) : false);

                            for (var j = clusterAllFood.length - 1; j >= 0 ; j--) {
                                var secureDistance = (enemyCanSplit ? splitDangerDistance : normalDangerDistance);
                                if (MapControl.computeDistance(allPossibleThreats[i].x, allPossibleThreats[i].y, clusterAllFood[j][0], clusterAllFood[j][1]) < secureDistance)
                                    clusterAllFood.splice(j, 1);
                            }

                            //console.log("Removed some food.");

                            if (enemyCanSplit) {
                                drawCircle(allPossibleThreats[i].x, allPossibleThreats[i].y, splitDangerDistance, 0);
                                drawCircle(allPossibleThreats[i].x, allPossibleThreats[i].y, splitDangerDistance + shiftDistance, 6);
                            } else {
                                drawCircle(allPossibleThreats[i].x, allPossibleThreats[i].y, normalDangerDistance, 3);
                                drawCircle(allPossibleThreats[i].x, allPossibleThreats[i].y, normalDangerDistance + shiftDistance, 6);
                            }

                            if (allPossibleThreats[i].danger && getLastUpdate() - allPossibleThreats[i].dangerTimeOut > this.dangerTimeOut) {

                                allPossibleThreats[i].danger = false;
                            }

                           if ((enemyCanSplit && enemyDistance < splitDangerDistance) ||
                                (!enemyCanSplit && enemyDistance < normalDangerDistance)) {
                                allPossibleThreats[i].danger = true;
                                allPossibleThreats[i].dangerTimeOut = getLastUpdate();
                            }

                            //console.log("Figured out who was important.");

                            if ((enemyCanSplit && enemyDistance < splitDangerDistance) || (enemyCanSplit && allPossibleThreats[i].danger)) {

                                badAngles.push(MapControl.getAngleRange(player[k], allPossibleThreats[i], i, splitDangerDistance).concat(allPossibleThreats[i].enemyDist));

                            } else if ((!enemyCanSplit && enemyDistance < normalDangerDistance) || (!enemyCanSplit && allPossibleThreats[i].danger)) {

                                badAngles.push(MapControl.getAngleRange(player[k], allPossibleThreats[i], i, normalDangerDistance).concat(allPossibleThreats[i].enemyDist));

                            } else if (enemyCanSplit && enemyDistance < splitDangerDistance + shiftDistance) {
                                var tempOb = MapControl.getAngleRange(player[k], allPossibleThreats[i], i, splitDangerDistance + shiftDistance);
                                var angle1 = tempOb[0];
                                var angle2 = MapControl.rangeToAngle(tempOb);

                                obstacleList.push([[angle1, true], [angle2, false]]);
                            } else if (!enemyCanSplit && enemyDistance < normalDangerDistance + shiftDistance) {
                                var tempOb = MapControl.getAngleRange(player[k], allPossibleThreats[i], i, normalDangerDistance + shiftDistance);
                                var angle1 = tempOb[0];
                                var angle2 = MapControl.rangeToAngle(tempOb);

                                obstacleList.push([[angle1, true], [angle2, false]]);
                            }
                            //console.log("Done with enemy: " + i);
                        }

                        //console.log("Done looking for enemies!");

                        var goodAngles = [];
                        var stupidList = [];

                        for (var i = 0; i < allPossibleViruses.length; i++) {
                            if (player[k].size < allPossibleViruses[i].size) {
                                drawCircle(allPossibleViruses[i].x, allPossibleViruses[i].y, allPossibleViruses[i].size + 10, 3);
                                drawCircle(allPossibleViruses[i].x, allPossibleViruses[i].y, allPossibleViruses[i].size * 2, 6);

                            } else {
                                drawCircle(allPossibleViruses[i].x, allPossibleViruses[i].y, player[k].size + 50, 3);
                                drawCircle(allPossibleViruses[i].x, allPossibleViruses[i].y, player[k].size * 2, 6);
                            }
                        }

                        for (var i = 0; i < allPossibleViruses.length; i++) {
                            var virusDistance = MapControl.computeDistance(allPossibleViruses[i].x, allPossibleViruses[i].y, player[k].x, player[k].y);
                            if (player[k].size < allPossibleViruses[i].size) {
                                if (virusDistance < (allPossibleViruses[i].size * 2)) {
                                    var tempOb = MapControl.getAngleRange(player[k], allPossibleViruses[i], i, allPossibleViruses[i].size + 10);
                                    var angle1 = tempOb[0];
                                    var angle2 = MapControl.rangeToAngle(tempOb);
                                    obstacleList.push([[angle1, true], [angle2, false]]);
                                }
                            } else {
                                if (virusDistance < (player[k].size * 2)) {
                                    var tempOb = MapControl.getAngleRange(player[k], allPossibleViruses[i], i, player[k].size + 50);
                                    var angle1 = tempOb[0];
                                    var angle2 = MapControl.rangeToAngle(tempOb);
                                    obstacleList.push([[angle1, true], [angle2, false]]);
                                }
                            }
                        }

                        if (badAngles.length > 0) {
                            //NOTE: This is only bandaid wall code. It's not the best way to do it.
                            stupidList = MapControl.addWall(stupidList, player[k]);
                        }

                        for (var i = 0; i < badAngles.length; i++) {
                            var angle1 = badAngles[i][0];
                            var angle2 = MapControl.rangeToAngle(badAngles[i]);
                            stupidList.push([[angle1, true], [angle2, false], badAngles[i][2]]);
                        }

                        //stupidList.push([[45, true], [135, false]]);
                        //stupidList.push([[10, true], [200, false]]);

                        stupidList.sort(function(a, b){
                            //console.log("Distance: " + a[2] + ", " + b[2]);
                            return a[2]-b[2];
                        });

                        //console.log("Added random noob stuff.");

                        var sortedInterList = [];
                        var sortedObList = [];

                        for (var i = 0; i < stupidList.length; i++) {
                            //console.log("Adding to sorted: " + stupidList[i][0][0] + ", " + stupidList[i][1][0]);
                            var tempList = MapControl.addAngle(sortedInterList, stupidList[i]);

                            if (tempList.length == 0) {
                                console.log("MAYDAY IT'S HAPPENING!");
                                break;
                            } else {
                                sortedInterList = tempList;
                            }
                        }

                        for (var i = 0; i < obstacleList.length; i++) {
                            sortedObList = MapControl.addAngle(sortedObList, obstacleList[i]);

                            if (sortedObList.length == 0) {
                                break;
                            }
                        }

                        var offsetI = 0;
                        var obOffsetI = 1;

                        if (sortedInterList.length > 0 && sortedInterList[0][1]) {
                            offsetI = 1;
                        }
                        if (sortedObList.length > 0 && sortedObList[0][1]) {
                            obOffsetI = 0;
                        }

                        var goodAngles = [];
                        var obstacleAngles = [];

                        for (var i = 0; i < sortedInterList.length; i += 2) {
                            var angle1 = sortedInterList[(i + offsetI).mod(sortedInterList.length)][0];
                            var angle2 = sortedInterList[(i + 1 + offsetI).mod(sortedInterList.length)][0];
                            var diff = (angle2 - angle1).mod(360);
                            goodAngles.push([angle1, diff]);
                        }

                        for (var i = 0; i < sortedObList.length; i += 2) {
                            var angle1 = sortedObList[(i + obOffsetI).mod(sortedObList.length)][0];
                            var angle2 = sortedObList[(i + 1 + obOffsetI).mod(sortedObList.length)][0];
                            var diff = (angle2 - angle1).mod(360);
                            obstacleAngles.push([angle1, diff]);
                        }

                        for (var i = 0; i < goodAngles.length; i++) {
                            var line1 = MapControl.followAngle(goodAngles[i][0], player[k].x, player[k].y, 100 + player[k].size);
                            var line2 = MapControl.followAngle((goodAngles[i][0] + goodAngles[i][1]).mod(360), player[k].x, player[k].y, 100 + player[k].size);
                            drawLine(player[k].x, player[k].y, line1[0], line1[1], 1);
                            drawLine(player[k].x, player[k].y, line2[0], line2[1], 1);

                            drawArc(line1[0], line1[1], line2[0], line2[1], player[k].x, player[k].y, 1);

                            //drawPoint(player[0].x, player[0].y, 2, "");

                            drawPoint(line1[0], line1[1], 0, "" + i + ": 0");
                            drawPoint(line2[0], line2[1], 0, "" + i + ": 1");
                        }

                        for (var i = 0; i < obstacleAngles.length; i++) {
                            var line1 = MapControl.followAngle(obstacleAngles[i][0], player[k].x, player[k].y, 50 + player[k].size);
                            var line2 = MapControl.followAngle((obstacleAngles[i][0] + obstacleAngles[i][1]).mod(360), player[k].x, player[k].y, 50 + player[k].size);
                            drawLine(player[k].x, player[k].y, line1[0], line1[1], 6);
                            drawLine(player[k].x, player[k].y, line2[0], line2[1], 6);

                            drawArc(line1[0], line1[1], line2[0], line2[1], player[k].x, player[k].y, 6);

                            //drawPoint(player[0].x, player[0].y, 2, "");

                            drawPoint(line1[0], line1[1], 0, "" + i + ": 0");
                            drawPoint(line2[0], line2[1], 0, "" + i + ": 1");
                        }

                        if (!this.master && goodAngles.length == 0 && (player[k].size * player[k].size / 100) > this.minimumSizeToGoing) {
                            //This is the slave mode
                            console.log("Really Going to: " + this.masterLocation);
                            var distance = MapControl.computeDistance(player[k].x, player[k].y, this.masterLocation[0], this.masterLocation[1]);

                            var shiftedAngle = MapControl.shiftAngle(obstacleAngles, MapControl.getAngle(this.masterLocation[0], this.masterLocation[1], player[k].x, player[k].y), [0, 360]);

                            var destination = MapControl.followAngle(shiftedAngle, player[k].x, player[k].y, distance);

                            destinationChoices = destination;
                            drawLine(player[k].x, player[k].y, destination[0], destination[1], 1);
                        } else if (this.toggleFollow && goodAngles.length == 0) {
                            //This is the follow the mouse mode
                            var distance = MapControl.computeDistance(player[k].x, player[k].y, tempPoint[0], tempPoint[1]);

                            var shiftedAngle = MapControl.shiftAngle(obstacleAngles, MapControl.getAngle(tempPoint[0], tempPoint[1], player[k].x, player[k].y), [0, 360]);

                            var destination = MapControl.followAngle(shiftedAngle, player[k].x, player[k].y, distance);

                            destinationChoices = destination;
                            drawLine(player[k].x, player[k].y, destination[0], destination[1], 1);
                            tempMoveX = destination[0];
                            tempMoveY = destination[1];

                        } else if (goodAngles.length > 0) {
                            var bIndex = goodAngles[0];
                            var biggest = goodAngles[0][1];
                            for (var i = 1; i < goodAngles.length; i++) {
                                var size = goodAngles[i][1];
                                if (size > biggest) {
                                    biggest = size;
                                    bIndex = goodAngles[i];
                                }
                            }
                            var perfectAngle = (bIndex[0] + bIndex[1] / 2).mod(360);

                            perfectAngle = MapControl.shiftAngle(obstacleAngles, perfectAngle, bIndex);

                            var line1 = MapControl.followAngle(perfectAngle, player[k].x, player[k].y, verticalDistance());

                            destinationChoices = line1;
                            drawLine(player[k].x, player[k].y, line1[0], line1[1], 7);
                            //tempMoveX = line1[0];
                            //tempMoveY = line1[1];
                        } else if (badAngles.length > 0 && goodAngles == 0) {
                            //When there are enemies around but no good angles
                            //You're likely screwed. (This should never happen.)

                            console.log("Failed");
                            destinationChoices = [tempMoveX, tempMoveY];
                            /*var angleWeights = [] //Put weights on the angles according to enemy distance
                             for (var i = 0; i < allPossibleThreats.length; i++){
                             var dist = MapControl.computeDistance(player[k].x, player[k].y, allPossibleThreats[i].x, allPossibleThreats[i].y);
                             var angle = MapControl.getAngle(allPossibleThreats[i].x, allPossibleThreats[i].y, player[k].x, player[k].y);
                             angleWeights.push([angle,dist]);
                             }
                             var maxDist = 0;
                             var finalAngle = 0;
                             for (var i = 0; i < angleWeights.length; i++){
                             if (angleWeights[i][1] > maxDist){
                             maxDist = angleWeights[i][1];
                             finalAngle = (angleWeights[i][0] + 180).mod(360);
                             }
                             }
                             var line1 = MapControl.followAngle(finalAngle,player[k].x,player[k].y,f.verticalDistance());
                             drawLine(player[k].x, player[k].y, line1[0], line1[1], 2);
                             destinationChoices.push(line1);*/
                        } else if (clusterAllFood.length > 0) {
                            for (var i = 0; i < clusterAllFood.length; i++) {
                                //console.log("mefore: " + clusterAllFood[i][2]);
                                //This is the cost function. Higher is better.

                                var clusterAngle = MapControl.getAngle(clusterAllFood[i][0], clusterAllFood[i][1], player[k].x, player[k].y);

                                clusterAllFood[i][2] = clusterAllFood[i][2] * 6 - MapControl.computeDistance(clusterAllFood[i][0], clusterAllFood[i][1], player[k].x, player[k].y);
                                //console.log("Current Value: " + clusterAllFood[i][2]);

                                //(goodAngles[bIndex][1] / 2 - (Math.abs(perfectAngle - clusterAngle)));

                                clusterAllFood[i][3] = clusterAngle;

                                drawPoint(clusterAllFood[i][0], clusterAllFood[i][1], 1, "");
                                //console.log("After: " + clusterAllFood[i][2]);
                            }

                            var bestFoodI = 0;
                            var bestFood = clusterAllFood[0][2];
                            for (var i = 1; i < clusterAllFood.length; i++) {
                                if (bestFood < clusterAllFood[i][2]) {
                                    bestFood = clusterAllFood[i][2];
                                    bestFoodI = i;
                                }
                            }

                            //console.log("Best Value: " + clusterAllFood[bestFoodI][2]);

                            var distance = MapControl.computeDistance(player[k].x, player[k].y, clusterAllFood[bestFoodI][0], clusterAllFood[bestFoodI][1]);

                            var shiftedAngle = MapControl.shiftAngle(obstacleAngles, MapControl.getAngle(clusterAllFood[bestFoodI][0], clusterAllFood[bestFoodI][1], player[k].x, player[k].y), [0, 360]);

                            var destination = MapControl.followAngle(shiftedAngle, player[k].x, player[k].y, distance);

                            destinationChoices = destination;
                            //tempMoveX = destination[0];
                            //tempMoveY = destination[1];
                            drawLine(player[k].x, player[k].y, destination[0], destination[1], 1);
                        } else {
                            //If there are no enemies around and no food to eat.
                            destinationChoices = [tempMoveX, tempMoveY];
                        }

                        drawPoint(tempPoint[0], tempPoint[1], tempPoint[2], "");
                        //drawPoint(tempPoint[0], tempPoint[1], tempPoint[2], "" + Math.floor(MapControl.computeDistance(tempPoint[0], tempPoint[1], I, J)));
                        //drawLine(tempPoint[0], tempPoint[1], player[0].x, player[0].y, 6);
                        //console.log("Slope: " + slope(tempPoint[0], tempPoint[1], player[0].x, player[0].y) + " Angle: " + getAngle(tempPoint[0], tempPoint[1], player[0].x, player[0].y) + " Side: " + (getAngle(tempPoint[0], tempPoint[1], player[0].x, player[0].y) - 90).mod(360));
                        tempPoint[2] = 1;
                        //console.log("Done working on blob: " + i);
                    }

                   //TODO: Find where to go based on destinationChoices.
                    /** var dangerFound = false;
                    for (var i = 0; i < destinationChoices.length; i++) {
                        if (destinationChoices[i][2]) {
                            dangerFound = true;
                            break;
                        }
                    }
                    destinationChoices.sort(function (a, b) {
                        return b[1] - a[1]
                    });
                    if (dangerFound) {
                        for (var i = 0; i < destinationChoices.length; i++) {
                            if (destinationChoices[i][2]) {
                                tempMoveX = destinationChoices[i][0][0];
                                tempMoveY = destinationChoices[i][0][1];
                                break;
                            }
                        }
                    } else {
                        /!*tempMoveX = destinationChoices.peek()[0][0];
                        tempMoveY = destinationChoices.peek()[0][1];*!/
                        //console.log("Done " + tempMoveX + ", " + tempMoveY);
                    }*/
                }
                else{
                    /**
                     * Disable auto run bot
                     * @type {number[]}
                     */
                    destinationChoices = tempPoint;
                }
                //console.log("MOVING RIGHT NOW!");

                //console.log("______Never lied ever in my life.");
                if (this.master) {
                    this.masterLocation = destinationChoices;
                    this.masterId = player[0].id;
                    if (Date.now() - this.lastMasterUpdate > 500) {
                        var self = this;
                        var query = new Parse.Query(this.MasterLocation);
                        query.equalTo("server", getServer());
                        query.first({
                            success: function(object) {
                                console.log("Done query");
                                if (typeof object != 'undefined') {
                                    object.set("location", destinationChoices);
                                    object.set("cellId", player[0].id);
                                    object.set("server", getServer());
                                    console.log("New location saved! " + object.get("location") + " ID: " + player[0].id + " Server: " + getServer());
                                    object.save();
                                } else {
                                    console.log("We have a problem!");
                                    var ml = new self.MasterLocation();
                                    ml.set("location", destinationChoices);
                                    ml.set("cellId", player[0].id);
                                    ml.set("server", getServer());
                                    console.log("New location saved! " + ml.get("location") + " ID: " + player[0].id + " Server: " + getServer());
                                    ml.save();
                                }
                            },
                            error: function(error) {
                                console.log("Error: " + error.code + " " + error.message);
                            }
                        });
                        this.lastMasterUpdate = Date.now();
                    }
                }

                return destinationChoices;
            }
        },
    });
    app.module("FeedBot", {
        moduleClass: AgarBot.Modules.FeedBot
    });
})(window, Parse, jQuery, Backbone, Backbone.Marionette, _, AgarBot, AgarBot.app);