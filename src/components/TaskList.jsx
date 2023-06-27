import { useDispatch, useSelector } from "react-redux";
import { deleteTasks } from "../features/tasks/taskSlice";
import { Task } from "./Task";
import { useNavigate } from "react-router";

export const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = (id) => {
    dispatch(deleteTasks(id));
  };

  const handleNavigate = () => {
    navigate("/form");
  };

  return (
    <>
      <button onClick={handleNavigate}>Add new Task</button>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          onDelete={handleDelete}
        />
      ))}
    </>
  );
};
