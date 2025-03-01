import { useState } from "react";
import Pill from "./Pill";
import { FaCheckCircle, FaEdit, FaTrash } from "react-icons/fa";

interface TaskProperties {
  id: number;
  onDelete: (id: number) => void;
}

const Task: React.FC<TaskProperties> = ({ id, onDelete }) => {
  const [taskInfo, setTaskInfo] = useState<string>("");

  const handleTaskInputText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskInfo(event.target.value);
  };

  return (
    <Pill>
      <div id={`task-${id}`} className="flex">
        {/* COMPLETE-TASK */}
        <div className="centered-boxes">
          <button
            // onClick={updateP}
            id="btn-add-task"
            className="btn-rounded-purple"
          >
            <FaCheckCircle />
          </button>
        </div>
        {/* INPUT-TEXT */}
        <div className="centered-boxes">
          <input
            type="text"
            id="task-input-text"
            value={taskInfo}
            onChange={handleTaskInputText}
            className="border border-purple-100 p-2 rounded-2xl flex justify-center"
            placeholder="Tarea aquí..."
          />
        </div>
        {/* EDIT-TASK */}
        <div className="centered-boxes">
          <button id="btn-edit-task" className="btn-rounded-purple">
            <FaEdit />
          </button>
        </div>
        {/* DELETE-TASK */}
        <div id="btn-delete-task" className="centered-boxes">
          <button
            onClick={() => onDelete(id)}
            id="btn-delete-task"
            className="btn-rounded-purple"
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </Pill>
  );
};

export default Task;
