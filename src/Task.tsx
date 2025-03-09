import { useState } from "react";
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
    <div className="task-pill borderlands flex w-full">
      <div className="flex w-full space-x-2">
        {/* COMPLETE-TASK */}
        <div className="flex shrink-0">
          <button
            id="btn-add-task"
            className="btn-rounded-rose borderlands flex items-center justify-center"
            onClick={() => setIsCompleted(!isCompleted)}
          >
            <FaCheckCircle className="text-sm" />
          </button>
        </div>

        {/* INPUT-TEXT */}
        <div className="flex grow">
          <input
            type="text"
            id="task-input"
            value={taskTitle}
            onChange={handleTaskInputText}
            className="borderlands font-t1 w-min-[8px] w-full grow rounded-full border-2 bg-rose-50 pl-4 text-gray-950 placeholder:pl-2"
            placeholder="Task"
          />
        </div>

        {/* EDIT-TASK */}
        <div className="flex shrink-0">
          <button
            id="btn-edit-task"
            className="borderlands btn-rounded-rose items-center justify-center"
          >
            <FaEdit className="text-sm" />
          </button>
        </div>

        {/* DELETE-TASK */}
        <div className="flex shrink-0">
          <button
            id="btn-delete-task"
            className="borderlands btn-rounded-rose flex items-center justify-center"
            onClick={() => deleteTask(id)}
          >
            <FaTrash className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
