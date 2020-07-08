import TaskModule from './tasks.js';
import {openForm, closeForm} from './form.js';

const doneBtn = document.getElementById('done-btn');
const addTaskBtn = document.getElementById('tasks-add');



addTaskBtn.addEventListener('click', function(){
    openForm();
})

doneBtn.addEventListener('click', function(e){
    e.preventDefault();
    TaskModule.makeTask();
    closeForm();
})