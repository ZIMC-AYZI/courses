import { createElement } from "../utils/utils.js";

export class AbstractComponent {
  constructor() {
    if (new.target === AbstractComponent) {
      throw new Error('Мы не можем создать инстанс этого класа');
    }

    this._element = null;
  }

  _getTemplate() {
    throw new Error('Соре у абстрактоного компонента нет темлейта!');
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this._getTemplate());
      this._afterCreateElement();
    }

    return this._element;
  }

  _afterCreateElement() { // hook
    // console.log('Component Created!');
  }

  _afterRemoveElement() {
  }
}
