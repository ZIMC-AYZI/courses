import {AbstractComponent} from "./abstract.component.js";

export class TaskCardComponent extends AbstractComponent {
    constructor(task) {
        super();
        this._isTaskDone = task.done;
        this._taskNumber = task.number;
        this._taskTitle = task.title;
        this._taskCraeTheDate = task.theDate;
        this._taskTheDeadline = task.theDeadline;
        //this._taskDelete = task.deleteTask;
        this._taskEditble = task.active;
        this._taskArray = window.taskService._task
        this._taskId = task.id;
    }

    _getTemplate() {
        return (`<div >
<input type="checkbox" class="${this._isTaskDone}">
<p>${this._taskNumber}</p>
<p>${this._taskTitle}</p>
<p>${this._taskCraeTheDate}</p>
<p>${this._taskTheDeadline}</p>
<button class="btn-delete">delete</button>
<button class="btn" >edit</button>
</div>`)
    }

    _afterCreateElement() {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-delete')){
                //window.taskID = this._taskId;
                console.log(this._taskId)
                //window.taskId = this._taskId;
                window.taskService._deleteElement()
                //console.log(this._taskArray[this._taskNumber].title)
            }

        })
    }
}