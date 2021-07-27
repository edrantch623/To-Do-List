
// Create Close button and attach to each task
let taskList = document.getElementsByTagName("LI");
let i;
for (i = 0; i < taskList.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("/u00D7");
    span.className = "close";
    span.appendChild(txt);
    taskList[i].appendChild(span);
}

