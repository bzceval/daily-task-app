//Selectors
const itemInputEl = document.querySelector('#todo-item-input')
const descriptionInputEl = document.querySelector("#todo-description-input")
const addTaskSectionEl = document.querySelector(".add-task-section")

//Create selectors of Dom
const newUlDom = document.createElement("div")
addTaskSectionEl.append(newUlDom)
newUlDom.setAttribute("id", "input-item-value")



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
       newUlDom.innerHTML += `<p><i class="fa-regular fa-pen-to-square"></i> ${itemInputEl.value} <i class="fa-solid fa-trash"></i></p>`
       newUlDom.innerHTML += `<p><i class="fa-regular fa-pen-to-square"></i> ${descriptionInputEl.value} <i class="fa-solid fa-trash"></i> </p>`
       newUlDom.innerHTML += `<hr>`
    }
})
