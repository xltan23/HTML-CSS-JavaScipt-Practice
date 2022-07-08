function changeBlue() {
    var dd1 = document.getElementById("div1");
    var dd2 = document.getElementById("div2");

    dd1.className = "blueback";
    dd2.className = "blueback";
}

function changeGreen() {
    var dd1 = document.getElementById("div1");
    var dd2 = document.getElementById("div2");

    dd1.className = "greenback";
    dd2.className = "greenback";
}

function doRed() {
    var dd1 = document.getElementById("div1");
    dd1.style.backgroundColor = "white";
    var ctx = dd1.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(10,10,40,60);

    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("Hello world", 15, 45);
}

function doBlue() {
    var dd1 = document.getElementById("div1");
    dd1.style.backgroundColor = "white";
    var ctx = dd1.getContext("2d");
}

function docolor() {
    var dd3 = document.getElementById("div3");
    var colorinput = document.getElementById("clr");
    var color = colorinput.value;
    dd3.style.backgroundColor = color;
}

function dosquare() {
    var dd3 = document.getElementById("div3");
    var sizeinput = document.getElementById("sldr");
    var size = sizeinput.value;
    var ctx = dd3.getContext("2d");
    ctx.fillStyle = "yellow";
    ctx.fillRect(10,10,size,size);
}