import {HeaderComponent} from "../components/header.component.js";
import {renderElement} from "../Utils/utils.js";

export class App {
    constructor() {
    }

    init(){
        console.log(`projectstart`);
        const containerElement = document.querySelector('.container');

        const headerComponent = new HeaderComponent('BLACKNOTE');
        const headerTemplateElement = headerComponent.getElement();
        renderElement(containerElement, headerTemplateElement)

    }
}
