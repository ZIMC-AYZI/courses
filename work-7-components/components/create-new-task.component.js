import { AbstractComponent } from "./abstract.component.js";

export class CreateNewTaskComponent extends AbstractComponent {
  constructor(createNewTitle) {
    super();

    this._createNewTitle = createNewTitle;
  }

  _getTemplate() {
    return (`<div class="creation">
<h3 class="creation__title">${ this._createNewTitle }</h3>
<div class="creation-controls">
<input type="text" />
<button class="btn">
<span class="btn__icon">+</span>
<p class="btn__text">Добавить новую</p>
</button>
</div>
</div>`);
  }

  _afterCreateElement() {
    console.log(this._element, 'this._element');
    const btnElement = this._element.querySelector('.btn');

    btnElement.addEventListener('click', () => {
      const inputEl = this._element.querySelector('input');

      window.taskService.setNewTask(inputEl.value);
    });
  }
}
