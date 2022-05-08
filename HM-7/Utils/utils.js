export const APPEND_POSITIONS = {
    IN_THE_START: 'start',
    IN_THE_END: 'end'
}


export function createElement(template) {     // функциф сoздающая блоки один за одним.
    // в темплейт передается строка с Html
    const divElement = document.createElement('div');
    divElement.innerHTML = template;

    return divElement.firstChild;
}

export function renderElement(container, element, append_position = APPEND_POSITIONS.IN_THE_START) {
    switch (append_position) {
        case APPEND_POSITIONS.IN_THE_START: {
            container.append(element);
            break;
        }
        case APPEND_POSITIONS.IN_THE_END: {
            container.prepend(element);
            break;
        }
    }
}