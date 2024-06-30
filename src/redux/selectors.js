import { statusFilters } from "./constants";
import { createSelector } from "reselect";
// import { getTasks, getFilters } from "./store";

export const getTasks = state => state.tasks;

export const getFilters = state => state.filters.status;

// export const selectFilteredTasks = (state) => {
//     const tasks = getTasks(state);
//     const filter = getFilters(state);
  
//     switch (filter) {
//       case statusFilters.active:
//         return tasks.filter(task => !task.completed);
//       case statusFilters.completed:
//         return tasks.filter(task => task.completed);
//       case statusFilters.all:
//       default:
//         return tasks;
//     }
// };

export const selectFilteredTasks = createSelector(
    [getTasks, getFilters],
    (tasks, filters) => {
      switch (filters.status) {
        case statusFilters.active:
          return tasks.filter(task => !task.completed);
        case statusFilters.completed:
          return tasks.filter(task => task.completed);
        case statusFilters.all:
        default:
          return tasks;
      }
    }
  );