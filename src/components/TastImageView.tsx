import style from "./TastImageView.module.css";

type TaskImageProps = {
  className: string;
  text: string;
};

function TaskImageView({ className, text }: TaskImageProps) {
  return (
    <div className={style.wrapper}>
      <div className={style[className]}></div>
      <p className={style.text}>{text}</p>
    </div>
  );
}

export { TaskImageView };
