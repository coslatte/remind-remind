import { useState, useRef, useEffect } from "react";
import { FaCheckCircle, FaEdit, FaTrash } from "react-icons/fa";

export interface TaskProp {
  id: number;
  title: string;
  completed: boolean;
  changeTaskTitle: (id: number, newTitle: string) => void;
  completeTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

const Task: React.FC<TaskProp> = ({
  id,
  title,
  completed,
  changeTaskTitle,
  completeTask,
  deleteTask,
}) => {
  const [taskTitle, setTaskTitle] = useState<string>(title);
  const [isCompleted, setIsCompleted] = useState<boolean>(completed);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Enfoca el input al entrar en modo edición
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  // Sincroniza el estado con las props
  useEffect(() => {
    setTaskTitle(title);
  }, [title]);

  useEffect(() => {
    setIsCompleted(completed);
  }, [completed]);

  return (
    <div
      className={`task-pill borderlands flex w-full ${isCompleted ? "opacity-50" : ""}`}
    >
      <div className="flex w-full space-x-2">
        {/* COMPLETE-TASK */}
        <div className="flex shrink-0">
          <button
            className={`btn-rounded-rose borderlands flex items-center justify-center ${isCompleted ? "bg-green-300" : ""}`}
            onClick={() => {
              setIsCompleted(!isCompleted);
              completeTask(id);
            }}
          >
            <FaCheckCircle
              className={`text-sm ${isCompleted ? "text-green-700" : ""}`}
            />
          </button>
        </div>

        {/* INPUT-TEXT */}
        <div className="flex grow">
          <input
            ref={inputRef}
            type="text"
            value={taskTitle}
            onChange={(e) => {
              setTaskTitle(e.target.value);
              changeTaskTitle(id, e.target.value);
            }}
            onBlur={() => setIsEditing(false)}
            onKeyDown={(e) => e.key === "Enter" && setIsEditing(false)}
            className={`borderlands font-t1 w-min-[8px] w-full grow rounded-full border-2 bg-rose-50 pl-4 text-gray-950 placeholder:pl-2 ${
              isCompleted ? "line-through" : ""
            }`}
            placeholder="Task"
            disabled={!isEditing}
          />
        </div>

        {/* EDIT-TASK */}
        <div className="flex shrink-0">
          <button
            className="borderlands btn-rounded-rose items-center justify-center"
            onClick={() => setIsEditing(true)}
          >
            <FaEdit className="text-sm" />
          </button>
        </div>

        {/* DELETE-TASK */}
        <div className="flex shrink-0">
          <button
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
