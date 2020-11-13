// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


// Event Listeners
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)

// Functions

function addTodo(event) {
    // Prevent form from submiting
    event.preventDefault();
    // Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"> </i>'
    completedButton.classList.add('completed-btn');
    todoDiv.appendChild(completedButton);
    // Deleted button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"> </i>'
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    // Append to List
    todoList.appendChild(todoDiv);
    // Clear Todo input value
    todoInput.value = ''; 
}

function deleteCheck(e) {
    const item = e.target;
    // Delete
    if(item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.classList.add('fall');
        setTimeout(() => {
            todo.remove();
        }, 500);
    }

    // Check mark 
    if(item.classList[0] === 'completed-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}