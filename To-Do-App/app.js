document.querySelector("form").addEventListener("submit", handleSubmitForm);
// Event Handlers
function handleSubmitForm(e) {
  e.preventDefault();
  let input = document.querySelector("input");
  if (input.value != "") addTodo(input.value);
  input.value = "";
} // Helpers
function addTodo(todo) {
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  li.innerHTML = `
        <span class="todo-item">${todo}</span>
        <button name="checkButton"><i class="fas fa-check-square"></i></button>
        <button name="deleteButton" ><i class="fas fa-trash"></i></button>
    `;
  li.classList.add("todo-list-item");
  ul.appendChild(li);
}
document
  .querySelector("ul")
  .addEventListener("click", handleClickDeleteOrCheck);
function handleClickDeleteOrCheck(e) {
  if (e.target.name == "checkButton") checkTodo(e);

  if (e.target.name == "deleteButton") deleteTodo(e);
}
function checkTodo(e) {
  let item = e.target.parentNode;
  if (item.style.textDecoration == "line-through")
    item.style.textDecoration = "none";
  else item.style.textDecoration = "line-through";
}

function deleteTodo(e) {
  let item = e.target.parentNode;

  item.addEventListener("transitionend", function () {
    item.remove();
  });

  item.classList.add("todo-list-item-fall");
}
document.getElementById("clearAll").addEventListener("click", handleClearAll);
function handleClearAll(e) {
  document.querySelector("ul").innerHTML = "";
}