var fgimage = null;
var bgimage = null;
var greenThreshold = 240;

function loadForegroundImage() {
    var imgcanvas = document.getElementById("can1");
    fgimage = document.getElementById("fginput");
    image = new SimpleImage(fgimage);
    image.drawTo(imgcanvas);
}

function loadBackgroundImage() {
    var imgcanvas = document.getElementById("can2");
    bgimage = document.getElementById("bginput");
    image = new SimpleImage(bgimage);
    image.drawTo(imgcanvas);
}

function doGreenScreen() {
    
    if (fgimage == null || !fgimage.complete()) {
        alert("Foreground not loaded");
        return;
    }
    if (bgimage == null || !bgimage.complete()) {
        alert("Background not loaded");
    }
    clearCanvas();
    
    var output = new SimpleImage(fgimage.getWidth(),fgimage.getHeight());
    for (var pixel of fgimage.values()) {
        var x = pixel.getX();
        var y = pixel.getY();
        if (pixel.getGreen() > greenThreshold){
            var bgPixel = bgimage.getPixel(x,y);
            output.setPixel(x,y,bgPixel);
        } else {
            output.setPixel(x,y,pixel);
        }
    }
    var imgcanvas = document.getElementById("can1");
    output.drawTo(imgcanvas);
}

function clearCanvas() {
    var imgcanvas1 = document.getElementById("can1");
    var imgcanvas2 = document.getElementById("can2")
    var context1 = imgcanvas1.getContext("2d");
    context1.clearRect(0,0, imgcanvas1.width, imgcanvas1.height);
    var context2 = imgcanvas2.getContext("2d");
    context2.clearRect(0,0, imgcanvas2.width, imgcanvas2.height);
}