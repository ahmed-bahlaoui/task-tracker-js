// Get DOM elements
const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// Function to add new task
function addTask() {
  // Get the input value
  const taskText = taskInput.value.trim();

  // Check if input is not empty
  if (taskText !== "") {
    // Create task item container
    const taskItem = document.createElement("div");
    taskItem.className = "task-item";

    // Create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
      taskSpan.classList.toggle("completed");
    });

    // Create task text
    const taskSpan = document.createElement("span");
    taskSpan.className = "task-text";
    taskSpan.textContent = taskText;

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
      taskItem.remove();
    });

    // Append elements to task item
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskSpan);
    taskItem.appendChild(deleteBtn);

    // Append task item to the task list
    taskList.appendChild(taskItem);

    // Clear input field
    taskInput.value = "";
  }
}

// Add event listener to button
addTaskButton.addEventListener("click", addTask);

// Add event listener for Enter key
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
