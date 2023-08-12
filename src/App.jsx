import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import AddTask from "./components/AddTask/AddTask";
import ShowTask from "./components/ShowTask/ShowTask";

import "./App.css";

function App() {
  // const taskData = JSON.parse(localStorage.getItem('tasklist')) || [];
  const [tasklist, setTasklist] = useState(() => {
    const taskData = localStorage.getItem("tasklist");
    return taskData ? JSON.parse(taskData) : [];
  });

  const [task, setTask] = useState({});

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
  }, [tasklist]);

  return (
    <div className="App">
      <Header />
      <AddTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
      <ShowTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
    </div>
  );
}

export default App;
