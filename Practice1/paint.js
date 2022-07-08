var paintcanvas = document.getElementById("canvas1");
var context = paintcanvas.getContext("2d");
var color = 'black';
var radius = 50;
var isPainting = false;

function setWidth(value) {
    var paintcanvas = document.getElementById("canvas1");
    if (isNumeric(value)) {
        paintcanvas.width = value;
    }
}

function setHeight(value) {
    var paintcanvas = document.getElementById("canvas1");
    if(isNumeric(value)) {
        paintcanvas.height = value;
    }
}

function clearCanvas() {
    var paintcanvas = document.getElementById("canvas1");
    var context = paintcanvas.getContext("2d");
    context.clearRect(0,0, paintcanvas.width, paintcanvas.height);
}


function isNumeric(value) {
    return !isNaN(value);
}

function startPaint() {
    isPainting = true;
}

function endPaint() {
    isPainting = false;
}

function paintCircle(x,y) {
    if (isPainting == true) {
        var paintcanvas = document.getElementById("canvas1");
        var context = paintcanvas.getContext("2d");
        var color = 'black';
        var radius = 50;
        context.beginPath();
        context.arc(x,y,radius,0,Math.PI*2,true);
        context.fillStyle = color;
        context.fill();
    }
}


function setColor(newColor) {
    color = newColor;
}

function resizeBrush(newSize) {
    document.getElementById("sizeOutput").value = newSize;
    radius = newSize;
}