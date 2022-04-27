import { AbstractComponent } from "./abstract.component.js";

export class TaskComponent extends AbstractComponent {
  constructor(task) {
    super();

    this._taskTtitle = task.title;
    this._taskStatus = task.status;
    this._isTaskEditable = task.active;
  }

  _getTemplate() {
    return (`<div class="task ${this._taskStatus}">
<p class="task__title">${this._taskTtitle}</p>
</div>`)
  }
}
