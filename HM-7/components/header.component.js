import {AbstractComponent} from "./abstract.component.js";

export class HeaderComponent extends AbstractComponent{
        constructor(blackNoteTitle) {
        super();

        this._blackNoteTitle = blackNoteTitle;
    }

    _getTemplate() {
        return (`<header class="wraper">
<button class="btn all">all</button>
<button class="btn active">active</button>
<button class="btn finished">finished</button>
<button class="btn delete-finished">delete finished</button>
<p>${this._blackNoteTitle}</p>
<button class="cascad">sorted</button>
<p>create new task</p>
<input type="text">
<button class="add-btn">+</button>
</header>`)
    }

    _afterCreateElement() {
        //const addBtn = this._element.querySelector('.add-btn');
        document.addEventListener('click', (e) =>{
            if (e.target.classList.contains('add-btn')){
                const inputEl = this._element.querySelector('input');

                window.taskService.setNewTask(inputEl.value);
                console.log(taskService._task)
            }

        })


    }
}