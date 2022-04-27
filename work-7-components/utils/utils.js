export const APPEND_POSITIONS = {
  IN_THE_START: 'start',
  IN_THE_END: 'end'
};

export const Status = {
  BACKLOG: 'backlog',
  PROCESSING: 'processing',
  DONE: 'done',
  BASKET: 'basket',
};

export const CUSTOM_ACTION = {
  TASK_CREATED: 'task-created',
};

export function createElement(template) {
  const divElement = document.createElement('div');
  divElement.innerHTML = template;

  return divElement.firstChild;
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

export function generateId() {
  return Math.random().toString(36).substr(2, 9);
}
