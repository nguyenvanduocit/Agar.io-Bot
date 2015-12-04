(function (window, $, Backbone, Marionette, _, AgarBot, app) {

    AgarBot.Views.StatsPannel = Marionette.ItemView.extend({
        template: function(serialized_model){
            var templateLoader = app.module('TemplateLoader');
            var template = templateLoader.getTemlate('statsPanel');
            return template(serialized_model);
        }
    });
    AgarBot.Modules.Stats = Marionette.Module.extend({
        initialize: function (moduleName, app, options) {
            this.canvasContext = 'undefined';
            this.info = new Backbone.Model({
                serverIp:'Na',
                clientToken:'Na'
            })
        },
        onStart: function (options) {
            console.log('Module Clan start');
            //this.listenTo(AgarBot.pubsub,'document.ready', this.onDocumentReady);
        },
        onDocumentReady:function(){
            $('<div id="statsPanel"></div>').appendTo($('#control-pannel'));
            if(typeof this.statsPanel =='undefined'){
                this.statsPanel = new AgarBot.Views.StatsPannel({
                    el:'#statsPanel',
                    model:this.info
                });
            }
            this.statsPanel.render();
        }
    });
    app.module("Stats", {
        moduleClass: AgarBot.Modules.Stats
    });
})(window, jQuery, Backbone, Backbone.Marionette, _, AgarBot, AgarBot.app);