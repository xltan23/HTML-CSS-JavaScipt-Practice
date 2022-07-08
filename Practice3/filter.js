var image;

function loadImage() {
    var imgcanvas = document.getElementById("can1");
    image = document.getElementById("finput");
    image = new SimpleImage(image);
    image.drawTo(imgcanvas);
}

function makeGray() {
    for (var pixel of image.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
    var imgcanvas = document.getElementById("can1")
    image.drawTo(imgcanvas);
}

function makeRed() {
    for (var pixel of image.values()) {
        pixel.setRed(255);
    }
    var imgcanvas = document.getElementById("can1");
    image.drawTo(imgcanvas);
}

function makeRainbow() {
    for (var pixel of image.values()) {
        if (pixel.getY() < image.height/7) {
            pixel.setRed(255);
        }
        if (pixel.getY() >= image.height/7 && pixel.getY() < 2*image.height/7) {
            pixel.setRed(255);
            pixel.setGreen(165);
        }
        if (pixel.getY() >= 2*image.height/7 && pixel.getY() < 3*image.height/7) {
            pixel.setRed(255);
            pixel.setGreen(255);
        }
        if (pixel.getY() >= 3*image.height/7 && pixel.getY() < 4*image.height/7) {
            pixel.setGreen(255);
        }
        if (pixel.getY() >= 4*image.height/7 && pixel.getY() < 5*image.height/7) {
            pixel.setGreen(255);
            pixel.setBlue(255);
        }
        if (pixel.getY() >= 5*image.height/7 && pixel.getY() < 6*image.height/7) {
            pixel.setBlue(255);
        }
        if (pixel.getY() >= 6*image.height/7 && pixel.getY() <= image.height) {
            pixel.setRed(255);
            pixel.setBlue(255);
        }
    }
    var imgcanvas = document.getElementById("can1");
    image.drawTo(imgcanvas);
}

function makeRedHue() {
    for (var pixel of image.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
        if (avg < 128) {
            pixel.setRed(2*avg);
            pixel.setGreen(0);
            pixel.setBlue(0);
        } else {
            pixel.setRed(255);
            pixel.setGreen(2*avg-255);
            pixel.setBlue(2*avg-255);
        }
    }
    var imgcanvas = document.getElementById("can1");
    image.drawTo(imgcanvas);
}

function makeRainbowHue() {
    for (var pixel of image.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
        if (pixel.getY() < image.height/7) { 
            // Red Hue
            if (avg < 128) {
                pixel.setRed(2*avg);
                pixel.setGreen(0);
                pixel.setBlue(0);
            } else {
                pixel.setRed(255);
                pixel.setGreen(2*avg-255);
                pixel.setBlue(2*avg-255);
            }
        }
        if (pixel.getY() >= image.height/7 && pixel.getY() < 2*image.height/7) {
            // Orange Hue
            if (avg < 128) {
                pixel.setRed(2*avg);
                pixel.setGreen(0.8*avg);
                pixel.setBlue(0);
            } else {
                pixel.setRed(255);
                pixel.setGreen(1.2*avg-51);
                pixel.setBlue(2*avg-255);
            }
        }
        if (pixel.getY() >= 2*image.height/7 && pixel.getY() < 3*image.height/7) {
            // Yellow Hue
            if (avg < 128) {
                pixel.setRed(2*avg);
                pixel.setGreen(2*avg);
                pixel.setBlue(0);
            } else {
                pixel.setRed(255);
                pixel.setGreen(255);
                pixel.setBlue(2*avg-255);
            }
        }
        if (pixel.getY() >= 3*image.height/7 && pixel.getY() < 4*image.height/7) {
            // Green Hue
            if (avg < 128) {
                pixel.setRed(0);
                pixel.setGreen(2*avg);
                pixel.setBlue(0);
            } else {
                pixel.setRed(2*avg-255);
                pixel.setGreen(255);
                pixel.setBlue(2*avg-255);
            }
        }
        if (pixel.getY() >= 4*image.height/7 && pixel.getY() < 5*image.height/7) {
            // Blue Hue
            if (avg < 128) {
                pixel.setRed(0);
                pixel.setGreen(0);
                pixel.setBlue(2*avg);
            } else {
                pixel.setRed(2*avg-255);
                pixel.setGreen(2*avg-255);
                pixel.setBlue(255);
            }
        }
        if (pixel.getY() >= 5*image.height/7 && pixel.getY() < 6*image.height/7) {
            // Indigo Hue
            if (avg < 128) {
                pixel.setRed(0.8*avg);
                pixel.setGreen(0);
                pixel.setBlue(2*avg);
            } else {
                pixel.setRed(1.2*avg-51);
                pixel.setGreen(2*avg-255);
                pixel.setBlue(255);
            }
        }
        if (pixel.getY() >= 6*image.height/7 && pixel.getY() <= image.height) {
            // Violet Hue
            if (avg < 128) {
                pixel.setRed(1.6*avg);
                pixel.setGreen(0);
                pixel.setBlue(1.6*avg);
            } else {
                pixel.setRed(0.4*avg+153);
                pixel.setGreen(2*avg-255);
                pixel.setBlue(0.4*avg-153);
            }
        }
    }
    var imgcanvas = document.getElementById("can1");
    image.drawTo(imgcanvas);
}

function reset() {
    var imgcanvas = document.getElementById("can1");
    image = document.getElementById("finput");
    image = new SimpleImage(image);
    image.drawTo(imgcanvas);
}
