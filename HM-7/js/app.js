import {HeaderComponent} from "../components/header.component.js";
import {renderElement} from "../Utils/utils.js";
import {TaskComponent} from "../components/task.component.js";
import {TaskService} from "../Services/task.service.js";

export class App {
    constructor() {
        window.taskService = new TaskService();
    }

    init(){
        console.log(`projectstart`);
        const containerElement = document.querySelector('.container');

        const headerComponent = new HeaderComponent('BLACKNOTE');
        const headerTemplateElement = headerComponent.getElement();
        renderElement(containerElement, headerTemplateElement)


        const taskContainer = document.querySelector('.task-container')
        const taskComponent = new TaskComponent('aa');
        const taskTemplate = taskComponent.getElement();
        renderElement(taskContainer, taskTemplate);

    }
}
