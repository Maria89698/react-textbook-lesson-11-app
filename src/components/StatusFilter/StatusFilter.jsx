import { Button } from "components/Button/Button";
import css from "./StatusFilter.module.css";
import { useDispatch } from "react-redux";
import { setFilter } from "redux/actions";
import { statusFilters } from "redux/constants";

export const StatusFilter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <div className={css.wrapper}>
      <Button onClick={() => handleFilterChange(statusFilters.all)}>All</Button>
      <Button onClick={() => handleFilterChange(statusFilters.active)}>Active</Button>
      <Button onClick={() => handleFilterChange(statusFilters.completed)}>Completed</Button>
    </div>
  );
};
