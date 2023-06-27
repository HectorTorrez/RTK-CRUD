import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTasks, editTasks } from "../features/tasks/taskSlice";
import { useNavigate, useParams } from "react-router";

export const FormTask = () => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();
  const params = useParams();
  const newtask = useSelector((state) => state.tasks);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.id) {
      dispatch(editTasks({ title, id: params.id }));
    } else {
      dispatch(
        addTasks({
          title,
          id: crypto.randomUUID(),
          done: false,
        })
      );
    }

    navigate("/");
    setTitle("");
  };

  useEffect(() => {
    if (params.id) {
      const { title } = newtask.find((task) => task.id === params.id);
      setTitle(title);
    }
  }, [params, newtask]);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        <input
          onChange={handleChange}
          type="text"
          name="title"
          value={title}
          placeholder="Add task"
        />
      </label>
      <button type="submit">Add task</button>
    </form>
  );
};
