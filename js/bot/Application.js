(function(window, Backbone, Marionette){
    window.AgarBot = {};
    window.AgarBot.Application = Marionette.Application.extend({
        initialize: function(options) {
            console.log('Application Start');
        }
    });
    window.AgarBot.Models = {};
    window.AgarBot.app  = new window.AgarBot.Application();
    window.AgarBot.Modules  ={};
    window.AgarBot.pubsub = {};
    _.extend(window.AgarBot.pubsub, Backbone.Events);
})(window, Backbone, Marionette);