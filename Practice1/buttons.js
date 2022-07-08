function dochange() {
    alert('Clicked button with javascript function');
}

function changecolor() {
    var dd1 = document.getElementById("id1");
    var dd2 = document.getElementById("id2");

    dd1.className = "blueback";
    dd2.className = "yellowback";
}

function changetext() {
    var dd1 = document.getElementById("id1");
    var dd2 = document.getElementById("id2");

    dd1.innerHTML = "This is";
    dd2.innerHTML = "Changed";
}