const inp = document.getElementsByClassName('text').value
const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos", true);

    xhr.onload = function () {
        if (xhr.status === 200) {
        const todos = JSON.parse(xhr.responseText);
        const todoList = document.getElementById("todo-list");

        todos.map(function (todo) {
            const li = document.createElement("li");
            li.textContent = `#${todo.id} - ${todo.title} (${todo.completed ? "Completed" : "Not Completed"})`;
            todoList.appendChild(li);
        });
        } else {
            console.log("მონაცემების მიღებისას მოხდა შეცდომა", xhr.status);
        }  
};

    xhr.onerror = function () {
      console.log("მოთხოვნა ვერ შესრულდა.");
    };

xhr.send();