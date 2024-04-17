import { Task } from "../model/types";

enum TaskActions {
  ADD_TASK = "ADD_TASK",
  DELETE_TASK = "DELETE_TASK",
  CHANGE_COMPLED = "CHANGE_COMPLED",
  UNDO = "UNDO",
  REDO = "REDO",
}

type AddTaskAction = {
  type: TaskActions.ADD_TASK;
  payload: Task;
};

type DeletedTaskAction = {
  type: TaskActions.DELETE_TASK;
  payload: {
    taskId: string;
  };
};

type ChangeTaskAction = {
  type: TaskActions.CHANGE_COMPLED;
  payload: {
    taskId: string;
    isCompled: boolean;
  };
};

type UndoAction = {
  type: TaskActions.UNDO;
};

type RedoAction = {
  type: TaskActions.REDO;
};

type Action =
  | AddTaskAction
  | ChangeTaskAction
  | DeletedTaskAction
  | UndoAction
  | RedoAction;

export { TaskActions, type Action };
