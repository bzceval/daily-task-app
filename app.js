//Selectors
const itemInputEl = document.querySelector("#todo-item-input");
const descriptionInputEl = document.querySelector("#todo-description-input");
const addTaskUl = document.querySelector(".add-task-ul");

//Date Selectors
const dayEl = document.querySelector(".day");
const monthEl = document.querySelector(".month");
const yearEl = document.querySelector(".year");

//Time Selectors
const clockEl = document.querySelector(".clock");
const minutesEl = document.querySelector(".minutes");
const ampmEl = document.querySelector(".am-pm");

//Button Selectors
const addTaskBtnEl = document.querySelector(".add-task-btn");

// LocalStorage Setting
let todos = JSON.parse(localStorage.getItem("TODOS")) || [];
console.log(todos);

//
const renderSavedTodos = () => {
  todos.forEach((todo) => {
    createItemElement(todo);
  });
};
renderSavedTodos();

addTaskBtnEl.addEventListener("click", () => {
  if (itemInputEl.value.trim() === "") {
    alert("item input yok");
  } else if (descriptionInputEl.value.trim() === "") {
    alert("description input yok");
  } else {
    const newTask = {
      id: new Date().getTime(),
      task: itemInputEl.value,
      description: descriptionInputEl.value,
      completed: false,
    };

    createItemElement(newTask);
    // Push the parameter you get from the function
    todos.push(newTask);

    // Make set of todos in localStorage
    localStorage.setItem("TODOS", JSON.stringify(todos));
    console.log(todos);

    // empty the inputs
    itemInputEl.value = "";
    descriptionInputEl.value = "";
  }
});

// create element capturing
function createItemElement(newTask) {
  const { id, task, completed, description } = newTask; //destructing

  const taskLi = document.createElement("li");
  taskLi.setAttribute("id", id);
  taskLi.setAttribute("class", "taskItem");

  const leftDiv = document.createElement("div");
  leftDiv.setAttribute("class", "left-div");

  const rightDiv = document.createElement("div");
  rightDiv.setAttribute("class", "right-div");

  const taskLiDiv = document.createElement("div");
  taskLiDiv.setAttribute("class", "task-li-div");

  const descriptionLiDiv = document.createElement("div");
  descriptionLiDiv.setAttribute("class", "description-li-div");

  taskLi.appendChild(leftDiv);
  taskLi.appendChild(rightDiv);

  leftDiv.appendChild(taskLiDiv);
  leftDiv.appendChild(descriptionLiDiv);

  // newTodo.completed ? li.classList.add("completed") : "";
  completed && li.classList.add("checked");

  //task div edit icon
  const editIconTask = document.createElement("i");
  editIconTask.setAttribute("class", "bi bi-pencil-square");
  taskLiDiv.appendChild(editIconTask);

  //okay icon
  const okIconTask = document.createElement("i");
  okIconTask.setAttribute("class", "bi bi-check2-square");
  taskLiDiv.appendChild(okIconTask);

  //task div p
  const taskItemText = document.createElement("p");

  taskItemText.setAttribute("class", "task");

  const taskItemTextNode = document.createTextNode(task);
  taskItemText.appendChild(taskItemTextNode);
  taskLiDiv.appendChild(taskItemText);

  // description div edit icon
  const editIconDescription = document.createElement("i");
  editIconDescription.setAttribute(
    "class",
    "bi bi-pencil-square edit-icon-description"
  );
  descriptionLiDiv.appendChild(editIconDescription);

  //okay icon
  const okdesIconTask = document.createElement("i");
  okdesIconTask.setAttribute("class", "bi bi-check2-square");
  descriptionLiDiv.appendChild(okdesIconTask);

  // description div p
  const descriptionItemText = document.createElement("p");

  descriptionItemText.setAttribute("class", "description");

  const descriptionItemTextNode = document.createTextNode(description);
  descriptionItemText.appendChild(descriptionItemTextNode);
  descriptionLiDiv.appendChild(descriptionItemText);

  //trash icon
  const deleteIcon = document.createElement("i");
  deleteIcon.setAttribute("class", "bi bi-trash3");
  rightDiv.appendChild(deleteIcon);

  addTaskUl.appendChild(taskLi);
}

//event capturing
addTaskUl.addEventListener("click", (e) => {
  console.log(e.target);

  const id = e.target.parentElement.parentElement.getAttribute("id");

  // Above the delete event button?
  if (e.target.classList.contains("bi-trash3")) {
    e.target.parentElement.parentElement.remove();
    //delete from local
    todos = todos.filter((todo) => todo.id !== Number(id));

    localStorage.setItem("TODOS", JSON.stringify(todos));
  } else if (e.target.classList.contains("bi-check2-square")) {
    e.target.parentElement.classList.toggle("checked");

    todos.map((todo, index) => {
      if (todo.id == id) {
        todos[index].completed = !todos[index].completed;
      }
    });
    console.log(todos);
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }
});

//keyboard enter click event
addTaskUl.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    addTaskBtnEl.click();
  }
});

window.onload = function () {
  itemInputEl.focus();
};

// Date and Time
const monthStringEl = new Date();
const parseMonthString = { month: "long" };
monthEl.textContent = new Intl.DateTimeFormat("en-US", parseMonthString).format(
  monthStringEl
);

dayEl.textContent = ` ${new Date().getDay()}`;
// console.log(dayEl);
yearEl.textContent = new Date().getFullYear();

clockEl.textContent =
  new Date().getHours() > 9
    ? (clockEl.textContent = new Date().getHours())
    : `0${(clockEl.textContent = new Date().getHours())}`;

const minutesCounterEl = new Date().getMinutes();
if (minutesCounterEl > 00 || minutesCounterEl > 12) {
  minutesEl.innerHTML = ` : ${minutesCounterEl} AM`;
} else {
  minutesEl.innerHTML = ` : ${minutesCounterEl} PM`;
}
