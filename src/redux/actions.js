import { nanoid } from "nanoid"
import { statusFilters } from "./constants";
export const addTask = (text) => {
  return {
    type: 'tasks/addTask',
    payload: {
      id: nanoid(),
      text: text,
      completed: false
    }
  }
}

export const deleteTask = (id) => {
  return {
    type: 'tasks/deleteTask',
    payload: {id}
  };
};

export const checkTask = (id) => {
    return {
      type: 'tasks/checkTask',
      payload: {id}
    };
};

export const setFilter = (filter) => {
    if (Object.values(statusFilters).includes(filter)) {
        return {
          type: 'filter/setFilter',
          payload: filter,
        };
      } else {
        console.error(`Invalid filter: ${filter}`);
        return { type: null }; // Handle invalid filter (optional)
      }
  };
  
  