import { useState } from "react";
import style from "./TaskView.module.css";
import { Task } from "../model/types";
import { useAppActions } from "../redux/hooks";

type TaskViewProps = {
  task: Task;
};

function TaskView({ task }: TaskViewProps) {
  const [isChecked, setIsChecked] = useState(task.isCompleted);
  const { createChangeTaskAction, createDeletedTaskAction } = useAppActions();

  const handleCheckboxChange = () => {
    const newIsChecked = !isChecked;
    setIsChecked(newIsChecked);
    createChangeTaskAction(task.id, newIsChecked);
  };

  const handleDeletedTask = () => {
    createDeletedTaskAction(task.id);
  };

  return (
    <div className={style.wrapper}>
      <label className={style.container}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span className={style.checkmark}></span>
      </label>
      <p
        className={`${style.text} ${task.isCompleted ? style.text_decoration : ""} `}
      >
        {task.text}
      </p>
      {task.isCompleted && (
        <div className={style.trash_container}>
          <button className={style.trash_button} onClick={handleDeletedTask}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.9688 1.6875H16.0312C16.4972 1.6875 16.875 2.06526 16.875 2.53125V4.21875H10.125V2.53125C10.125 2.06526 10.5028 1.6875 10.9688 1.6875ZM18.5625 4.21875V2.53125C18.5625 1.13328 17.4292 0 16.0312 0H10.9688C9.57078 0 8.4375 1.13328 8.4375 2.53125V4.21875H4.22829C4.22256 4.21869 4.21681 4.21869 4.21105 4.21875H2.53125C2.06526 4.21875 1.6875 4.59651 1.6875 5.0625C1.6875 5.52849 2.06526 5.90625 2.53125 5.90625H3.4398L4.87884 23.8941C5.01915 25.6481 6.4835 27 8.24309 27H18.7569C20.5165 27 21.9808 25.6481 22.1212 23.8941L23.5602 5.90625H24.4688C24.9347 5.90625 25.3125 5.52849 25.3125 5.0625C25.3125 4.59651 24.9347 4.21875 24.4688 4.21875H22.7889C22.7832 4.21869 22.7774 4.21869 22.7717 4.21875H18.5625ZM21.8673 5.90625L20.439 23.7596C20.3689 24.6366 19.6367 25.3125 18.7569 25.3125H8.24309C7.36329 25.3125 6.63112 24.6366 6.56096 23.7596L5.1327 5.90625H21.8673ZM9.2317 7.59521C9.69689 7.56784 10.0962 7.92277 10.1235 8.38795L10.9673 22.7317C10.9947 23.1969 10.6397 23.5962 10.1745 23.6235C9.70936 23.6509 9.31007 23.296 9.28271 22.8308L8.43896 8.48705C8.41159 8.02186 8.76652 7.62257 9.2317 7.59521ZM17.7683 7.59521C18.2335 7.62257 18.5884 8.02186 18.561 8.48705L17.7173 22.8308C17.6899 23.296 17.2906 23.6509 16.8255 23.6235C16.3603 23.5962 16.0053 23.1969 16.0327 22.7317L16.8765 8.38795C16.9038 7.92277 17.3031 7.56784 17.7683 7.59521ZM13.5 7.59375C13.966 7.59375 14.3438 7.97151 14.3438 8.4375V22.7812C14.3438 23.2472 13.966 23.625 13.5 23.625C13.034 23.625 12.6562 23.2472 12.6562 22.7812V8.4375C12.6562 7.97151 13.034 7.59375 13.5 7.59375Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export { TaskView };
