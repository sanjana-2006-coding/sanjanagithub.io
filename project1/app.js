document.getElementById('addTask').addEventListener('click', () => {
    const task = document.getElementById('taskInput').value;
    if (task) {
        const li = document.createElement('li');
        li.textContent = task;
        li.addEventListener('click', () => li.classList.toggle('completed'));
        li.addEventListener('dblclick', () => li.remove());
        document.getElementById('taskList').appendChild(li);
        document.getElementById('taskInput').value = '';
    }
});
