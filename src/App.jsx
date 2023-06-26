import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const Tasks = useSelector((state) => state.tasks);
  console.log(Tasks);

  return (
    <>
      <h1>HOME</h1>
    </>
  );
}

export default App;
