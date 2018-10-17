import { createStore } from 'redux';
import { combineReducers } from 'redux';

const initialState = {
  todos: [
    {name: 'Task 4', completed: false},
    {name: 'Task 5', completed: false},
  ]
}

const TASK_UPDATED = "TASK_UPDATED";

// actions
export const toggleTask = (index) => {
  return { type: "TASK_TOGGLED", payload: index }
};

export const addTask = (task) => {
  return { type: "TASK_ADDED", payload: task }
}

export const editTask = (task, index) => {
  return { type: TASK_UPDATED, payload: { task, index }}
}

// reducer
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TASK_TOGGLED":
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

    case "TASK_ADDED":
      return {
        ...state,
        todos: [
          ...state.todos,
          { completed: false, name: action.payload }
        ]
      }

    case TASK_UPDATED:
      console.log(state, action)
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

const reducers = combineReducers({
  taskList: todosReducer,
});


export default createStore(reducers)