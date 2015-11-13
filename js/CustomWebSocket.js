(function (window, $, Backbone, Marionette, _, AgarBot, app) {
    var _WebSocket = window._WebSocket = window.WebSocket;
    // the injected point, overwriting the WebSocket constructor
    window.WebSocket = function(url, protocols) {
        console.log('Listen');
        if (protocols === undefined) {
            protocols = [];
        }

        var ws = new _WebSocket(url, protocols);

        refer(this, ws, 'binaryType');
        refer(this, ws, 'bufferedAmount');
        refer(this, ws, 'extensions');
        refer(this, ws, 'protocol');
        refer(this, ws, 'readyState');
        refer(this, ws, 'url');

        this.send = function(data){
            //extractSendPacket(data);
            AgarBot.pubsub.trigger('websocket:send', data);
            return ws.send.call(ws, data);
        };

        this.close = function(){
            return ws.close.call(ws);
        };

        this.onopen = function(event){};
        this.onclose = function(event){};
        this.onerror = function(event){};
        this.onmessage = function(event){};

        ws.onopen = function(event) {
            AgarBot.pubsub.trigger('websocket:onopen', {
                url: url,
                region: $('#region').val(),
                gamemode: $('#gamemode').val(),
                party: location.hash
            });
            /*miniMapSendRawData(msgpack.pack({
                type: 100,
                data: {url: url, region: $('#region').val(), gamemode: $('#gamemode').val(), party: location.hash}
            }));*/
            if (this.onopen) {
                return this.onopen.call(ws, event);
            }
        }.bind(this);

        ws.onmessage = function(event) {
            AgarBot.pubsub.trigger("websocket:onmessage",event);
            if (this.onmessage)
                return this.onmessage.call(ws, event);
        }.bind(this);

        ws.onclose = function(event) {
            AgarBot.pubsub.trigger("websocket:onclose",{event:event});
            if (this.onclose)
                return this.onclose.call(ws, event);
        }.bind(this);

        ws.onerror = function(event) {
            AgarBot.pubsub.trigger("websocket:onclose",{event:onerror});
            if (this.onerror)
                return this.onerror.call(ws, event);
        }.bind(this);
    };
    window.WebSocket.prototype = _WebSocket;
    // create a linked property from slave object
    // whenever master[prop] update, slave[prop] update
    function refer(master, slave, prop) {
        Object.defineProperty(master, prop, {
            get: function(){
                return slave[prop];
            },
            set: function(val) {
                slave[prop] = val;
            },
            enumerable: true,
            configurable: true
        });
    }
})(window, jQuery, Backbone, Backbone.Marionette, _, AgarBot, AgarBot.app);