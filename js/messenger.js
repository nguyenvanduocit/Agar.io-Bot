(function($, Backbone, _, AgarBot, app){

    AgarBot.Modules.Messenger = Marionette.Module.extend({
        initialize: function(moduleName, app, options) {
            this.extId = 'bpiedfhfaipmeaglaemfbfapmknkckop';
            console.log('Module Messenger initialize, extID = ', this.extId);
        },
        sendMessage:function(data, callback){
            chrome.runtime.sendMessage(this.extId, data,callback);
        }
    });
    app.module("Messenger", {
        moduleClass: AgarBot.Modules.Messenger
    });
})(jQuery, Backbone, _, AgarBot, AgarBot.app);