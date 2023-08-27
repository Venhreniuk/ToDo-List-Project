const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-countainer")

function addTask(){
    if(inputBox.value === ""){
        alert('Write something!');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(list){
    if(list.target.tagName === "LI"){
        list.target.classList.toggle("checked");
        saveData();
    }
    else if(list.target.tagName === "SPAN"){
        list.target.parentElement.remove();
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