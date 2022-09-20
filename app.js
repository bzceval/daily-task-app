//Selectors
const itemInputEl = document.querySelector('#todo-item-input')
const descriptionInputEl = document.querySelector("#todo-description-input")
const addTaskUl = document.querySelector(".add-task-ul")

//Button Selectors
const addTaskBtnEl = document.querySelector(".add-task-btn")


addTaskBtnEl.addEventListener("click", () => {
    if(itemInputEl.value.trim() === "") {
        console.log("item input yok")
    } else if (descriptionInputEl.value.trim() === "") {
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
        descriptionInputEl.value = ""
    }
})

const taskDiv = document.createElement("div") 

function createItemElement(newTask) {
    const {id, task, completed} = newTask; //destructing

    taskDiv.setAttribute("id", id)
    
    // newTask.completed ? li.classList.add("complated") : ""
    completed && li.classList.add("complated")

    const correctIcon = document.createElement("i")
    correctIcon.setAttribute("class","fa-circle-check")
    taskDiv.appendChild(correctIcon)

    const editIcon = document.createElement("i")
    editIcon.setAttribute("class", "fa-pen-to-square")
    taskDiv.appendChild(editIcon)

    const taskItemText = document.createElement("p")
    const taskItemTextNode = document.createTextNode(task)
    taskItemText.appendChild(taskItemTextNode)
    taskDiv.appendChild(taskItemText)

    const deleteIcon = document.createElement("i")
    deleteIcon.setAttribute("class", "fa-trash")
    taskDiv.appendChild(deleteIcon)

    console.log(taskDiv)

    addTaskUl.appendChild(taskDiv)
}

function createDescriptionElement(newTask) {
    const {description, id} = newTask

    const descriptionLi = document.createElement("li")
    descriptionLi.setAttribute("id", id)
    descriptionLi.style.borderBottom = "solid"

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

    taskDiv.appendChild(descriptionLi)
}

addTaskUl.addEventListener("click", (e)=> {
    console.log(e.target)

    if(e.target.classList.contains("fa-trash")) {
        e.target.parentElement.remove()
    }
})