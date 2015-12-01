(function (window, $, Backbone, Marionette, _, AgarBot, app) {
    "use strict"
    AgarBot.Modules.MapUtil = Marionette.Module.extend({
        initialize: function (moduleName, app, options) {
            this.canvasContext = 'undefined';
        },
        onStart: function (options) {
            console.log('Module MapUtil start');
            this.listenTo(AgarBot.pubsub, 'main_out:mainloop', this.drawRound);
            this.listenTo(AgarBot.pubsub,'document.ready', this.onDocumentReady);
        },
        onDocumentReady:function(){
            setAcid(false);
        },
        getCanvasContext:function(){
            if(this.canvasContext === 'undefined'){
                console.log('get canvas');
                this.canvas = $("#canvas")[0];
                this.canvasContext = this.canvas.getContext("2d");
            }
            return this.canvasContext;
        },
        drawRound:function(){
            var context = this.getCanvasContext();
            context.save();
            context.beginPath();
            context.lineWidth = 5;
            context.strokeStyle = (window.getDarkBool() ? '#F2FBFF' : '#111111');

            context.moveTo(window.getMapStartX(), window.getMapStartY());
            context.lineTo(window.getMapStartX(), window.getMapEndY());
            context.stroke();

            context.moveTo(window.getMapStartX(), window.getMapStartY());
            context.lineTo(window.getMapEndX(), window.getMapStartY());
            context.stroke();
            context.moveTo(window.getMapEndX(), window.getMapStartY());
            context.lineTo(window.getMapEndX(), window.getMapEndY());
            context.stroke();
            context.moveTo(window.getMapStartX(), window.getMapEndY());
            context.lineTo(window.getMapEndX(), window.getMapEndY());
            context.stroke();
            context.restore();
        }
    });
    app.module("MapUtil", {
        moduleClass: AgarBot.Modules.MapUtil
    });
})(window, jQuery, Backbone, Backbone.Marionette, _, AgarBot, AgarBot.app);