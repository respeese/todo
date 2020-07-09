class Task {
    constructor(title, desc, dueDate, priority) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

const TaskModule = (function () {
    const makeTask = function() {
        let desc = "";
        let dueDate = "";
        let priority = "";
        let title = "";

        if (document.getElementById('form-title').value != null) {
            title = document.getElementById('form-title').value;
        }
        if (document.getElementById('form-desc').value != null) {
            desc = document.getElementById('form-desc').value;
        }
        if (document.getElementById('form-dueDate').value != null) {
            dueDate = document.getElementById('form-dueDate').value;
        }
        if (document.getElementById('form-low').checked) {
            priority = document.getElementById('form-low').value;
        }
        if (document.getElementById('form-high').checked) {
            priority = document.getElementById('form-high').value;
        }

        let newTask = new Task(title, desc, dueDate, priority);


        if (document.getElementById('form-title').value == "") {
            alert('Please enter a title.');
            return 0;
        } else {
            addTaskDiv(newTask);
            return 1;
        }
        
    };

    const addTaskDiv = function(task) {
        let grid = document.getElementById('tasks-grid');
        let addBtn = document.getElementById('tasks-add');
        let taskDiv = document.createElement('div');
        let taskImg = document.createElement('img');
        let taskDate = document.createElement('span');
        let taskTitle = document.createElement('span');
        let taskCheck = document.createElement('input');

        taskDiv.classList.add('tasks');
        taskCheck.type = "checkbox";
        taskCheck.class = "task-check";
        taskCheck.classList.add("task-check"); 
        taskTitle.classList.add('task-title');
        taskDate.classList.add('task-date');
        taskImg.src = "https://img.icons8.com/material/24/000000/multiply--v1.png";
        if (task.priority == "high"){
            taskDiv.classList.add('form-high');
        } else if (task.priority == "low") {
            taskDiv.classList.add('form-low');
        }
        
        taskDiv.appendChild(taskCheck);
        taskDiv.appendChild(taskTitle);
        taskDiv.appendChild(taskDate);
        taskDiv.appendChild(taskImg);
       
        taskTitle.innerHTML = task.title;
        taskDate.innerHTML = task.dueDate;

        grid.insertBefore(taskDiv, addBtn);
    };

    return {
        makeTask,
    }
})();

export default TaskModule;