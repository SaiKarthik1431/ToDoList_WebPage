// Function to add a new todo item
function addTodo() {
    var input = document.getElementById("todoInput");
    var text = input.value;
    if (text === "") {
        alert("Please enter a todo item.");
        return;
    }
    var ul = document.getElementById("todoList");
    var li = document.createElement("li");
    li.textContent = text;

    // Create complete button
    var completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.classList.add("complete-button");
    completeButton.onclick = function() {
        li.classList.toggle("completed");
        completeButton.disabled = true;
        deleteButton.disabled = true;
        completeButton.classList.add("disabled-button");
        deleteButton.classList.add("disabled-button");
    };

    // Create delete button
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.onclick = function() {
        ul.removeChild(li);
    };

    // Append buttons to list item
    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    // Append list item to ul
    ul.appendChild(li);

    // Clear input field
    input.value = "";
}
