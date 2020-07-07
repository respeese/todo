import TaskModule from './tasks.js';

const doneBtn = document.getElementById('done-btn');
doneBtn.addEventListener('click', function(e){
    e.preventDefault();
    TaskModule.makeTask();
})