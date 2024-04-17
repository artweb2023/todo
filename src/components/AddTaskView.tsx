import style from "./AddTaskView.module.css";

type TaskProps = {
  onClose: () => void;
};

function AddTaskView({ onClose }: TaskProps) {
  return (
    <div className={style.wrapper}>
      <input
        className={style.input}
        placeholder="What needs to be Done?"
      ></input>
      <button className={style.button} onClick={onClose}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22.5C6.20101 22.5 1.5 17.799 1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 17.799 17.799 22.5 12 22.5ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
            fill="#69D614"
          />
          <path
            d="M12 6C12.4142 6 12.75 6.33579 12.75 6.75V11.25H17.25C17.6642 11.25 18 11.5858 18 12C18 12.4142 17.6642 12.75 17.25 12.75H12.75V17.25C12.75 17.6642 12.4142 18 12 18C11.5858 18 11.25 17.6642 11.25 17.25V12.75H6.75C6.33579 12.75 6 12.4142 6 12C6 11.5858 6.33579 11.25 6.75 11.25H11.25V6.75C11.25 6.33579 11.5858 6 12 6Z"
            fill="#69D614"
          />
        </svg>
      </button>
    </div>
  );
}

export { AddTaskView };