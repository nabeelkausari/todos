import * as types from './types';

const initialState = {
  todos: [
    {name: 'Task 4', completed: false},
    {name: 'Task 5', completed: false},
  ]
}

// reducer
export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TASK_TOGGLED:
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, action.payload),
          {
            ...state.todos[action.payload],
            completed: !state.todos[action.payload].completed
          },
          ...state.todos.slice(action.payload + 1)
        ]
      };

    case types.TASK_ADDED:
      return {
        ...state,
        todos: [
          ...state.todos,
          { completed: false, name: action.payload }
        ]
      }

    case types.TASK_UPDATED:
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, action.payload.index),
          {
            ...state.todos[action.payload.index],
            name: action.payload.task
          },
          ...state.todos.slice(action.payload.index + 1)
        ]
      }

    default:
      return state;
  }
}