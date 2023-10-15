const inputField = document.querySelector('.input-form input');
const addButton = document.querySelector('.input-form button');
const tasksList = document.querySelector('.tasks-list');
const tasksLi = document.querySelectorAll('li');


addButton.addEventListener('click', inputHandler)

function inputHandler(){
    if (inputField.value === ''){
        alert('Введите текст');
    }
    else {
        let li = document.createElement('li');
        li.textContent = inputField.value;
        tasksList.append(li);

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = 'X';
        li.appendChild(deleteButton);

        inputField.value = '';
        inputField.focus();
    }
}

tasksList.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI'){
            e.target.classList.toggle('checked');
        }
        if (e.target.tagName === 'BUTTON'){
            e.target.parentElement.remove();
        }
})

