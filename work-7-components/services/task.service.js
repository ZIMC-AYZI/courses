import { CUSTOM_ACTION, generateId, Status } from "../utils/utils.js";

export class TaskService {
  _tasks = [
    {id: '1', title: 'Выучить JS', status: Status.BACKLOG},
    {id: '2', title: 'Выучить React', status: Status.BACKLOG},
    {id: '3', title: 'Позвонить маме', status: Status.DONE},
    {id: '4', title: 'Выпить смузи', status: Status.PROCESSING},
    {id: '5', title: 'Сходить погулять', status: Status.BASKET},
    {id: '6', title: 'Перестать тупить', status: Status.PROCESSING},
    {id: '7', title: 'Сделать домашку', status: Status.BACKLOG},
    {id: '8', title: 'Прочитать Войну и Мир', status: Status.BASKET},
    {id: '9', title: 'Погладить Кекса', status: Status.DONE},
  ];

  getTasksByStatus(status) {
    return this._tasks.filter(task => task.status === status);
  }

  setNewTask(title) {
    const newTask = {
      title,
      status: Status.BACKLOG,
      id: generateId()
    };

    this._tasks.push(newTask);

    console.log(this._tasks, 'this._tasks');

    this._emitEvent(CUSTOM_ACTION.TASK_CREATED, newTask);
  }

  _emitEvent(type, data) {
    window.dispatchEvent(new CustomEvent(type, data));
  }
}
