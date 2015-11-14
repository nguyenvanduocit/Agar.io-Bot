(function (window, $, Backbone, Marionette, _, AgarBot, app) {
    AgarBot.Views.Panel = Marionette.CompositeView.extend({
        events:{
            "click #runbot":'onRunBotClicked'
        },
        onRunBotClicked:function(e){
            e.preventDefault();
            AgarBot.pubsub.trigger('onRunBotClicked');
        },
        getTemplate:function(){
            var templateLoader = app.module('TemplateLoader');
            return templateLoader.getTemlate('panel');
        }
    });

    AgarBot.Modules.FeedBot = Marionette.Module.extend({
        initialize: function (moduleName, app, options) {
            this.socketAddress = '';
            this.server = '';
            this.token = ''
            console.log('Module FeedBot initialize');
            this.panelModel = new Backbone.Model({
                "canRunBot":false
            });
            console.log('Module Panel initialize');
            this.panelView = new AgarBot.Views.Panel({
                el : '#control-pannel',
                model:this.panelModel
            });
        },
        onStart: function (options) {
            console.log('Module FeedBot start');
            this.listenTo(AgarBot.pubsub, 'SocketOpened', this.onSocketOpen);
            this.listenTo(AgarBot.pubsub, 'changeServer', this.onChangeServer);
            this.listenTo(AgarBot.pubsub, 'onRunBotClicked', this.onRunBotClicked);
            this.panelView.render();
        },
        onChangeServer:function(data){
            this.server = data.server;
        },
        onSocketOpen: function (data) {
            this.socketAddress = data.socketAddress;
            this.token = data.token;
        },
        onRunBotClicked: function () {
            var self = this;
            if(this.socketAddress == ''){
                alert('Can not recive socketAddress');
                return;
            }
            /**
             * Have socket, and create bot if needed
             */
            if(typeof this.agarBot == 'undefined'){
                this.agarBot = new window.VnAgarBot({
                    "socketAddress": this.socketAddress,
                    "server": this.server,
                    "name": "Fuck your bitch"
                });
            }
            this.agarBot.start();

            setTimeout(function(){
                self.agarBot.play();
            }, 1000);

            setTimeout(function(){
                //self.agarBot.closeSocket();
            }, 10000);
        }
    });
    app.module("FeedBot", {
        moduleClass: AgarBot.Modules.FeedBot
    });
})(window, jQuery, Backbone, Backbone.Marionette, _, AgarBot, AgarBot.app);