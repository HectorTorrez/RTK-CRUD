import { useDispatch, useSelector } from "react-redux";
import { deleteTasks } from "../features/tasks/taskSlice";
import { Task } from "./Task";
// import { useNavigate } from "react-router";
import { FormTask } from "./FormTask";

export const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const handleDelete = (id) => {
    dispatch(deleteTasks(id));
  };

  // const handleNavigate = () => {
  //   navigate("/form");
  // };

  return (
    <section className="max-w-lg flex flex-col items-center m-auto h-screen justify-center">
      <h1 className="font-bold text-6xl">Task List</h1>
      <FormTask />
      {/* <button className="" onClick={handleNavigate}>
        Add new Task
      </button> */}
      <section className="flex  flex-col justify-center items-center gap-5 ">
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            done={task.done}
            onDelete={handleDelete}
          />
        ))}
      </section>
    </section>
  );
};
