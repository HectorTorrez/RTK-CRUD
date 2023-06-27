import "./App.css";
import { useSelector } from "react-redux";
import { TaskList } from "./components/TaskList";
import { FormTask } from "./components/FormTask";

function App() {
  const Tasks = useSelector((state) => state.tasks);
  console.log(Tasks);

  return (
    <>
      <h1>HOME</h1>
      <FormTask/>
      <TaskList/>
    </>
  );
}

export default App;
