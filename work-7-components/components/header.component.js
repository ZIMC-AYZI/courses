import { AbstractComponent } from "./abstract.component.js";

export class HeaderComponent extends AbstractComponent {
  constructor(headerTitle) {
    super();

    this._headerTitle = headerTitle;
  }

  _getTemplate() {
    return (`<header class="header"><h1 class="header__title">${ this._headerTitle }</h1></header>`)
  }
}
