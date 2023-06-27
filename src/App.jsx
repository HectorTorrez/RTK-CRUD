import "./App.css";
import { TaskList } from "./components/TaskList";
import { FormTask } from "./components/FormTask";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/form" element={<FormTask />} />
        <Route path="/form/:id" element={<FormTask />} />
      </Routes>
    </>
  );
}

export default App;
