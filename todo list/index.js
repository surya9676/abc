let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer")
let inputField = document.getElementById("inputField")

addToDoButton.addEventListener('click', () => {
    var para = document.createElement('h2');
    para.classList.add('para.styling');
    para.innerText = inputField.value;
    toDoContainer.appendChild(para);
    inputField.value = "";
    para.addEventListener("click", () =>{
        para.style.textDecoration = "line-through";
    })
    para.addEventListener("dblclick", () =>{
        toDoContainer.removeChild(para);
    })
})