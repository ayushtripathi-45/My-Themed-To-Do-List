const inputbox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
    if(inputbox.value == ''){
        alert("You must have to write you task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputbox.value = "";
    saveData();
} 
listContainer.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

const themeBtn = document.getElementById("themeBtn");
const myThemeBtn = document.getElementById("myThemeBtn");

const defaultBtn = document.getElementById("defaultBtn");
const lightBtn = document.getElementById("lightBtn");
const darkBtn = document.getElementById("darkBtn");

document.body.className = "default";
defaultBtn.addEventListener("click", () => {
    document.body.className = "default";
});
lightBtn.addEventListener("click", () => {
    document.body.className = "light";
});
darkBtn.addEventListener("click", () => {
    document.body.className = "dark";
});