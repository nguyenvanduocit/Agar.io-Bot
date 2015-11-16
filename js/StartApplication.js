/**
 * At the end of the world. We lauch the application
 */
(function($, Backbone, _,AgarBot, app){
    app.start();
    $(document).ready(function(){
        AgarBot.pubsub.trigger('document.ready');
    });
})(jQuery, Backbone, _,AgarBot, AgarBot.app);