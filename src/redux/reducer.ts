import { combineReducers } from "redux";
import { TaskModel } from "../model/types";
import { Action, TaskActions } from "./actions";

const initialState: TaskModel = {
  tasks: [],
};

const tasksReducer = (state = initialState.tasks, action: Action) => {
  switch (action.type) {
    case TaskActions.ADD_TASK: {
      const newState = [...state, action.payload];
      return newState;
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export { rootReducer };
