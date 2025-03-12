/* VARIABLES */

let todoCount = 0;
let todoEmoji = document.getElementById('todo-emoji');
let todoInput = document.getElementById('todo-input');
let todoAddBtn = document.getElementById('todo-add-btn');
let todoContainer = document.getElementById('todo-container');
let todoRemoveAll = document.getElementById('todo-remove-all');

/* EVENTS */

todoAddBtn.addEventListener('click', () => {
	addTodo();
});

todoRemoveAll.addEventListener('click', () => {
	removeAllTodos();
});

/* FUNCTIONS */

function removeTodo(todoNum) {
	document.getElementById(`todo-${todoNum}`).remove()
}

function removeAllTodos()
{
	todoCount = 0;
	todoContainer.innerHTML = '';
}

function addTodo()
{
	if (todoInput.value)
	{
		todoCount++;
		todoContainer.innerHTML += `<div class="mb-3 d-flex align-items-center justify-content-between" id="todo-${todoCount}">
										<div class="form-check">
  											<input class="form-check-input" type="checkbox">
  											<label class="form-check-label">${todoEmoji.value} ${todoInput.value}</label>
										</div>
										<button class="py-3 shadow btn btn-outline-success" onclick="removeTodo(${todoCount})">delete</button>
						    		</div>`;
	}
}