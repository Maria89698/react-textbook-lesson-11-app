import { legacy_createStore as createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

const initialState = {
  tasks: [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
  ],

  filters: {
    status: "all"
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'tasks/addTask':
      return {
        ...state,
        tasks: [...state.tasks, action.payload]  
      }
    
    case 'tasks/deleteTask':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload.id)
      };

    case 'tasks/checkTask':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id
            ? { ...task, completed: action.payload.completed }
            : task
        )
      };

    case 'filter/setFilter':
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  } 
};

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);