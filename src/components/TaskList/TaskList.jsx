import { Task } from "components/Task/Task";
import { useSelector } from "react-redux";
import css from "./TaskList.module.css";
import { getTasks, getFilters, selectFilteredTasks } from "redux/selectors";

export const TaskList = () => {
  const tasks = useSelector(getTasks);
  const filters = useSelector(getFilters);
  const filteredTasks = useSelector(selectFilteredTasks)

  // const tasks = useSelector(selectFilteredTasks);

  return (
    <ul className={css.list}>
      {filteredTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
