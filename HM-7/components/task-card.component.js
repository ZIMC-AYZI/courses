import {AbstractComponent} from "./abstract.component.js";

export class TaskCardComponent extends AbstractComponent {
    constructor(task) {
        super();
        //this._isTaskDoneble = task.done;
        this._taskNumber = task.number;
        this._taskTitle = task.title;
        this._taskCraeTheDate = task.theDate;
        this._taskTheDeadline = task.theDeadline;
        //this._taskDelete = task.deleteTask;
        //this._taskEditble = task.active;
    }

    _getTemplate() {
        return (`<div>
<input type="checkbox">
<p>${this._taskNumber}</p>
<p>${this._taskTitle}</p>
<p>${this._taskCraeTheDate}</p>
<p>${this._taskTheDeadline}</p>
<button class="btn">delete</button>
<button class="btn">edit</button>
</div>`)
    }
}