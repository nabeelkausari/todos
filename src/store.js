import { createStore } from 'redux';
import { combineReducers } from 'redux';

const initialState = {
  todos: [
    {name: 'Task 4', completed: false},
    {name: 'Task 5', completed: false},
  ]
}

// action
export const toggleTask = (index) => {
  return { type: "TASK_TOGGLED", payload: index }
};

// reducer
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TASK_TOGGLED":
      console.log(state)
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
      }

    default:
      console.log(state)
      return state;
  }
}

const reducers = combineReducers({
  todos: todosReducer
});


export default createStore(reducers, initialState)