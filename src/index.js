import TaskModule from './tasks.js';

const addTask = document.getElementById('tasks-add');
addTask.addEventListener('click', function(){
    TaskModule.addTodo();
})