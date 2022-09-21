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
        //Dom ve local için ayrı ayrı push eklenecek
        itemInputEl.value = ""
        descriptionInputEl.value = ""
    }
})



function createItemElement(newTask) {
    const {id, task, completed, description} = newTask; //destructing

    const taskLi = document.createElement("li") 
    taskLi.setAttribute("id", id) 
    taskLi.setAttribute("class", "taskItem")

    const leftDiv = document.createElement("div")
    leftDiv.setAttribute("class", "left-div")

    const rightDiv = document.createElement("div")
    rightDiv.setAttribute("class", "right-div")
    
    taskLi.appendChild(leftDiv)
    taskLi.appendChild(rightDiv)

    const editIconTask = document.createElement("i")
    editIconTask.setAttribute("class", "bi-pencil-square", "bi", "edit-icon-task")
    leftDiv.appendChild(editIconTask)


    const taskItemText = document.createElement("p")
    const taskItemTextNode = document.createTextNode(task)
    taskItemText.appendChild(taskItemTextNode)
    leftDiv.appendChild(taskItemText)

    const editIconDescription = document.createElement("i")
    editIconDescription.setAttribute("class", "bi-pencil-square", "bi", "edit-icon-description")
    leftDiv.appendChild(editIconDescription)

    const descriptionItemText = document.createElement("p")
    const descriptionItemTextNode = document.createTextNode(description)
    descriptionItemText.appendChild(descriptionItemTextNode)
    leftDiv.appendChild(descriptionItemText)

    const deleteIcon = document.createElement("i")
    deleteIcon.setAttribute("class", "bi-trash3", "bi")
    rightDiv.appendChild(deleteIcon)

    addTaskUl.appendChild(taskLi)

}


addTaskUl.addEventListener("click", (e)=> {
    console.log(e.target)

    if(e.target.className == "bi-trash3" ) {
        e.target.parentElement.parentElement.remove()
    }
})


addTaskUl.addEventListener("keydown", (e) => {
    if(e.code === "Enter") {
        addTaskBtnEl.click()
    }
})

window.onload = function() {
    itemInputEl.focus()
}