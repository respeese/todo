import TaskModule from './tasks.js';
import { openForm, closeForm } from './form.js';
import { makeDefaultDiv, makeNewProject } from './projects.js'

const doneBtn = document.getElementById('done-btn');
const addTaskBtn = document.getElementById('tasks-add');
const formExit = document.getElementById('form-exit');


makeDefaultDiv();
makeNewProject();

addTaskBtn.addEventListener('click', function () {
    openForm();
})

formExit.addEventListener('click', function () {
    closeForm();
})

doneBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let taskMade = TaskModule.makeTask();
    if (taskMade == 1) {
        closeForm();
    }
})