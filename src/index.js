document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let todoList = document.querySelector("form");
  todoList.addEventListener("submit", function (e) {
    e.preventDefault();
    addTask(e.target.new_task_description.value);
    todoList.reset();
  });
});

function addTask(todoTasks) {
  let li = document.createElement("li");
  let btn = document.createElement("button");
  btn.addEventListener("click", dltTask);
  btn.textContent = "X";
  li.textContent = `${todoTasks} `;
  li.appendChild(btn);
  document.querySelector("#tasks").appendChild(li);
}

function dltTask(e) {
  e.target.parentNode.remove();
}
