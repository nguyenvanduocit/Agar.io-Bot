(function (window, $, Backbone, Marionette, _, AgarBot, app) {

    AgarBot.Views.MiniMapPanel = Marionette.CompositeView.extend({
        events: {},
        initialize: function (options) {
            this.mapInfo = {
                    "start_x": -7000,
                    "start_y": -7000,
                    "end_x": 7000,
                    "end_y": 7000,
                    "length_x" : 14000,
                    "length_y" : 14000
                }
            ;
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
            this.ctx = this.canvas.getContext('2d');
        },
        updateMap: function () {
            var self = this;
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.cells.each(function (model, index) {
                var id = model.get('id');
                console.log(model.get('x'));
                var x = ((model.get('nx')- self.mapInfo.start_x)/self.mapInfo.length_x) * self.canvas.width;
                var y = ((model.get('ny')- self.mapInfo.start_y)/self.mapInfo.length_y) * self.canvas.height;
                var size = (model.get('nSize')/self.mapInfo.length_x) * self.canvas.width;
                self.ctx.beginPath();
                self.ctx.arc(
                    x,
                    y,
                    size,
                    0,
                    2 * Math.PI,
                    false
                );
                self.ctx.closePath();
                self.ctx.fillStyle = model.get('color');
                self.ctx.fill();
                if (self.myCellIds[id] !== undefined) {
                    self.ctx.font = size * 2 + 'px Arial';
                    self.ctx.textAlign = 'center';
                    self.ctx.textBaseline = 'middle';
                    self.ctx.fillStyle = 'white';
                    self.ctx.fillText(self.myCellIds[id] + 1, x, y);
                }
            });
        }
    });

    AgarBot.Modules.MiniMap = Marionette.Module.extend({
        initialize: function (moduleName, app, options) {
            console.log('Module MiniMap initialize');
            this.currentPlayer = new Backbone.Model();
            this.cells = new Backbone.Collection();
            this.myCellIds = [];
            this.panelView = new AgarBot.Views.MiniMapPanel({
                el: '#minimap-pannel',
                cells: this.cells,
                myCellIds: this.myCellIds
            });
            this.listenTo(AgarBot.pubsub, 'websocket:onopen', this.onSocketOpen);
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
                    var player_name = [];
                    for (var i = 1; i < data.byteLength; i += 2) {
                        player_name.push(view.getUint16(i, true));
                    }
                    this.currentPlayer.set('name', player_name);
                    break;
            }
        },
        onSocketRecive: function (event) {
            this.extractPacket(event);
        },
        onSocketOpen: function (data) {
            var self = this;
            this.panelView.render();
            if (this.render_timer) {
                clearInterval(this.render_timer);
            }
            this.render_timer = setInterval(function () {
                self.panelView.updateMap();
            }, 1000 / 30);
        },
        extractCellPacket: function (data, offset) {
            var currentDate = +new Date;
            var b = Math.random();
            var currentOffset = offset;
            var size = data.getUint16(currentOffset, true);
            currentOffset += 2;
            // Nodes to be destroyed (killed)
            for (var e = 0; e < size; ++e) {
                var p = this.cells.get(data.getUint32(currentOffset, true));
                var f = this.cells.get(data.getUint32(currentOffset + 4, true));
                currentOffset += 8;
                if (p && f) {
                    this.cells.remove(f);
                    console.log('destroy cell ', f.get('name'));
                }
            }
            // Nodes to be updated
            for (e = 0; ;) {
                var id = data.getUint32(currentOffset, true);
                currentOffset += 4;
                if (0 == id) {
                    break;
                }
                ++e;
                var x = data.getInt32(currentOffset, true);
                currentOffset += 4;
                var y = data.getInt32(currentOffset, true);
                currentOffset += 4;
                var nodeSize = data.getInt16(currentOffset, true);
                currentOffset += 2;
                for (var h = data.getUint8(currentOffset++), m = data.getUint8(currentOffset++), q = data.getUint8(currentOffset++), h = (h << 16 | m << 8 | q).toString(16); 6 > h.length;) {
                    h = "0" + h;
                }
                var color = "#" + h;
                var k = data.getUint8(currentOffset++);
                var m = !!(k & 1);
                var q = !!(k & 16);

                k & 2 && (currentOffset += 4);
                k & 4 && (currentOffset += 8);
                k & 8 && (currentOffset += 16);

                for (var n, k = ""; ;) {
                    n = data.getUint16(currentOffset, true);
                    currentOffset += 2;
                    if (0 == n)
                        break;
                    k += String.fromCharCode(n)
                }

                var name = k;
                if (!name) {
                    /**
                     * This is food or shit
                     */
                    return;
                }
                var cell = null;

                // if d in cells then modify it, otherwise create a new cell
                console.log('find', id);
                if (cell = this.cells.get(id)) {
                    cell.set('ox', cell.get('x'));
                    cell.set('oy', cell.get('y'));
                    cell.set('oSize', cell.get('size'));
                    cell.set('color', h);
                    console.log('update cell', name);
                }
                else {
                    cell = new AgarBot.Models.Cell({
                        id: id,
                        x: x,
                        y: y,
                        size: nodeSize,
                        color: color,
                        name: name
                    });
                    console.log('create cell : ', name);
                    this.cells.add(cell);
                }

                cell.set('isVirus', m);
                cell.set('isAgitated', q);
                cell.set('nx', p);
                cell.set('ny', f);
                cell.set('nSize', nodeSize);
                cell.set('updateCode', b);
                cell.set('updateTime', currentDate);
                cell.set('name', name);
            }
        },
        extractPacket: function (event) {
            var c = 0;
            var data = new DataView(event.data);
            if (240 == data.getUint8(c)) {
                c += 5;
            }
            var opcode = data.getUint8(c);
            c++;
            switch (opcode) {
                case 16: // cells data
                    this.extractCellPacket(data, c);
                    break;
                case 20: // cleanup ids
                    console.log('cleanup ids');
                    //current_cell_ids = [];
                    break;
                case 32: // cell id belongs me
                    var id = data.getUint32(c, true);
                    console.log('cell id belongs me : ', id);
                    if (typeof this.myCellIds[id] != 'undefined') {
                        this.myCellIds.push(id);
                    }
                    break;
                case 64: // get borders
                    console.log('get borders');
                /* start_x = data.getFloat64(c, !0);
                 c += 8;
                 start_y = data.getFloat64(c, !0);
                 c += 8;
                 end_x = data.getFloat64(c, !0);
                 c += 8;
                 end_y = data.getFloat64(c, !0);
                 c += 8;
                 center_x = (start_x + end_x) / 2;
                 center_y = (start_y + end_y) / 2;
                 length_x = Math.abs(start_x - end_x);
                 length_y = Math.abs(start_y - end_y);*/
            }
        }
    });
    app.module("MiniMap", {
        moduleClass: AgarBot.Modules.MiniMap
    });
})(window, jQuery, Backbone, Backbone.Marionette, _, AgarBot, AgarBot.app);