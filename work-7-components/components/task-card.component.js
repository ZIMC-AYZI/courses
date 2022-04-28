import { AbstractComponent } from "./abstract.component.js";
import { TaskComponent } from "./task.component.js";
import { CUSTOM_ACTION, renderElement } from "../utils/utils.js";

export class TaskCardComponent extends AbstractComponent {
  constructor(taskCardTitle) {
    super();

    this._taskCardTitle = taskCardTitle;
    this._tasksArray = window.taskService.getTasksByStatus(taskCardTitle);
  }

  _getTemplate() {
    return (`<div class="card">
<div class="card-status">
<p class="card-status__text">${ this._taskCardTitle }</p>
</div>

<div class="task-wrapper">

</div>
</div>`);
  }

  _afterCreateElement() {
    window.addEventListener(CUSTOM_ACTION.TASK_CREATED, this._onTasksChanged.bind(this));

    this._renderContent();
  }

  _onTasksChanged() {
    console.log('TRIGGERED');

    this._tasksArray = window.taskService.getTasksByStatus(this._taskCardTitle);
    this._renderContent();
  }

  _renderContent() {
    const taskWrapperContainer = this._element.querySelector('.task-wrapper');

    taskWrapperContainer.innerHTML = '';

    this._tasksArray.forEach(task => {
      const taskComponent = new TaskComponent(task);
      const taskElement = taskComponent.getElement();

      renderElement(taskWrapperContainer, taskElement);
    });
  }
}
