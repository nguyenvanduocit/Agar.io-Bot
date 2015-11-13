(function(window, $, Backbone, _){
    /**
     *
     * @param options
     * {
     *      socketAddress,
     *      server,
     *      name
     * }
     * @constructor
     */
    window.VnAgarBot = function(options){
        this.model = new Backbone.Model(options);
    };
    _.extend(window.VnAgarBot.prototype, Backbone.Events, {
        mapMinX:-7071.067811865476,
        mapMinY:-7071.067811865476,
        mapMaxX:7071.067811865476,
        mapMaxY:7071.067811865476,
        mapMidX : function(){
            return (this.mapMaxX-this.mapMinX)/2+this.mapMinX
        },
        mapMidY : function(){
            return (this.mapMaxY-this.mapMinY)/2+this.mapMinY
        },
        start: function () {
            this.getToken();
            this.connect();
        },
        getToken:function(successCallback){
            var self = this;
            var server = this.model.get('server');
            $.ajax("http://m.agar.io/findServer", {
                dataType: "json",
                method: "POST",
                async: false,
                cache: false,
                crossDomain: true,
                data: server + "\n2200049715",
                error: function () {
                    console.log('getToken Error');
                }, success: function (b) {
                    if(b.alert) {
                        alert(b.alert);
                    }else{
                        console.log('Token ', b.token);
                        self.model.set('socketAddress', "ws://"+b.ip);
                        self.model.set('token', b.token);
                    }
                }
            })
        },
        connect: function () {
            var self = this;
            console.log("Connecting to  : " + this.model.get('socketAddress'));
            this.webSocket = new WebSocket(this.model.get('socketAddress'));
            this.webSocket.binaryType = "arraybuffer";
            this.webSocket.onopen = function () {
                self.onSocketOpen();
            };
            this.webSocket.onclose = function(){
                self.onSocketClose();
            };
            this.webSocket.onerror = function () {
                self.onError();
            };
            this.webSocket.onmessage = function(data){
                var a = new DataView(data.data);
                var c = 0;
                if(240 == a.getUint8(c))
                {
                    c += 5;
                }
                switch (a.getUint8(c++)) {
                    case 16:
                        console.log('death');
                        break;
                }
            }

        },
        closeSocket : function(){
            this.webSocket.close();
        },
        onError:function(){
            console.log('bot error')
        },
        onSocketClose:function(){
            console.log('bot close')
        },
        onSocketOpen: function () {
            console.log('bot Connect');
            var data;

            data = this.createDataView(5);
            data.setUint8(0, 254);
            data.setUint32(1, 5, !0);
            this.sendData(data);

            data = this.createDataView(5);
            data.setUint8(0, 255);
            data.setUint32(1, 2200049715, !0);
            this.sendData(data);
            var token = this.model.get('token');
            console.log(token);
            data = this.createDataView(1 + token.length);
            data.setUint8(0, 80);
            for (var c = 0; c < token.length; ++c)
            {
                data.setUint8(c + 1, token.charCodeAt(c));
            }
            this.sendData(data);
        },
        play:function(){
            if(this.isConnected){
                var name =this.model.get('name');
                var data = this.createDataView(1 + 2 * name.length);
                data.setUint8(0, 0);
                for (var b = 0; b < name.length; ++b) {
                    data.setUint16(1 + 2 * b, name.charCodeAt(b), !0);
                }
                this.sendData(data);
            }
        },
        isConnected : function(){
            return (this.webSocket.readyState == this.webSocket.OPEN);
        },
        createDataView: function(data){
            return new DataView(new ArrayBuffer(data))
        },
        sendData:function(data){
            this.webSocket.send(data.buffer)
        },
        moveTo:function(x, y){
            if(this.isConnected){
                var a = this.createDataView(13);
                a.setUint8(0, 16);
                a.setInt32(1, x, !0);
                a.setInt32(5, y, !0);
                a.setUint32(9, 0, !0);
                this.sendData(a);
            }
        }
    });
})(window, jQuery, Backbone, _);