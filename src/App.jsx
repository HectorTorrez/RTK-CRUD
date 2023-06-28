import "./App.css";
import { TaskList } from "./components/TaskList";
import { FormTask } from "./components/FormTask";
import { FormEdit } from "./components/FormEdit";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/form" element={<FormTask />} />
        <Route path="/formEdit/:id" element={<FormEdit />} />
      </Routes>
    </>
  );
}

export default App;
