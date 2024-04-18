import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";
import { store } from "./redux/store";
import { ListView } from "./components/ListView";
import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import { rootReducer } from "../src/redux/reducer";
import {
  createAddTaskAction,
  createDeletedTaskAction,
  createChangeTaskAction,
} from "../src/redux/actionCreators";

test("renders ListView component", () => {
  render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>,
  );
  const listViewElement = screen.getByText("Мои задачи");
  expect(listViewElement).toBeInTheDocument();
});

test("renders ListView component with title", () => {
  render(
    <Provider store={store}>
      <ListView />
    </Provider>,
  );
  const titleElement = screen.getByText("Мои задачи");
  expect(titleElement).toBeInTheDocument();
});

test("renders 'Add a task' button", () => {
  render(
    <Provider store={store}>
      <ListView />
    </Provider>,
  );
  const addButton = screen.getByText("Add a task");
  expect(addButton).toBeInTheDocument();
});

test("displays AddTaskView when 'Add a task' button is clicked", () => {
  render(
    <Provider store={store}>
      <ListView />
    </Provider>,
  );
  expect(screen.queryByTestId("add-task-view")).toBeNull();
  const addButton = screen.getByText("Add a task");
  fireEvent.click(addButton);
  setTimeout(() => {
    expect(screen.queryByTestId("add-task-view")).toBeInTheDocument();
  }, 0);
});

test("displays correct count of completed tasks", () => {
  render(
    <Provider store={store}>
      <ListView />
    </Provider>,
  );
  expect(screen.queryByText("Completed (0)")).not.toBeInTheDocument();
});

describe("Redux Store", () => {
  type RootState = ReturnType<typeof rootReducer>;
  let testStore: EnhancedStore<RootState>;

  beforeEach(() => {
    testStore = configureStore({ reducer: rootReducer });
  });

  test("dispatches add task action correctly", () => {
    const task = { id: "1", text: "Покрыть тестами", isCompleted: false };
    testStore.dispatch(createAddTaskAction(task));

    const tasks = testStore.getState().tasks;
    expect(tasks).toHaveLength(1);
    expect(tasks[0]).toEqual(task);
    render(
      <Provider store={store}>
        <ListView />
      </Provider>,
    );
    expect(screen.queryByText("Completed (1)")).not.toBeInTheDocument();
  });

  test("delete action correctly", () => {
    const taskId = "1";
    testStore.dispatch(
      createAddTaskAction({ id: taskId, text: "Task", isCompleted: false }),
    );
    testStore.dispatch(createDeletedTaskAction(taskId));

    const tasks = testStore.getState().tasks;
    expect(tasks.find((task) => task.id === taskId)).toBeUndefined();
  });

  test("change action correctly", () => {
    const taskId = "1";
    const isCompleted = true;
    testStore.dispatch(
      createAddTaskAction({ id: taskId, text: "Task", isCompleted: false }),
    );
    testStore.dispatch(createChangeTaskAction(taskId, isCompleted));

    const tasks = testStore.getState().tasks;
    const updatedTask = tasks.find((task) => task.id === taskId);
    expect(updatedTask?.isCompleted).toEqual(isCompleted);
  });
});
