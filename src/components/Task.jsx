import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const Task = ({ title, onDelete, id }) => {
  return (
    <>
      <p>{title}</p>

      <Link to={`/form/${id}`}>Edit</Link>

      <button onClick={() => onDelete(id)}>Delete</button>
    </>
  );
};
