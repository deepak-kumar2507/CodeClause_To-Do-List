document.addEventListener("DOMContentLoaded", function() {
    var todoInput = document.getElementById("todo-input");
    var addBtn = document.getElementById("add-btn");
    var todoList = document.getElementById("todo-list");
    
    addBtn.addEventListener("click", function() {
      var todoText = todoInput.value;
      if (todoText !== "") {
        var li = document.createElement("li");
        li.innerHTML = todoText + '<button class="delete-btn">Delete</button>';
        todoList.appendChild(li);
        todoInput.value = "";
      }
    });
    
    todoList.addEventListener("click", function(event) {
      if (event.target.classList.contains("delete-btn")) {
        var li = event.target.parentNode;
        todoList.removeChild(li);
      }
    });
  });
  