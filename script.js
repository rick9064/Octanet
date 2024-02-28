document.addEventListener("DOMContentLoaded", function () {
    loadTasks();
});

function loadTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; 
    const tasks = [
        { text: "Define project scope", completed: false },
        { text: "Create wireframes", completed: true },
        { text: "Set up development environment", completed: false }
    ];

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = `
            <input type="checkbox" class="checkbox" ${task.completed ? 'checked' : ''}>
            <span>${task.text}</span>
            <button onclick="removeTask(this)">Remove</button>
        `;
        taskList.appendChild(li);
    });
}

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            <input type="checkbox" class="checkbox">
            <span>${taskInput.value}</span>
            <button onclick="removeTask(this)">Remove</button>
        `;
        taskList.appendChild(li);
        taskInput.value = ""; 
    }
}

function removeTask(button) {
    const taskList = document.getElementById("taskList");
    const li = button.parentNode;
    taskList.removeChild(li);

}
