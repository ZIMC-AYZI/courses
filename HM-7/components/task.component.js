import {AbstractComponent} from "./abstract.component.js";
import {TaskCardComponent} from "./task-card.component.js";
import {renderElement} from "../Utils/utils.js";

export class TaskComponent extends AbstractComponent{
    constructor(task) {
        super();
        this._taskTitle = task.title;
        // //this._isTaskDoneble = task.done;
        // this._taskNumber = task.number;
        // this._taskTitle = task.title;
        // this._taskCraeTheDate = task.theDate;
        // this._taskTheDeadline = task.theDeadline;
        // //this._taskDelete = task.deleteTask;
        // //this._taskEditble = task.active;
    }

    _getTemplate() {
        return (`<div > 
 <div class="card-wraper">
 
</div>
</div>`)
    }
// <input type="checkbox">
//         <p>${this._taskNumber}</p>
//         <p>${this._taskTitle}</p>
//         <p>${this._taskCraeTheDate}</p>
//         <p>${this._taskTheDeadline}</p>
//         <button class="btn">delete</button>
//         <button class="btn">edit</button>
    _afterCreateElement() {
        const cardWraper = this._element.querySelector('.card-wraper')

        const mokKard = {
            number: 1,
            title: 'to do some',
            theDate: '12,12,12',
            theDeadline: '12,12,13',
        };

        const cardComponent = new TaskCardComponent(mokKard);
        const cardTemplate = cardComponent.getElement();

        renderElement(cardWraper, cardTemplate);
    }
}
