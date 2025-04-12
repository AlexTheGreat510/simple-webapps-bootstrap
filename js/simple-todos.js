/* VARIABLES */

let todoCount = 0;
const todoEmoji = document.getElementById('todo-emoji');
const todoInput = document.getElementById('todo-input');
const todoAddBtn = document.getElementById('todo-add-btn');
const todoContainer = document.getElementById('todo-container');
const todoRemoveAll = document.getElementById('todo-remove-all');

/* EVENTS */

todoInput.addEventListener('keypress', (e) => {
	if (e.key === 'Enter') addTodo();
});

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