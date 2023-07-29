const Inbox = document.getElementById("inbox");
const listcont = document.getElementById("list-cont");
function addtask() {
    if (Inbox.value === '') {
        alert("You must be written something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = Inbox.value;
        listcont.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    Inbox.value = "";
    savedata()
}
listcont.addEventListener("click", function (a) {
    if (a.target.tagName === "LI") {
        a.target.classList.toggle("checked");
        savedata()
    }
    else if (a.target.tagName === "SPAN") {
        a.target.parentElement.remove();
        savedata()
    }
}, false)
function savedata() {
    localStorage.setItem("data", listcont.innerHTML);
}
function show(){
    listcont.innerHTML=localStorage.getItem("data")
} 
show(); 