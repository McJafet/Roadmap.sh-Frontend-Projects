const text = document.querySelector('.task-input');
const buttonEnter = document.querySelector('.enter');
const task = document.querySelector('.task-title');
const taskList = document.querySelector('.task-list');
const check = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 icon">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>`;
const deleteTask = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 icon delete-icon">
                    <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
                </svg>`;

const checked = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 icon">
                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                </svg>`;

const tasks = [];



const addTask = () => {
    const taskDescription = text.value;
    if (taskDescription === '') {
        alert('No puedes agregar una tarea vacía');
        return;
    }
    const newTask = {
        description: taskDescription,
        status: false
    };
    tasks.push(newTask);
    text.value = '';
    renderTasks();
}

const renderTasks = () => {
    taskList.innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
        const task = document.createElement('li');
        task.classList.add('task-item');
        if (tasks[i].status) {
            task.innerHTML = `
                <button class="check-task">${checked}</button>
                <span class="task-description" style="text-decoration: line-through">${tasks[i].description}</span>
                <button class="delete-task">${deleteTask}</button>
            `;
            taskList.appendChild(task);
            continue;
        }
        task.innerHTML = `
            <button class="check-task">${check}</button>
            <span class="task-description">${tasks[i].description}</span>
            <button class="delete-task">${deleteTask}</button>
        `;
        taskList.appendChild(task);
    }
    tasks.map((task, index) => {
        const taskItems = document.querySelectorAll('.task-item');
        const checkButton = taskItems[index].querySelector('.check-task');
        const taskDescription = taskItems[index].querySelector('.task-description');
        const deleteButton = taskItems[index].querySelector('.delete-task');
        checkButton.addEventListener('click', () => {
            if (!task.status) {
                task.status = true;
                checkButton.innerHTML = checked;
                taskDescription.style.textDecoration = 'line-through';
                tasks.splice(index, 1);
                tasks.push(task);
                renderTasks();
            }
            else {
                task.status = false;
                checkButton.innerHTML = check;
                taskDescription.style.textDecoration = 'none';
                tasks.splice(index, 1);
                tasks.unshift(task);
                renderTasks();
            }
        });
        deleteButton.addEventListener('click', () => {
            tasks.splice(index, 1);
            renderTasks();
            console.log(tasks);
        });
    });
}


// onload = () => {
//     renderTasks();
// }

text.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

buttonEnter.addEventListener('click', addTask);


