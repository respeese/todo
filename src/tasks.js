class Task {
    constructor(title, desc, dueDate, priority) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

const TaskModule = (function () {
    const makeTask = function () {
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

    const addTaskDiv = function (task) {
        let grid = document.getElementById('tasks-grid');
        let addBtn = document.getElementById('tasks-add');
        let taskDiv = document.createElement('div');
        let taskImg = document.createElement('img');
        let taskDate = document.createElement('span');
        let taskTitle = document.createElement('span');
        let taskCheck = document.createElement('input');
        let taskDesc = document.createElement('p');
        let projName = document.querySelector('.active-project').childNodes[1].textContent;

        taskDiv.classList.add('tasks');
        taskDiv.classList.add(projName);
        taskCheck.type = "checkbox";
        taskCheck.class = "task-check";
        taskCheck.classList.add("task-check");
        taskTitle.classList.add('task-title');
        taskDate.classList.add('task-date');
        taskImg.classList.add('del-task');
        taskImg.src = "https://img.icons8.com/material/24/000000/multiply--v1.png";
        if (task.priority == "high") {
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
        taskDesc.innerHTML = task.desc;

        grid.insertBefore(taskDiv, addBtn);


        addDeleteTask(taskImg);
        addCompleteTask(taskCheck);
        addShowDescription(taskTitle, taskDesc);
    };

    const addCompleteTask = function (check) {
        let tasksGrid = document.getElementById('tasks-grid');
        let compGrid = document.getElementById('completed-grid');
        let addBtn = document.getElementById('tasks-add');

        check.addEventListener('click', function () {
            let taskDiv = check.parentNode;
            if (check.checked == true) {
                tasksGrid.removeChild(taskDiv);
                compGrid.appendChild(taskDiv);
            } else {
                compGrid.removeChild(taskDiv);
                tasksGrid.insertBefore(taskDiv, addBtn);
            }

        })

    }

    const addDeleteTask = function (img) {
        img.addEventListener('click', function () {
            let taskDiv = img.parentNode;
            let grid = taskDiv.parentNode;

            grid.removeChild(taskDiv);
        })
    }

    const addShowDescription = function (title, desc) {

        title.addEventListener('click', function () {
            let modal = document.querySelector('#modal');
            let modalClose = modal.childNodes[1].childNodes[1];
            let descPara = modal.childNodes[1].childNodes[5];

            modal.style.display = "block";
            descPara.textContent = desc.innerHTML;

            modalClose.onclick = function () {
                modal.style.display = 'none';
            }
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        })
    }

    return {
        makeTask,
    }
})();

export default TaskModule;