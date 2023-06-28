import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTasks } from "../features/tasks/taskSlice";
import { CiStickyNote } from "react-icons/ci";
export const FormTask = () => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") return;
    dispatch(
      addTasks({
        title,
        id: crypto.randomUUID(),
        done: false,
      })
    );

    setTitle("");
  };

  return (
    <form className="my-10 flex gap-3 text-xl" onSubmit={handleSubmit}>
      <input
        className=" outline-none border-b border-b-gray-200 hover:py-2 w-36"
        onChange={handleChange}
        maxLength={25}
        type="text"
        name="title"
        value={title}
        placeholder="Tasks..."
      />

      <button className="bg-blue-300 rounded-lg px-3 shadow-lg" type="submit">
        <CiStickyNote />
      </button>
    </form>
  );
};
