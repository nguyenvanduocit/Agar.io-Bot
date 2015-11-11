(function($, Backbone, _, AgarBot, app){
    AgarBot.Modules.FeedBot =Marionette.Module.extend({
        initialize: function(moduleName, app, options) {
            this.socketAddress = '';
            console.log('Module FeedBot initialize');
            this.listenTo(AgarBot.pubsub,'SocketOpened', this.onSocketOpen);
        },
        onSocketOpen:function(data){
            this.socketAddress = data.socketAddress
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
    /**
     * @author nguyenvanduocit
     * Auto feed bot
     */
    var FeedBot = function(){
        this.updateMousePossitionInterval = null;
    };
    FeedBot.prototype.run = function(){
        /**
         * Bot need to skip stats
         */
        d.setSkipStats(true);
        /**
         * Set the destination
         */
        this.setDestination(100,100);
    };
    FeedBot.prototype.setDestination = function(x, y){
        /**
         * try to clear first
         */
        this.clearPossitionInterval();
        this.updateMousePossitionInterval = setInterval(function(){
                oa = x;
                pa = y;
                La();
            },
            1000);
    };
    FeedBot.prototype.clearPossitionInterval = function(){
        if(this.updateMousePossitionInterval != null){
            clearInterval(this.updateMousePossitionInterval);
        }
    };
})(jQuery, Backbone, _, AgarBot, AgarBot.app);