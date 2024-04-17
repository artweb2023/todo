import style from "./TaskView.module.css";

function TaskView() {
  return (
    <div className={style.wrapper}>
      <label className={style.container}>
        <input type="checkbox" />
        <span className={style.checkmark}></span>
      </label>
      <p className={style.text}>В работе</p>
    </div>
  );
}

export { TaskView };
