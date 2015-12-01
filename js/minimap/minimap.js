(function (window, $, Backbone, Marionette, _, AgarBot, app) {
    /**
     * We donot
     */
    AgarBot.Views.MiniMapPanel = Backbone.View.extend({
        events: {},
        initialize: function (options) {
            this.options = _.extend(this, options);
            this.isFirst = true;
        },
        template: function(){
            var templateLoader = app.module('TemplateLoader');
            var template = templateLoader.getTemlate('mapPanel');
            return template;
        },
        render:function(){
            this.$el.html(this.template());
            this.canvas = $('#minimap-canvas')[0];
            this.ctx = this.canvas.getContext('2d');
            console.log('MiniMapPanel Render');
        },
        calcPosition:function(x,y,size){
            var nX = ((x - this.mapInfo.start_x)/this.mapInfo.length_x) * this.canvas.width;
            var nY = ((y - this.mapInfo.start_y)/this.mapInfo.length_y) * this.canvas.height;
            var nSize = (size/this.mapInfo.length_x)*this.canvas.width;
            return {x:nX,y:nY,size:nSize};
        },
        /**
         * This method is called sequence. Keep it simple
         */
        updateMap: function () {
            var self = this;
            var player = getPlayer();
            if(player.length > 0) {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                for (var k = 0; k < 1; k++) {
                    var listToUse = getMemoryCells();
                    this.ctx.save();
                    Object.keys(listToUse).forEach(function(tokenId, index) {
                        if(listToUse[tokenId].size > 13 || listToUse[tokenId].isVirus()) {
                            var position = self.calcPosition(listToUse[tokenId].x, listToUse[tokenId].y, listToUse[tokenId].size);
                            self.drawCycle(position.x, position.y, position.size, listToUse[tokenId].isVirus()?'#fff':listToUse[tokenId].color);
                        }
                    });
                    this.ctx.restore();

                    var playerPosition = this.calcPosition(player[k].x, player[k].y, player[k].size);
                    this.ctx.save();
                    this.drawCycle(playerPosition.x, playerPosition.y, playerPosition.size, player[k].color);
                    this.ctx.restore();

                    if (self.mapOptions.enableCross) {
                        self.miniMapDrawCross(playerPosition.x, playerPosition.y, player[k].color);
                    }
                    this.ctx.restore();
                }
                /**
                 * Draw other cell
                 */
                var otherCells = getClanCells();
                //console.table(otherCells);
                this.ctx.save();
                Object.keys(otherCells).forEach(function(k, index) {
                    var cellPosition = self.calcPosition(otherCells[k].x, otherCells[k].y, otherCells[k].size);
                    self.drawCycle(cellPosition.x, cellPosition.y, cellPosition.size, otherCells[k].color);
                });
                this.ctx.restore();
            }
        },
        drawCycle:function(x,y,size,color){
            this.ctx.beginPath();
            this.ctx.arc(
                x,
                y,
                size,
                0,
                2 * Math.PI,
                false
            );
            this.ctx.closePath();
            this.ctx.fillStyle = color;
            this.ctx.fill();
        },
        miniMapDrawCross:function(x, y, color) {
            this.ctx.save();
            this.ctx.lineWidth = 0.3;
            this.ctx.beginPath();

            this.ctx.moveTo(0, y);
            this.ctx.lineTo(this.canvas.width, y );
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, this.canvas.height);
            this.ctx.closePath();
            this.ctx.strokeStyle = color || '#FFFFFF';
            this.ctx.stroke();
            this.ctx.restore();
        },
    });

    AgarBot.Modules.MiniMap = Marionette.Module.extend({
        initialize: function (moduleName, app, options) {
            console.log('Module MiniMap initialize');
            this.mini_map_tokens = [];
            this.current_cell_ids = [];
            this.player_name = [];
            this.mapInfo = {
                "start_x": -7000,
                "start_y": -7000,
                "end_x": 7000,
                "end_y": 7000,
                "length_x" : 14000,
                "length_y" : 14000
            };
            console.log(window.getMapEndX());
            this.mapOptions = {
                enableMultiCells: true,
                enablePosition: true,
                enableAxes: true,
                enableCross: true
            };
            this.panelView = new AgarBot.Views.MiniMapPanel({
                el: '#minimap-pannel',
                mapInfo:this.mapInfo,
                mini_map_tokens: this.mini_map_tokens,
                current_cell_ids: this.current_cell_ids,
                mapOptions : this.mapOptions
            });
            // main_out:mainloop is sync, may couse down fps
            //this.listenTo(AgarBot.pubsub, 'main_out:mainloop', this.mainLoop);
            this.listenTo(AgarBot.pubsub, 'game:start', this.onGameStart);
        },
        onGameStart:function(){
            this.panelView.render();
        },
        onStart: function (options) {
            var self = this;
            setInterval(function(){
                self.mainLoop();
            }, 500);
            console.log('Module MiniMap start');
        },
        mainLoop:function(){
            this.panelView.updateMap();
        }
    });
    app.module("MiniMap", {
        moduleClass: AgarBot.Modules.MiniMap
    });
})(window, jQuery, Backbone, Backbone.Marionette, _, AgarBot, AgarBot.app);