(function (window, Parse, $, Backbone, Marionette, _, AgarBot, app) {
    var socket = io();
    AgarBot.Modules.Client = Marionette.Module.extend({
        initialize: function (moduleName, app, options) {

        },
        onStart: function (options) {
            var self = this;
            socket.on( 'connect', function () {
                if (self.isFirstConnect ) {
                    self.isFirstConnect = false;
                    AgarBot.pubsub.trigger( 'connect' );
                }else{
                    AgarBot.pubsub.trigger( 'reconnect' );
                }
            } );

            socket.on( 'disconnect', function () {
                AgarBot.pubsub.trigger( 'disconnect' );
            } );
            socket.on( 'client.init.result', function ( resp ) {
                AgarBot.pubsub.trigger( 'client.init.result', resp );
            } );

            socket.on( 'client.login.result', function ( resp ) {
                AgarBot.pubsub.trigger( 'client.login.result', resp );
            } );
            socket.on( 'client.leave', function ( resp ) {
                AgarBot.pubsub.trigger( 'client.leave', resp );
            } );
            socket.on( 'room.create', function ( resp ) {
                AgarBot.pubsub.trigger( 'room.create', resp );
            } );

            this.listenTo( AgarBot.pubsub, 'client.init.result', this.onClientInitResult );
            this.listenTo( AgarBot.pubsub, 'client.login.result', this.onClientLoginResult );
            this.listenTo( AgarBot.pubsub, 'room.create', this.onRoomCreate );
            this.listenTo( AgarBot.pubsub, 'disconnect', this.onDisconnect );
        },
        onRoomCreate:function(data){
            console.log('Room created');
            console.log(data);
        },
        onClientInitResult:function(resp){
            if(resp.isAllowed){
                console.log('Connect is allowed');
                socket.emit('client.login', {room:'192.167.1.1#DKXK', name:'Được'})
            }else{
                console.log('Connect is no allowed')
            }
        },
        onClientLoginResult:function(resp){
            console.log(resp);
        },
        onDisconnect: function ( data ) {
            console.log( 'You are disconnected' );
        },
        updateClient:function(){
            socket.emit('client.updateClient', data);
        }
    });
    app.module("Client", {
        moduleClass: AgarBot.Modules.Client
    });
})(window, Parse, jQuery, Backbone, Backbone.Marionette, _, AgarBot, AgarBot.app);