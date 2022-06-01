export const APPEND_POSITIONS = {
    IN_THE_START: 'start',
    IN_THE_END: 'end'
}


export const CUSTOM_ACTION = {
    TASK_CREATED: 'task-created',
    TASK_DELETED: 'task-deleted',
};

export function createElement(template) {     // функциф сoздающая блоки один за одним.
    // в темплейт передается строка с Html
    const divElement = document.createElement('div');
    divElement.innerHTML = template;

    return divElement.firstChild;
}

export function generateId() {
    return Math.random().toString(36).substr(2,9);
}

export function renderElement(container, element, append_position = APPEND_POSITIONS.IN_THE_START) {
    switch (append_position) {
        case APPEND_POSITIONS.IN_THE_START: {
            container.prepend(element);
            break;
        }
        case APPEND_POSITIONS.IN_THE_END: {
            container.append(element);
            break;
        }
    }
}
