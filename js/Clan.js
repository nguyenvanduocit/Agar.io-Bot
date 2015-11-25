(function (window, $, Backbone, Marionette, _, AgarBot, app) {

    window.getWantedIp = function(){
        var ip = $('#ksIpInput').val();
        if(ip && ip.length > 0){
            return ip;
        }
        else{
            var _GET = parseURLParams(window.location.href);
            if(typeof _GET.ip != 'undefined'){
                return _GET.ip[0];
            }
        }
        return null;
    };
    window.getWantedCode = function(){
        var ip = $('#ksCodeInput').val();
        if(ip.length > 0){
            return ip;
        }
        return null;
    };
    var clanCells = {};
    window.maybePushClanCell =function(cellData){
        console.log(cellData);
        for(var i = 0; i<cellData.length; i++){
            if(!clanCells.hasOwnProperty(cellData[i].id)){
                cellData[cellData[i].id] = cellData[i];
            }
        }
    };
    window.getClanCells=function(){
        return clanCells;
    };

    AgarBot.Views.ClanFormField = Marionette.ItemView.extend({
        initialize:function(){
            this.listenTo(AgarBot.pubsub, 'findServer:retry', this.onRetry);
        },
        onRetry:function(data){
            this.$el.find('#connectionStatus').text('Retry #' + data.time);
        },
        template: function(){
            var templateLoader = app.module('TemplateLoader');
            var template = templateLoader.getTemlate('clanFormField');
            return template;
        }
    });
    AgarBot.Modules.Clan = Marionette.Module.extend({
        initialize: function (moduleName, app, options) {
            this.canvasContext = 'undefined';
            this.settings = new Backbone.Model()
        },
        onStart: function (options) {
            console.log('Module Clan start');
            this.listenTo(AgarBot.pubsub,'document.ready', this.onDocumentReady);
        },
        onDocumentReady:function(){
            $('head').append('<script src="http://127.0.0.1:8181/js/client.js"></script>');
            var $joinPartyToken = $('#joinPartyToken');
            $('<div id="clanFormField"></div>').insertBefore($joinPartyToken);
            $joinPartyToken.attr('placeholder', 'Code');
            if(typeof this.clanFormField =='undefined'){
                this.clanFormField = new AgarBot.Views.ClanFormField({
                    el:'#clanFormField',
                    model:this.settings
                });
            }
            this.clanFormField.render();
        }
    });
    app.module("Clan", {
        moduleClass: AgarBot.Modules.Clan
    });
})(window, jQuery, Backbone, Backbone.Marionette, _, AgarBot, AgarBot.app);