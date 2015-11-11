(function($, Backbone, _, AgarBot, app){

    AgarBot.Models.Bot = Backbone.Model.extend({
        defaults: {
            "socketAddress":  "",
            "name":     "senviet.org",
            "destination":    {x:0, y:0}
        },

    });

    AgarBot.Modules.FeedBot =Marionette.Module.extend({
        initialize: function(moduleName, app, options) {
            this.socketAddress = '';
            console.log('Module FeedBot initialize');
            this.listenTo(AgarBot.pubsub,'SocketOpened', this.onSocketOpen);
        },
        onSocketOpen:function(data){
            this.socketAddress = data.socketAddress;

        },
        onCellDead:function(){
            window.setNick('Fuck you bitch');
        },
        onStart: function(options) {
            console.log('Module FeedBot start');
        }
    });
    app.module("FeedBot", {
        moduleClass: AgarBot.Modules.FeedBot
    });
})(jQuery, Backbone, _, AgarBot, AgarBot.app);