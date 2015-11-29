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

        for(var i = 0; i<cellData.length; i++){
            clanCells[cellData[i].id] = cellData[i];
            clanCells[cellData[i].id].lastUpdate = Date.now();
        }
        /**
         * Remove some outdate
         */
        Object.keys(clanCells).forEach(function(k, index) {
            if(Date.now() - clanCells[k].lastUpdate > 200){
                delete clanCells[k];
            }
        });
    };
    window.getClanCells=function(){
        return clanCells;
    };
    AgarBot.Views.CommandPanel = Marionette.ItemView.extend({
        events:{
            'click #invitePlayer':'sendInvite'
        },
        initialize:function(){

        },
        template: function(){
            var templateLoader = app.module('TemplateLoader');
            var template = templateLoader.getTemlate('commandPanel');
            return template;
        },
        sendInvite:function(e){
            e.preventDefault();
            AgarBot.pubsub.trigger('sendCommand',{
                command:'invite',
                args:{
                    ip:getServer(),
                    key:getToken()
                }
            });
        }
    });
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
            $('<div id="commandPanel"></div>').appendTo($('#control-pannel'));
            $joinPartyToken.attr('placeholder', 'Code');

            if(typeof this.clanFormField =='undefined'){
                this.clanFormField = new AgarBot.Views.ClanFormField({
                    el:'#clanFormField',
                    model:this.settings
                });
            }
            this.clanFormField.render();

           if(typeof this.commandPanel =='undefined'){
                this.commandPanel = new AgarBot.Views.CommandPanel({
                    el:'#commandPanel'
                });
            }
            this.commandPanel.render();
        }
    });
    app.module("Clan", {
        moduleClass: AgarBot.Modules.Clan
    });
})(window, jQuery, Backbone, Backbone.Marionette, _, AgarBot, AgarBot.app);