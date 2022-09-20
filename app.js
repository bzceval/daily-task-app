//Selectors
const itemInputEl = document.querySelector('#todo-item-input')
const descriptionInputEl = document.querySelector("#todo-description-input")
const addTaskUl = document.querySelector(".add-task-ul")

//Button Selectors
const addTaskBtnEl = document.querySelector(".add-task-btn")


addTaskBtnEl.addEventListener("click", () => {
    if(!itemInputEl.value) {
        console.log("item input yok")
    } else if (!descriptionInputEl.value) {
        console.log("description input yok")
    } else {
        const newTask = {
            id: new Date().getTime(),
            task: itemInputEl.value,
            description: descriptionInputEl.value,
            completed: false,
        }
        createItemElement(newTask)
        createDescriptionElement(newTask)
        //Dom ve local için ayrı ayrı push eklenecek
        itemInputEl.value = ""
        descriptionInputEl = ""
    }
})
function createItemElement(newTask) {
    const {id, task, completed} = newTask;
    
    const taskLi = document.createElement("li")
    taskLi.setAttribute("id", "taskItem")
    //newTodo control eklenecek

    const correctIcon = document.createElement("i")
    correctIcon.setAttribute("class","fa-circle-check")
    taskLi.appendChild(correctIcon)

    const editIcon = document.createElement("i")
    editIcon.setAttribute("class", "fa-pen-to-square")
    taskLi.appendChild(editIcon)

    const taskItemText = document.createElement("p")
    const taskItemTextNode = document.createTextNode(task)
    taskItemText.appendChild(taskItemTextNode)
    taskLi.appendChild(taskItemText)

    const deleteIcon = document.createElement("i")
    deleteIcon.setAttribute("class", "fa-trash")
    taskLi.appendChild(deleteIcon)

    console.log(taskLi)

    addTaskUl.appendChild(taskLi)
}

function createDescriptionElement(newTask) {
    const {description} = newTask

    const descriptionLi = document.createElement("li")
    descriptionLi.setAttribute("id", "descriptionItem")
    

    const editIcon = document.createElement("i")
    editIcon.setAttribute("class","fa-circle-check")
    descriptionLi.appendChild(editIcon)

    const descriptionItemText = document.createElement("p")
    const descriptionItemTextNode = document.createTextNode(description)
    descriptionItemText.appendChild(descriptionItemTextNode)
    descriptionLi.appendChild(descriptionItemText)

    const deleteIcon = document.createElement("i")
    deleteIcon.setAttribute("class", "fa-trash")
    descriptionLi.appendChild(deleteIcon)

    console.log(descriptionLi)

    addTaskUl.appendChild(descriptionLi)
}