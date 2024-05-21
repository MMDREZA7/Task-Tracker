import { FaTimes } from "react-icons/fa";

const Task = ({ tasks, onDelete, onToggle }) => {
  return (
    <div className={`task ${tasks.reminder ? "reminder" : ""}`}>
      <h3>
        {tasks.text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(tasks.id)}
          onDoubleClick={() => onToggle(tasks.id)}
        />
      </h3>
      <p className="reminder">{tasks.day}</p>
    </div>
  );
};

export default Task;
