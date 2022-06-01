import {AbstractComponent} from "./abstract.component.js";
import {TaskCardComponent} from "./task-card.component.js";
import {renderElement} from "../Utils/utils.js";
import {CUSTOM_ACTION} from "../Utils/utils.js";

export class TaskComponent extends AbstractComponent{
    constructor() {
        super();
        this._taskArray = window.taskService._task;

    }

    _getTemplate() {
        return (`<div > 
 <div class="card-wraper">
 
</div>
</div>`)
    }

    _afterCreateElement() {
    window.addEventListener(CUSTOM_ACTION.TASK_CREATED, this._onTaskChanged.bind(this));
    window.addEventListener(CUSTOM_ACTION.TASK_DELETED, this._onTaskChanged.bind(this))
    this._renderContent();
    }

    _onTaskChanged(){

        this._taskArray = window.taskService._task;
        this._renderContent();
    }

    _renderContent(){
        const cardWraper = this._element.querySelector('.card-wraper');

        cardWraper.innerHTML = '';

        this._taskArray.forEach(task => {
            const cardComponent = new TaskCardComponent(task);
            const cardTemplate = cardComponent.getElement();
            renderElement(cardWraper, cardTemplate);
        })
    }

}
