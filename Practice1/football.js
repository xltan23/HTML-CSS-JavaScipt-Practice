function changecolor() {
    var dd1 = document.getElementById("blues");
    var dd2 = document.getElementById("greens");
    var dd3 = document.getElementById("yellows");
    var dd4 = document.getElementById("oranges");

    dd1.className = "greenback";
    dd2.className = "yellowback";
    dd3.className = "orangeback";
    dd4.className = "blueback";
}

function changetext() {
    var dd1 = document.getElementById("blues");
    var dd2 = document.getElementById("greens");
    var dd3 = document.getElementById("yellows");
    var dd4 = document.getElementById("oranges");

    dd1.innerHTML = "The Guardian";
    dd2.innerHTML = "The Protector";
    dd3.innerHTML = "The Maestro";
    dd4.innerHTML = "The Poacher";
}