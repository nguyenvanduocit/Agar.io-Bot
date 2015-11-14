function Cell(id, x, y, size, color, name) {
    this.id = id;
    this.ox = this.x = x;
    this.oy = this.y = y;
    this.oSize = this.size = size;
    this.color = color;
    this.points = [];
    this.pointsAcc = [];
    this.setName(name);
}
Cell.prototype = {
    id: 0,
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
    wasSimpleDrawing: true,
    setName: function(name) {
        this.name = name;
    }
};