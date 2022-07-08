function addTask() {
    var input = document.getElementById("input");
    var newTask = input.value;
    if (newTask != "") {
        var item = document.createElement("li");
        item.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)" value="&#x2713;" /> ' + 
        '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' + 
        '<input type="button" class="important" onclick="important(this.parentNode)" value="!" />' +
        newTask;
        document.getElementById("tasks").appendChild(item);
        input.value = "";
        input.placeholder = "enter next task ...";
    }
}

function markDone(item) {
    item.className = 'finished';
}

function remove(item) {
    if (item.className == 'finished') {
        item.remove();
    } else {
        ;
    }
}

function important(item) {
    item.className = "important";
}

function doAbout() {
    var dd1 = document.getElementById("divabout");
    dd1.innerHTML = "Author is Ralph Terry";
    dd1.className = "aboutcolor";
    
}

function clearAbout() {
    var dd1 = document.getElementById("divabout");
    if (dd1.innerHTML != null) {
        dd1.innerHTML = "";
        dd1.className = "";
    }
}

