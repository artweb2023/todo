import { combineReducers } from "redux";
import { Task } from "../model/types";
import { Action, TaskActions } from "./actions";
import { createHistory } from "../model/history";

const initState: Task[] = [];
const history = createHistory<Task[]>(initState);

const tasksReducer = (state = initState, action: Action) => {
  switch (action.type) {
    case TaskActions.ADD_TASK: {
      const newState = [...state, action.payload];
      history.addHistoryItem(newState);
      return newState;
    }
    case TaskActions.CHANGE_COMPLED: {
      const newState = state.map((task) => {
        if (task.id === action.payload.taskId) {
          return {
            ...task,
            isCompleted: action.payload.isCompled,
          };
        }
        return task;
      });
      history.addHistoryItem(newState);
      return newState;
    }
    case TaskActions.DELETE_TASK: {
      const newState = state.filter(
        (item) => item.id !== action.payload.taskId,
      );
      history.addHistoryItem(newState);
      return newState;
    }
    case TaskActions.UNDO: {
      const prevState = history.undo();
      if (prevState) {
        return prevState;
      }
      return state;
    }
    case TaskActions.REDO: {
      const nextState = history.redo();
      if (nextState) {
        return nextState;
      }
      return state;
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export { rootReducer };
