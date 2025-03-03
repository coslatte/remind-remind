import { useState } from "react";
import Pill from "./Pill";
import { FaCheckCircle, FaEdit, FaTrash } from "react-icons/fa";

export interface TaskProp {
  id: number;
  title: string;
  completed: boolean;
  deleteTask: (id: number) => void;
}

const Task: React.FC<TaskProp> = ({ id, title, completed, deleteTask }) => {
  const [taskTitle, setTaskTitle] = useState<string>(title);
  const [isCompleted, setIsCompleted] = useState<boolean>(completed);

  const handleTaskInputText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.target.value);
  };

  return (
    <Pill>
      <div className="flex space-x-2 w-full">
        {/* COMPLETE-TASK */}
        <div className="flex-none">
          <button
            id="btn-add-task"
            className="btn-rounded-purple"
            onClick={() => setIsCompleted(!isCompleted)}
          >
            <FaCheckCircle />
          </button>
        </div>
        {/* INPUT-TEXT */}
        <div className="flex grow justify-center">
          <input
            type="text"
            id="task-input-text"
            value={taskTitle}
            onChange={handleTaskInputText}
            className="flex grow rounded-sm border-2 border-rose-300"
            placeholder="Tarea aquí..."
          />
        </div>
        {/* EDIT-TASK */}
        <div className="flex-none">
          <button id="btn-edit-task" className="btn-rounded-purple">
            <FaEdit />
          </button>
        </div>
        {/* DELETE-TASK */}
        <div className="flex-none">
          <button
            id="btn-delete-task"
            className="btn-rounded-purple"
            onClick={() => deleteTask(id)}
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </Pill>
  );
};

export default Task;
