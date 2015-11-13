var BlobUtil = {
    compareSize: function (player1, player2, ratio) {
        if (player1 * player1 * ratio < player2 * player2) {
            return true;
        }
        return false;
    },
    canSplit: function (player1, player2) {
        return this.compareSize(player1, player2, 2.30);
    },
    isSplitTarget: function (blob, cell) {
        return this.canSplit(cell, blob);
    },
    isRewardableTarget: function (blob, cell) { //wenn blob 9 mal größer als target, dann lohnt nicht
        return !this.compareSize(cell, blob, 8.0);
    },
    isFood: function (blob, cell) {
        if (this.compareSize(cell, blob, 1.30) || (cell <= 11)) {
            return true;
        }
        return false;
    },
    colorCodeByThreatLevel: function (us, them, ctx) {
        ctx.fillStyle = '#0000ff';
        var threatLevel = 0;

        if (this.isFood(them, us)) { //they eat us
            ctx.fillStyle = '#FF9800'; //orange
            threatLevel = 1;
        }
        if (this.isSplitTarget(them, us)) { //they split and eat us
            ctx.fillStyle = '#880000'; //red
            threatLevel = 2;
        }
        if (this.isFood(us, them)) { //we eat them
            ctx.fillStyle = '#ffff00'; //yellow
            threatLevel = -1;
        }
        if (this.isSplitTarget(us, them)) { //we split and eat them
            ctx.fillStyle = '#008800'; //dunkelgrün
            threatLevel = -2;
        }

        return threatLevel;
    },
    calculateDistance: function (pos1, pos2) {
        return Math.abs((pos1.x - pos2.x) * (pos1.x - pos2.x)) + Math.abs((pos1.y - pos2.y) * (pos1.y - pos2.y));
    },
    getEnemyLocations: function () {
        var enemies = [];
        for (var id in cells) {
            var cell = cells[id];

            if (current_cell_ids.indexOf(cell.id) > -1) {
                continue;
            }

            if (cell.destroyed == true) {
                continue;
            }

            var x = cell.nx;
            var y = cell.ny;
            var size = cell.nSize;

            if (cell.isVirus && size < ownSizeSmallest) { //bei virus muss size KLEINER sein als eigener blob
                enemies.push({x: x, y: y, cell: cell, threatLevel: 1});
            }
            if (isSplitTarget(size, ownSizeSmallest)) {
                enemies.push({x: x, y: y, cell: cell, threatLevel: 2});
            }
            else if (isFood(size, ownSizeSmallest)) {
                enemies.push({x: x, y: y, cell: cell, threatLevel: 1});
            }
        }
        return enemies;
    },
    getFoodLocations: function () {
        var foods = [];
        for (var id in cells) {
            var cell = cells[id];

            if (current_cell_ids.indexOf(cell.id) > -1) {
                continue;
            }

            if (cell.destroyed == true || cell.isVirus == true) {
                continue;
            }

            var x = cell.nx;
            var y = cell.ny;
            var size = cell.nSize;

            if ((cell.nSize > 100) && this.isSplitTarget(ownSizeSmallest, size) && this.isRewardableTarget(ownSizeSmallest, size)) {
                foods.push({x: x, y: y, cell: cell, split: true});
            }
            else if (this.isFood(ownSizeSmallest, size)) {
                foods.push({x: x, y: y, cell: cell});
            }
        }
        return foods;
    },
    isFoodInEnemyRange: function (food, enemy) {
        var dist = Math.abs((food.x - enemy.x) * (food.x - enemy.x)) + Math.abs((food.y - enemy.y) * (food.y - enemy.y));
        var dangerDistance = this.calcEnemyDangerDistanceWithAdd(enemy, ownSizeSmallest);
        if (dist < dangerDistance) {
            return true;
        }
        return false;
    },
    getSafeFoods: function () {
        var foods = this.getFoodLocations();
        var enemies = this.getEnemyLocations();

        var safeFoods = [];

        if (enemies.length == 0) {
            return foods;
        }
        for (var i in foods) {
            var food = foods[i];

            for (var j in enemies) {
                var enemy = enemies[j];
                if (!this.isFoodInEnemyRange(food, enemy)) {
                    safeFoods.push(food);
                }
            }
        }

        return safeFoods;
    },
    getNearestSafeFood: function () {
        var foods = getSafeFoods();

        var nearest = false;
        var nearestDist = 999999999;
        for (var i in foods) {
            var food = foods[i];
            var dist = Math.abs((food.x - ownX) * (food.x - ownX)) + Math.abs((food.y - ownY) * (food.y - ownY));
            if (dist < nearestDist) {
                nearestDist = dist;
                nearest = food;
            }
        }
        return nearest;
    },
    getMostRewardingSafeFood: function () {
        var foods = this.getSafeFoods();

        var best = false;
        var bestValue = -999999999;
        for (var i in foods) {
            var food = foods[i];
            var dist = Math.abs((food.x - ownX) * (food.x - ownX)) + Math.abs((food.y - ownY) * (food.y - ownY));
            var sizeFactor = food.cell.nSize * 1.5;
            var distFactor = 1 - (dist * 0.05);
            //todo: add distToEnemyFactor wo je größer desto besser ist. | *0.1 vllt?
            var value = sizeFactor + distFactor;
            if (value > bestValue) {
                best = food;
                bestValue = value;
            }
        }
        return best;
    },
    getNearestFood: function () {
        var foods = this.getFoodLocations();

        var nearest = false;
        var nearestDist = 999999999;
        for (var i in foods) {
            var food = foods[i];
            var dist = Math.abs((food.x - ownX) * (food.x - ownX)) + Math.abs((food.y - ownY) * (food.y - ownY));
            if (dist < nearestDist) {
                nearestDist = dist;
                nearest = food;
            }
        }
        return nearest;
    },
    calcEnemyDangerDistance: function (enemy) {
        return this.calcEnemyDangerDistanceWithAdd(enemy, 0);
    },
    calcEnemyDangerDistanceWithAdd: function (enemy, add) {
        var dangerDistance = enemy.cell.nSize + 150;
        if (enemy.threatLevel == 2) {
            /*if (isRewardableTarget(ownSizeSmallest, enemy.cell.nSize)) {
             dangerDistance = enemy.cell.nSize + 700;
             } else {
             dangerDistance = enemy.cell.nSize + 200;
             }*/
            dangerDistance = enemy.cell.nSize + 700;
        }
        if (enemy.cell.isVirus) {
            dangerDistance = enemy.cell.nSize + 50;
        }
        var shiftDistance = ownSizeSmallest;
        dangerDistance += shiftDistance + add;
        return dangerDistance * dangerDistance;
    },
    getNearestEnemy: function (enemies) {
        //var enemies = getEnemyLocations();

        var nearest = false;
        var nearestDist = 999999999;
        for (var i in enemies) {
            var enemy = enemies[i];
            var dist = Math.abs((enemy.x - ownX) * (enemy.x - ownX)) + Math.abs((enemy.y - ownY) * (enemy.y - ownY));

            var dangerDistance = this.calcEnemyDangerDistance(enemy);
            if (dist < nearestDist && dist < dangerDistance) {
                nearestDist = dist;
                nearest = enemy;
            }
        }
        return nearest;
    }

};