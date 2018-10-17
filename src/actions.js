// actions
import * as types from "./types";

export const toggleTask = (index) => {
  return { type: types.TASK_TOGGLED, payload: index }
};

export const addTask = (task) => {
  return { type: types.TASK_ADDED, payload: task }
}

export const editTask = (task, index) => {
  return { type: types.TASK_UPDATED, payload: { task, index }}
}