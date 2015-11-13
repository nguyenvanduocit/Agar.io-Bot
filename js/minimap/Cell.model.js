(function (window, $, Backbone, Marionette, _, AgarBot, app) {
    AgarBot.Models.Cell = Backbone.Model.extend({
        defaults:
        {
            points: null,
            pointsAcc: null,
            name: null,
            nameCache: null,
            sizeCache: null,
            x: 0,
            y: 0,
            size: 0,
            ox: 0,
            oy: 0,
            oSize: 0,
            nx: 0,
            ny: 0,
            nSize: 0,
            updateTime: 0,
            updateCode: 0,
            drawTime: 0,
            destroyed: false,
            isVirus: false,
            isAgitated: false,
            wasSimpleDrawing: true
        },
        constructor: function() {
            Backbone.Model.apply(this, arguments);
            this.set('pX', this.get('x'));
            this.set('pY', this.get('y'));
            this.set('ox', this.get('x'));
            this.set('oy', this.get('y'));
        },
        set: function(attributes, options) {
            Backbone.Model.prototype.set.apply(this, arguments);
        }
    });
})(window, jQuery, Backbone, Backbone.Marionette, _, AgarBot, AgarBot.app);