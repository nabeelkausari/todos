import { createStore, combineReducers } from 'redux';

import { todosReducer } from "./reducer";

const reducers = combineReducers({
  taskList: todosReducer,
});

export default createStore(reducers)