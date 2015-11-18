(function (window, Parse, $, Backbone, Marionette, _, AgarBot, app) {
    var socket = io();
    AgarBot.Modules.Client = Marionette.Module.extend({
        initialize: function (moduleName, app, options) {

        },
        onStart: function (options) {

        }
    });
    app.module("Client", {
        moduleClass: AgarBot.Modules.Client
    });
})(window, Parse, jQuery, Backbone, Backbone.Marionette, _, AgarBot, AgarBot.app);