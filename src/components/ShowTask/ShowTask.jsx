import { BiEdit } from "react-icons/bi";
import { FiDelete } from "react-icons/fi";
import "./showTask.css";
const ShowTask = ({ tasklist, setTasklist, task, setTask }) => {
  const handleEdit = (id) => {
    const selectedTask = tasklist.find((task) => task.id === id);
    setTask(selectedTask);
  };

  const handleDelete = (id) => {
    const updatedTaskList = tasklist.filter((task) => task.id !== id);
    setTasklist(updatedTaskList);
  };
  return (
    <section className="showTask">
      <p className="head">
        <span>
          <span className="title">Task</span>
          <span className="count">{tasklist.length}</span>
        </span>
        <button className="clearAll" onClick={() => setTasklist([])}>
          Clear All
        </button>
      </p>
      {tasklist.length === 0 ? (
        <p>Tasklist is empty</p>
      ) : (
        <ul>
          {tasklist.map((task) => (
            <li key={task.id}>
              <p>
                <span className="name">{task.name}</span>
                <span className="time">{task.time}</span>
              </p>
              <BiEdit className="edit" onClick={() => handleEdit(task.id)} />
              <FiDelete
                className="delete"
                onClick={() => handleDelete(task.id)}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default ShowTask;
