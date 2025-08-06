const input = document.getElementById('input-box');
const todos = document.getElementById('todos');
const button = document.getElementById('btn');
const toast = document.getElementById('toast-error');
const toastMsg = document.getElementById('toast-msg');
const toastClose = document.getElementById('toast-close');

function showToast() {
    toastMsg.textContent = "Input field is empty, please enter your todo";
    toast.classList.remove('hidden');
};

toastClose.addEventListener('click', () => {
    toast.classList.add('hidden');
});

button.addEventListener('click', () => {
    if(input.value.trim() === '') {
        showToast();
    } else {
        let li = document.createElement('li');
        let todoText = document.createTextNode(input.value);
        li.appendChild(todoText);

        let span = document.createElement('span');
        let removeSymbol = document.createTextNode('\u00d7');
        span.appendChild(removeSymbol);
        li.appendChild(span);

        todos.appendChild(li);
        input.value = '';

        localStorage.setItem('todos', todos.innerHTML);
    }
});

todos.addEventListener('click', (e) => {
    let element = e.target;

    if(element.tagName === 'LI') {
        element.classList.toggle('checked');
    } else if(element.tagName === 'SPAN') {
        element.parentElement.remove();
    }

    localStorage.setItem('todos', todos.innerHTML);
});

todos.innerHTML = localStorage.getItem('todos');