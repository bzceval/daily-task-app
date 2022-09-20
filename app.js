//Selectors
const itemInputEl = document.querySelector('#todo-item-input')
const descriptionInputEl = document.querySelector("#todo-description-input")
const addTaskSectionEl = document.querySelector(".add-task-section")

//Create selectors of Dom
const newUlDom = document.createElement("div")
addTaskSectionEl.append(newUlDom)
newUlDom.setAttribute("id", "input-item-value")
const newPDom = document.createElement("p")
newUlDom.append(newPDom)
// const newiDom = document.createElement("i")
// newiDom.setAttribute("class", "fa-regular", "fa-pen-to-square")

//Button Selectors
const addTaskBtnEl = document.querySelector(".add-task-btn")


addTaskBtnEl.addEventListener("click", () => {
    if(!itemInputEl.value ) {
        console.log("item yok")
    }
    else if (!descriptionInputEl.value) {
        console.log("desc yok")
    }
    else {
       newPDom.innerHTML += `<i class="fa-regular fa-pen-to-square"></i> ${itemInputEl.value} <i class="fa-solid fa-trash"></i>`
       newPDom.innerHTML += `<i class="fa-regular fa-pen-to-square"></i> ${descriptionInputEl.value} <i class="fa-solid fa-trash"></i>`
       newPDom.innerHTML += `<hr>`
    }
})
