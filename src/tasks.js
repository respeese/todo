import { format } from 'date-fns'


class Task {
    constructor(title, desc, dueDate, priority){
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

const TaskModule = (function() {
    return {
        makeTask: function() {
            let desc="";
            let dueDate = "";
            let priority ="";

            let title = document.getElementById('form-title').value;
            if (document.getElementById('form-desc').value != null){
                desc = document.getElementById('form-desc').value;
            } 
            if(document.getElementById('form-dueDate').value != null){
                dueDate = document.getElementById('form-dueDate').value;
            }
            if (document.getElementById('form-low').checked) {
                priority = document.getElementById('form-low').value;
            }
            if (document.getElementById('form-high').checked) {
                priority = document.getElementById('form-high').value;
            }
            
            let newTask = new Task(title, desc, dueDate, priority);
            this.addTaskDiv(newTask);
        },
        addTaskDiv: function(task) {
            console.log(task);
        }
    };
}) ();

export default TaskModule;