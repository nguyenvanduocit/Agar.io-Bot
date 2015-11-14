(function (window, $, Backbone, Marionette, _, AgarBot, app) {
    /**
     * We donot
     */
    AgarBot.Views.MiniMapPanel = Marionette.CompositeView.extend({
        events: {},
        initialize: function (options) {
            this.options = _.extend(this, options);
        },
        getTemplate: function () {
            var templateLoader = app.module('TemplateLoader');
            return templateLoader.getTemlate('mapPanel');
        },
        onRender: function () {
            /**
             * We only have 1 mindmap with this id
             */
            this.canvas = $('#minimap-canvas')[0];
        },
        /**
         * This method is called sequence. Keep it simple
         */
        updateMap: function () {
            var self = this;
            var ctx = this.canvas.getContext('2d');
            ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            for (var id in this.mini_map_tokens) {
                var token = this.mini_map_tokens[id];
                var x = token.x * this.canvas.width;
                var y = token.y * this.canvas.height;
                var size = token.size * this.canvas.width;
                ctx.beginPath();
                ctx.arc(
                    x,
                    y,
                    size,
                    0,
                    2 * Math.PI,
                    false
                );
                ctx.closePath();
                ctx.fillStyle = token.color;
                ctx.fill();

                if (self.mapOptions.enableCross && -1 != self.current_cell_ids.indexOf(token.id)) {
                    self.miniMapDrawCross(token.x, token.y, token.color);
                }
                if (self.mapOptions.enableAxes) {
                    self.miniMapDrawMiddleCross();
                }
            }
        },
        miniMapDrawCross:function(x, y, color) {
            var ctx = this.canvas.getContext('2d');
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(0, y * this.canvas.height);
            ctx.lineTo(this.canvas.width, y * this.canvas.height);
            ctx.moveTo(x * this.canvas.width, 0);
            ctx.lineTo(x * this.canvas.width, this.canvas.height);
            ctx.closePath();
            ctx.strokeStyle = color || '#FFFFFF';
            ctx.stroke();
        },
        miniMapDrawMiddleCross:function(){
            var ctx = this.canvas.getContext('2d');
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(0, this.canvas.height/2);
            ctx.lineTo(this.canvas.width, this.canvas.height/2);
            ctx.moveTo(this.canvas.width/2, 0);
            ctx.lineTo(this.canvas.width/2, this.canvas.height);
            ctx.closePath();
            ctx.strokeStyle = '#000000';
            ctx.stroke();
        }
    });

    AgarBot.Modules.MiniMap = Marionette.Module.extend({
        initialize: function (moduleName, app, options) {
            console.log('Module MiniMap initialize');
            this.cells = [];
            this.mini_map_tokens = [];
            this.current_cell_ids = [];
            this.player_name = [];
            this.mapInfo = {
                "start_x": -7000,
                "start_y": -7000,
                "end_x": 7000,
                "end_y": 7000,
                "length_x" : 14000,
                "length_y" : 14000
            };
            this.mapOptions = {
                enableMultiCells: true,
                enablePosition: true,
                enableAxes: true,
                enableCross: true
            };
            this.panelView = new AgarBot.Views.MiniMapPanel({
                el: '#minimap-pannel',
                mapInfo:this.mapInfo,
                mini_map_tokens: this.mini_map_tokens,
                current_cell_ids: this.current_cell_ids,
                mapOptions : this.mapOptions
            });
            this.listenTo(AgarBot.pubsub, 'websocket:onopen', this.onSocketOpen);
            this.listenTo(AgarBot.pubsub, 'websocket:onclose', this.onSocketClose);
            this.listenTo(AgarBot.pubsub, 'websocket:send', this.onSocketSend);
            this.listenTo(AgarBot.pubsub, 'websocket:onmessage', this.onSocketRecive);
        },
        onStart: function (options) {
            console.log('Module MiniMap start');
        },
        onSocketSend: function (data) {
            var view = new DataView(data);
            switch (view.getUint8(0, true)) {
                case 0:
                    for (var i=1; i < data.byteLength; i+=2) {
                        this.player_name.push(view.getUint16(i, true));
                    }
                    break;
            }
        },
        onSocketRecive: function (event) {
            this.extractPacket(event);
        },
        onSocketClose:function(){
            console.log('onSocketClose');
            clearInterval(this.render_timer);
        },
        onSocketOpen: function (data) {
            console.log('onSocketOpen');
            var self = this;
            this.panelView.render();
            if (this.render_timer) {
                clearInterval(this.render_timer);
            }
            this.render_timer = setInterval(function () {
                self.panelView.updateMap();
            }, 1000 / 30);
        },
        miniMapCreateToken:function(id, color){
            return {
                id: id,
                color: color,
                x: 0,
                y: 0,
                size: 0
            };
        },
        miniMapRegisterToken:function(id, token){
            if (this.mini_map_tokens[id] === undefined) {
                // this.mini_map.append(token);
                this.mini_map_tokens[id] = token;
            }
        },
        miniMapUnregisterToken:function(id){
            if (this.mini_map_tokens[id] !== undefined) {
                // this.mini_map_tokens[id].detach();
                delete this.mini_map_tokens[id];
            }
        },
        miniMapIsRegisteredToken:function(id) {
            return this.mini_map_tokens[id] !== undefined;
        },
        miniMapUpdateToken:function(id, x, y, size) {
            if (this.mini_map_tokens[id] !== undefined) {

                this.mini_map_tokens[id].x = x;
                this.mini_map_tokens[id].y = y;
                this.mini_map_tokens[id].size = size;

                return true;
            } else {
                return false;
            }
        },
        miniMapUpdatePos:function(x, y){
            //console.log("my possition : ", x, y);
        },
        miniMapReset:function() {
            this.cells =[];
            this.mini_map_tokens = []
        },
        updateCellPosition:function(cell){
            var cellId = cell.id;
            if (this.mapOptions.enableMultiCells || -1 != this.current_cell_ids.indexOf(cellId)) {
                if (! this.miniMapIsRegisteredToken(cellId))
                {
                    this.miniMapRegisterToken(
                        cellId,
                        this.miniMapCreateToken(cellId, cell.color)
                    );
                }

                var size_n = cell.nSize/this.mapInfo.length_x;
                this.miniMapUpdateToken(cellId, (cell.nx - this.mapInfo.start_x)/this.mapInfo.length_x, (cell.ny - this.mapInfo.start_y)/this.mapInfo.length_y, size_n);
            }

            if (this.mapOptions.enablePosition && -1 != this.current_cell_ids.indexOf(cellId)) {
                //this.mini_map_pos.show();
                this.miniMapUpdatePos(cell.nx, cell.ny);
            } else {
                //this.mini_map_pos.hide();
            }
        },
        destroyCell:function(cell){
            var cellId = cell.id;
            delete this.cells[cellId];
            var currentIdIndex = this.current_cell_ids.indexOf(cellId);
            if(-1 != currentIdIndex){
                this.current_cell_ids.splice(currentIdIndex, 1);
            }
            this.miniMapUnregisterToken(cellId);
        },
        extractCellPacket: function (data, offset) {

            var I = +new Date;
            var b = Math.random(), c = offset;
            var size = data.getUint16(c, true);
            c = c + 2;

            // Nodes to be destroyed (killed)
            for (var e = 0; e < size; ++e) {
                var p = this.cells[data.getUint32(c, true)],
                    f = this.cells[data.getUint32(c + 4, true)],
                    c = c + 8;
                p && f && (
                    this.destroyCell(f),
                        f.ox = f.x,
                        f.oy = f.y,
                        f.oSize = f.size,
                        f.nx = p.x,
                        f.ny = p.y,
                        f.nSize = f.size,
                        f.updateTime = I)
            }

            // Nodes to be updated
            for (e = 0; ; ) {
                var d = data.getUint32(c, true);
                c += 4;
                if (0 == d) {
                    break;
                }
                ++e;
                var p = data.getInt32(c, true),
                    c = c + 4,
                    f = data.getInt32(c, true),
                    c = c + 4;
                var g = data.getInt16(c, true);
                c = c + 2;
                for (var h = data.getUint8(c++), m = data.getUint8(c++), q = data.getUint8(c++), h = (h << 16 | m << 8 | q).toString(16); 6 > h.length; )
                    h = "0" + h;

                var h = "#" + h,
                    k = data.getUint8(c++),
                    m = !!(k & 1),
                    q = !!(k & 16);

                k & 2 && (c += 4);
                k & 4 && (c += 8);
                k & 8 && (c += 16);

                for (var n, k = ""; ; ) {
                    n = data.getUint16(c, true);
                    c += 2;
                    if (0 == n)
                        break;
                    k += String.fromCharCode(n)
                }

                n = k;
                k = null;

                // if d in cells then modify it, otherwise create a new cell
                if(this.cells.hasOwnProperty(d)){
                    k = this.cells[d];
                    this.updateCellPosition(k);
                    k.ox = k.x;
                    k.oy = k.y;
                    k.oSize = k.size;
                    k.color = h
                }
                else{
                    k = new Cell(d, p, f, g, h, n);
                    k.pX = p;
                    k.pY = f;
                    this.cells[d] = k;
                }

                k.isVirus = m;
                k.isAgitated = q;
                k.nx = p;
                k.ny = f;
                k.nSize = g;
                k.updateCode = b;
                k.updateTime = I;
                n && k.setName(n);
            }

            // Destroy queue + nonvisible nodes
            b = data.getUint32(c, true);
            c += 4;
            for (e = 0; e < b; e++) {
                d = data.getUint32(c, true);
                c += 4, k = this.cells[d];
                null != k && this.destroyCell(k);
            }
        },
        extractPacket: function (event) {
            var c = 0;
            var data = new DataView(event.data);
            240 == data.getUint8(c) && (c += 5);
            var opcode = data.getUint8(c);
            c++;
            switch (opcode) {
                case 16: // cells data
                    this.extractCellPacket(data, c);
                    break;
                case 20: // cleanup ids
                    this.current_cell_ids = [];
                    break;
                case 32: // cell id belongs me
                    var id = data.getUint32(c, true);

                    if (this.current_cell_ids.indexOf(id) === -1) {
                        this.current_cell_ids.push(id);
                    }

                    break;
                case 64: // get borders
                    this.mapInfo.start_x = data.getFloat64(c, !0);
                    c += 8;
                    this.mapInfo.start_y = data.getFloat64(c, !0);
                    c += 8;
                    this.mapInfo.end_x = data.getFloat64(c, !0);
                    c += 8;
                    this.mapInfo.end_y = data.getFloat64(c, !0);
                    c += 8;
                    this.mapInfo.center_x = (this.mapInfo.start_x + this.mapInfo.end_x) / 2;
                    this.mapInfo.center_y = (this.mapInfo.start_y + this.mapInfo.end_y) / 2;
                    this.mapInfo.length_x = Math.abs(this.mapInfo.start_x - this.mapInfo.end_x);
                    this.mapInfo.length_y = Math.abs(this.mapInfo.start_y - this.mapInfo.end_y);
                    break;
            }
        }
    });
    app.module("MiniMap", {
        moduleClass: AgarBot.Modules.MiniMap
    });
})(window, jQuery, Backbone, Backbone.Marionette, _, AgarBot, AgarBot.app);