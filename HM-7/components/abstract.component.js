import { createElement} from "../Utils/utils.js";

export class AbstractComponent {
    constructor() {
        if (new.target === AbstractComponent) {
            throw new Error('Мы не можем создать инстас этого класса')
        }
        this._element = null;
    }

    _getTemplate() {
        throw new Error(`у абстрактного компонента нет темплейта!!!!!`)
    }

    getElement() {
        if (!this._element) {
            this._element = createElement(this._getTemplate());
            this._afterCreateElement();
        }
        return this._element;
    }

    _afterCreateElement () {
    }

    _afterRemoveElement () {
    }
}