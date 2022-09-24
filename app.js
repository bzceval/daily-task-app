//Selectors
const itemInputEl = document.querySelector('#todo-item-input')
const descriptionInputEl = document.querySelector("#todo-description-input")
const addTaskUl = document.querySelector(".add-task-ul")

//Date Selectors
const dayEl = document.querySelector(".day")
const monthEl = document.querySelector(".month")
const yearEl = document.querySelector(".year")

//Time Selectors
const clockEl = document.querySelector(".clock")
const minutesEl = document.querySelector(".minutes")
const ampmEl = document.querySelector(".am-pm")


//Button Selectors
const addTaskBtnEl = document.querySelector(".add-task-btn")


addTaskBtnEl.addEventListener("click", () => {
    if(itemInputEl.value.trim() === "") {
        alert("item input yok")
    } else if (descriptionInputEl.value.trim() === "") {
        alert("description input yok")
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

    // const taskDiv = document.querySelector("div")
    // taskDiv.setAttribute("class", "task-div")

    // const descriptionDiv = document.querySelector("div")
    // descriptionDiv.setAttribute("class", "description-div")

    taskLi.appendChild(leftDiv)
    taskLi.appendChild(rightDiv)
    // leftDiv.appendChild(taskDiv)
    // leftDiv.appendChild(descriptionDiv)

    const editIconTask = document.createElement("i")
    editIconTask.setAttribute("class", "bi bi-pencil-square edit-icon-task")
    leftDiv.appendChild(editIconTask)


    const taskItemText = document.createElement("p")
    const taskItemTextNode = document.createTextNode(task)
    taskItemText.appendChild(taskItemTextNode)
    leftDiv.appendChild(taskItemText)

    const editIconDescription = document.createElement("i")
    editIconDescription.setAttribute("class", "bi bi-pencil-square edit-icon-description")
    leftDiv.appendChild(editIconDescription)

    const descriptionItemText = document.createElement("p")
    const descriptionItemTextNode = document.createTextNode(description)
    descriptionItemText.appendChild(descriptionItemTextNode)
    leftDiv.appendChild(descriptionItemText)

    const deleteIcon = document.createElement("i")
    deleteIcon.setAttribute("class", "bi bi-trash3")
    rightDiv.appendChild(deleteIcon)

    addTaskUl.appendChild(taskLi)

}


addTaskUl.addEventListener("click", (e)=> {
    console.log(e.target)

    if(e.target.className == "bi-trash3" ) {
        e.target.parentElement.parentElement.remove()
    }

    
})

//keyboard enter click event
addTaskUl.addEventListener("keydown", (e) => {
    if(e.code === "Enter") {
        addTaskBtnEl.click()
    }
})

window.onload = function() {
    itemInputEl.focus()
}

//Date and Time
const monthStringEl = new Date() 
const parseMonthString = { month: 'long'};
monthEl.textContent = new Intl.DateTimeFormat('en-US', parseMonthString).format(monthStringEl);

dayEl.textContent = ` ${new Date().getDay()}`
console.log(dayEl)
yearEl.textContent = new Date().getFullYear()

clockEl.textContent = new Date().getHours() > 9 ? clockEl.textContent = new Date().getHours() : `0${clockEl.textContent = new Date().getHours()}`

const minutesCounterEl = new Date().getMinutes();
if(minutesCounterEl > 00 || minutesCounterEl > 12) {
    minutesEl.innerHTML = ` : ${minutesCounterEl} AM`
} else {
    minutesEl.innerHTML = ` : ${minutesCounterEl} PM`
}
