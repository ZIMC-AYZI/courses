import { HeaderComponent } from "../components/header.component.js";
import { APPEND_POSITIONS, renderElement, Status } from "../utils/utils.js";
import { CreateNewTaskComponent } from "../components/create-new-task.component.js";
import { TaskCardComponent } from "../components/task-card.component.js";
import { TaskService } from "../services/task.service.js";

export class App {
  constructor() {
    window.taskService = new TaskService();
  }

  init() {
    console.log('ProjectStart');
    const containerElement = document.querySelector('.container');

    const headerComponent = new HeaderComponent('Туду даска');
    const headerTemplate = headerComponent.getElement();

    renderElement(containerElement, headerTemplate);

    const mainContainer = document.querySelector('.main');

    const createNewTaskComponent = new CreateNewTaskComponent('Задача для удачи');
    const createNewTaskElement = createNewTaskComponent.getElement();

    renderElement(mainContainer, createNewTaskElement);


    const tasksContainer = document.querySelector('.tasks-container');

    Object.values(Status).forEach(status => {
      const taskCardComponent = new TaskCardComponent(status);
      const taskCardElement = taskCardComponent.getElement();

      renderElement(tasksContainer, taskCardElement, APPEND_POSITIONS.IN_THE_END);
    });
  }
}
