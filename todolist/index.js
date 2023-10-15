const inputField = document.querySelector('.input-form input');
const addButton = document.querySelector('.input-form button');
const tasksList = document.querySelector('.tasks-list');
const inputForm = document.querySelector('.input-form');

inputForm.addEventListener('keyup', (e) => {
    if (e.keyCode === 13){
        e.preventDefault();
        AddTask();
    }
})

addButton.addEventListener('click', AddTask);

tasksList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    if (e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
        saveData();
    }
})

function AddTask(){
    if (inputField.value === ''){
        alert('Введите текст');
    }
    else {
        let li = document.createElement('li');
        li.textContent = inputField.value;
        tasksList.append(li);

        let deleteButton = document.createElement("button");
        deleteButton.textContent = 'X';
        li.appendChild(deleteButton);

        inputField.value = '';
        inputField.focus();
        saveData();
    }
}

function saveData() {
    localStorage.setItem("data", tasksList.innerHTML);
}

function showTask(){
    tasksList.innerHTML = localStorage.getItem("data");
}

showTask()