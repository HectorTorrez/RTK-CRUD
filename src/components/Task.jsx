// import { Link } from "react-router-dom";
// import { FiEdit2 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

import { useDispatch } from "react-redux";
import { editTasks } from "../features/tasks/taskSlice";

// eslint-disable-next-line react/prop-types
export const Task = ({ title, onDelete, id, done }) => {
  const dispatch = useDispatch();
  const handleChange = (newTask) => {
    dispatch(editTasks(newTask));
  };

  const handleDone = (newDone) => {
    dispatch(editTasks(newDone));
  };

  return (
    <section className="flex justify-between w-full gap-10  items-center font-bold text-xl">
      <input
        type="checkbox"
        name="done"
        id=""
        checked={done}
        value={done}
        onChange={() =>
          handleDone({
            id,
            title,
            done: !done,
          })
        }
      />

      <input
        className={`${done ? "text-slate-400" : ""}`}
        type="text"
        value={title}
        maxLength={25}
        onChange={(e) =>
          handleChange({
            id: id,
            title: e.target.value,
          })
        }
      />

      <section className="flex gap-3 items-center ">
        {/* <Link className="hover:text-blue-300" to={`/formEdit/${id}`}>
          <FiEdit2 />
        </Link> */}

        <button className="hover:text-red-500" onClick={() => onDelete(id)}>
          <MdDeleteOutline />
        </button>
      </section>
    </section>
  );
};
