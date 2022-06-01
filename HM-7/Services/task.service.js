import {generateId} from "../Utils/utils.js";
import {CUSTOM_ACTION} from "../Utils/utils.js";

export class TaskService {
    _task = [
        {id: '1', title: 'Віучить ангуляр', number: 1 , theDate : '27.05.2022', theDeadline: '28.05.2022' },
        {id: '2', title: 'Improve my knowledge ', number: 2 , theDate : '27.05.2022', theDeadline: '28.05.2022'}
    ];

    _deleteElement(task){
        this._task = this._task.filter(el => el.id !== task.id)
        this._emitEvent(CUSTOM_ACTION.TASK_DELETED)
        console.log('delete')

    }
    setNewTask(title) {

        const newTask = {
                number: this._crateNumber(),
                title,
                theDate: this._date(),
                theDeadline: '',
                id: generateId()
        };

        this._task.push(newTask);

        this._emitEvent(CUSTOM_ACTION.TASK_CREATED, newTask);
    }

    _emitEvent(type, data){
        window.dispatchEvent(new CustomEvent(type, data))
    }
    _date(){
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;
        return today;
    }

    _crateNumber(){
        const addNumber = 1;
        let numberForNext = this._task[this._task.length - 1].number;
        if (!numberForNext){
            numberForNext = 1;
        }
        return numberForNext + addNumber;
    }

}
