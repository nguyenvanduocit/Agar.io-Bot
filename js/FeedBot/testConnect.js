Number.prototype.mod = function(n) {
    return ((this % n) + n) % n;
};

Array.prototype.peek = function() {
    return this[this.length - 1];
};
(function (window, Parse, $, Backbone, Marionette, _, AgarBot, app) {
    AgarBot.Modules.AutoBot = Marionette.Module.extend({
        initialize: function (moduleName, app, options) {
        },
        onStart: function (options) {

        }
    });
    app.module("AutoBot", {
        moduleClass: AgarBot.Modules.AutoBot
    });
})(window, Parse, jQuery, Backbone, Backbone.Marionette, _, AgarBot, AgarBot.app);