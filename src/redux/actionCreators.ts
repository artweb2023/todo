import { TaskActions } from "./actions";

function createAddTaskAction(taskId: string, newTask: string) {
  return {
    type: TaskActions.ADD_TASK,
    payload: {
      taskId,
      newTask,
    },
  };
}

function createDeletedTaskAction(taskId: string) {
  return {
    type: TaskActions.DELETE_TASK,
    payload: {
      taskId,
    },
  };
}

function createChangeTaskAction(taskId: string, isCompled: boolean) {
  return {
    type: TaskActions.CHANGE_COMPLED,
    payload: {
      taskId,
      isCompled,
    },
  };
}

function createUndoAction() {
  return {
    type: TaskActions.UNDO,
  };
}

function createRedoAction() {
  return {
    type: TaskActions.REDO,
  };
}

export {
  createAddTaskAction,
  createDeletedTaskAction,
  createChangeTaskAction,
  createUndoAction,
  createRedoAction,
};
