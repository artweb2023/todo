import { useState } from "react";
import style from "./ListView.module.css";
import { AddTaskView } from "./AddTaskView";
import { TaskView } from "./TaskView";

function ListView() {
  const [isShowAdd, setShowAdd] = useState(false);
  const [isVisibleCompleted, setVisibleCompleted] = useState(false);
  const handleOpenAddTask = () => {
    if (!isShowAdd) {
      setShowAdd(true);
    } else {
      setShowAdd(false);
    }
  };
  const handleCloseAddTask = () => {
    setShowAdd(false);
  };
  const handleVisibleCompleted = () => {
    if (!isVisibleCompleted) {
      setVisibleCompleted(true);
    } else {
      setVisibleCompleted(false);
    }
  };
  const classNames = `${style.arrow} ${
    isVisibleCompleted ? style.arrow_down : style.arrow_right
  }
  `;
  return (
    <div className={style.list}>
      <h1 className={style.title}>Мои задачи</h1>
      <button className={style.button} onClick={handleOpenAddTask}>
        <svg
          enableBackground="new 0 0 24 24"
          focusable="false"
          height="30"
          viewBox="0 0 24 24"
          width="30"
          className={style.icon}
        >
          <path
            d="M3.75 12C3.75 7.44365 7.44365 3.75 12 3.75C13.5039 3.75 14.9118 4.15173 16.1245 4.85324C16.483 5.06065 16.9418 4.93813 17.1492 4.57958C17.3566 4.22104 17.2341 3.76224 16.8755 3.55484C15.4407 2.72481 13.7747 2.25 12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 11.5858 21.4142 11.25 21 11.25C20.5858 11.25 20.25 11.5858 20.25 12C20.25 16.5563 16.5563 20.25 12 20.25C7.44365 20.25 3.75 16.5563 3.75 12Z"
            fill="#186AFA"
          />
          <path
            d="M23.0303 5.03033C23.3232 4.73744 23.3232 4.26256 23.0303 3.96967C22.7374 3.67678 22.2626 3.67678 21.9697 3.96967L12 13.9393L8.03033 9.96967C7.73744 9.67678 7.26256 9.67678 6.96967 9.96967C6.67678 10.2626 6.67678 10.7374 6.96967 11.0303L11.4697 15.5303C11.7626 15.8232 12.2374 15.8232 12.5303 15.5303L23.0303 5.03033Z"
            fill="#186AFA"
          />
        </svg>
        Add a task
      </button>
      {isShowAdd && <AddTaskView onClose={handleCloseAddTask}></AddTaskView>}
      <div className={style.current_container}>
        <TaskView></TaskView>
        <TaskView></TaskView>
      </div>
      <div className={style.completed_container}>
        <div className={style.wrapper}>
          <button
            className={classNames}
            onClick={handleVisibleCompleted}
          ></button>
          <h2 className={style.subtitle}>Completed (1)</h2>
        </div>
        {isVisibleCompleted && <TaskView></TaskView>}
      </div>
    </div>
  );
}

export { ListView };
