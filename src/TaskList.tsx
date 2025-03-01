import React, { useState } from "react";
import Task from "./Task";
import { FaDiceFive } from "react-icons/fa";

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<
    { id: number; component: React.ReactNode }[]
  >([]);
  const [nextId, setNextId] = useState<number>(0);

  const addTask = () => {
    const id = nextId;
    setTasks([
      ...tasks,
      { id, component: <Task key={id} id={id} onDelete={deleteTask} /> },
    ]);
    setNextId(nextId + 1);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <div className="flex bg-gray-600">
        <button onClick={addTask} className="btn-rounded-purple">
          <FaDiceFive />
        </button>
      </div>
      <div className="flex p-2">
        {tasks.map((task) => (
          <div key={task.id}>{task.component}</div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
