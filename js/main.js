function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between align-items-center task-item";

  // checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "form-check-input me-2";
  checkbox.onchange = () => {
    span.classList.toggle("completed");
  };

  // task text
  const span = document.createElement("span");
  span.textContent = taskText;
  span.className = "flex-grow-1";

  // edit button
  const editBtn = document.createElement("button");
  editBtn.innerHTML = "Edit";
  editBtn.className = "btn  me-2 edit-btn";
  editBtn.onclick = () => {
    const newText = prompt("Edit your task:", span.textContent);
    if (newText !== null) {
      span.textContent = newText.trim();
    }
  };

  // delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.className = "btn btn-secondary del-btn";
  deleteBtn.onclick = () => {
    li.remove();
  };

  // assemble
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function toggleComplete(checkbox) {
  const span = checkbox.closest("li").querySelector(".task-text");
  span.classList.toggle("completed");
}
