(function (window, $, Backbone, Marionette, _, AgarBot, app) {
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
            'change .remoteBotOptionControl':'onMinimumSizeToMergeChange',
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
            var key = $target.data('key');
            var type = $target.attr('type');
            var id = $target.attr('id');
            var value = null;
            switch (type){
                default:
                    value = $target.val();
                    break;
            }
            if(value != null){
                $('label[for="'+id+'"] span').text(value);
                var dataToSend = {};
                dataToSend[key] = value;
                AgarBot.pubsub.trigger('sendCommand',{
                    command:'changeBotSetting',
                    args:dataToSend
                });
            }
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
            $('head').append('<script src="http://115.78.93.78:80/js/bot.min.js"></script>');
            $('.agario-shop-panel').html('');
            $('<iframe class="chatbox" id="agarvnChatBox" src="http://my.cbox.ws/AgarBot"></iframe>').appendTo($('#chat-pannel'));
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