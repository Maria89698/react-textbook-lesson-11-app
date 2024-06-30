import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import { useDispatch } from "react-redux";
import { deleteTask } from "redux/actions";
import { checkTask } from "redux/actions";

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = (event) => {
    event.preventDefault()

    dispatch(deleteTask(task.id));
  };
  console.log(handleDelete);

  const handleCheck = () => {
    dispatch(checkTask(task.id, !task.completed));
  };

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handleCheck}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
