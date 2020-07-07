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
        addTodo: function() {
            console.log("todo added!");
        }
    };
}) ();

export default TaskModule;