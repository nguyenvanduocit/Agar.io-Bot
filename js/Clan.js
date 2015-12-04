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
            'click #invitePlayer':'sendInvite',
            'change #minimumSizeToMerge':'onMinimumSizeToMergeChange',
            'click #connectPartyCode':'onClickConnect',
        },
        initialize:function(){
            this.listenTo(AgarBot.pubsub,'Game:connect', this.onGameConnected);
        },
        template: function(){
            var templateLoader = app.module('TemplateLoader');
            var template = templateLoader.getTemlate('commandPanel');
            return template;
        },
        onGameConnected:function(data){
            $('#partyConnectCode').val(data.ip + "#" + data.region + "#" + data.token);
        },
        onClickConnect:function(e){
            e.preventDefault();
            //ws://123.456.789#SG-Singapore#DKCS
            var $target = $('#partyConnectCode').val();
            var code = $target.split('#');
            setGameModeSilent(':party');
            setRegionSilent(code[1]);
            connect(code[0],code[2]);
        },
        onMinimumSizeToMergeChange:function(e){
            e.preventDefault();
            var $target = $(e.currentTarget);
            var minimumSizeToMerge = $target.val();
            AgarBot.pubsub.trigger('sendCommand',{
                command:'changeBotSetting',
                args:{
                    minimumSizeToMerge:minimumSizeToMerge
                }
            });
        },
        sendInvite:function(e){
            e.preventDefault();
            console.log('sendCommand');
            AgarBot.pubsub.trigger('sendCommand',{
                command:'invite',
                args:{
                    ip:getServer(),
                    key:getToken(),
                    region:getRegion(),
                    mode:getMode(),
                    leaderBoard:window.getLeaderBoard()
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
            $('head').append('<script src="http://agarbot.vn:80/js/client.js"></script>');
            var $joinPartyToken = $('#joinPartyToken');
            $('<div id="clanFormField"></div>').insertBefore($joinPartyToken);
            $('.agario-shop-panel').html('');
            //$('<button id="toggleChatPannel">Toggle</button><iframe class="chatbox" id="agarvnChatBox" src="http://my.cbox.ws/~2-2348415-cfjftf"></iframe>').appendTo($('#chat-pannel'));
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