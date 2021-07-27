
// Create Close button and attach to each task
let taskList = document.getElementsByTagName("LI");
let i;
for (i = 0; i < taskList.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7"); // Adds "X" as close button
    span.className = "close";
    span.appendChild(txt);
    taskList[i].appendChild(span);
}

// Clicking close button to hide selected task
let close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

// Adds Check when clicking on Task
let list = document.querySelector('ul');
list.addEventListener('click', function(ev){
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Add new Task when Add button is clicked
function newTask() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("textEntryField").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must enter a task");
    } else {
        document.getElementById("taskList").appendChild(li);
    }
    document.getElementById("textEntryField").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}
