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



function createItemElement(newTask) {
    const {id, task, completed} = newTask; //destructing

    const taskLi = document.createElement("li") 
    taskLi.setAttribute("id", id) 
    
    // newTask.completed ? li.classList.add("complated") : ""
    // completed && li.classList.add("complated")

    // const correctIcon = document.createElement("i")
    // correctIcon.setAttribute("class","fa-circle-check")
    // taskLi.appendChild(correctIcon)

    const editIcon = document.createElement("i")
    editIcon.setAttribute("class", "bi-pencil", "bi")
    taskLi.appendChild(editIcon)

    const taskItemText = document.createElement("p")
    const taskItemTextNode = document.createTextNode(task)
    taskItemText.appendChild(taskItemTextNode)
    taskLi.appendChild(taskItemText)

    const deleteIcon = document.createElement("i")
    deleteIcon.setAttribute("class", "bi-trash3", "bi")
    taskLi.appendChild(deleteIcon)

    console.log(taskLi)

    addTaskUl.appendChild(taskLi)
}

function createDescriptionElement(newTask) {
    const {description, id} = newTask

    const descriptionLi = document.createElement("li")
    descriptionLi.setAttribute("id", id)
    descriptionLi.style.borderBottom = "solid"

    const editIcon = document.createElement("i")
    editIcon.setAttribute("class", "bi-pencil", "bi")
    descriptionLi.appendChild(editIcon)

    const descriptionItemText = document.createElement("p")
    const descriptionItemTextNode = document.createTextNode(description)
    descriptionItemText.appendChild(descriptionItemTextNode)
    descriptionLi.appendChild(descriptionItemText)

    console.log(descriptionLi)

    addTaskUl.appendChild(descriptionLi)
}

addTaskUl.addEventListener("click", (e)=> {
    console.log(e.target)

    if(e.target.classList.contains("bi-trash3")) {
        e.target.parentElement.remove()
    }
})