import React, { useState } from "react";
import TaskList from "./TaskList";
import { TaskProp } from "./Task";

const TaskManager: React.FC = () => {
  const [taskList, setTaskList] = useState<TaskProp[]>([]);

  function addTask(task: TaskProp): void {
    setTaskList([...taskList, task]);
  }

  function deleteTask(taskId: number): void {
    setTaskList(taskList.filter((task) => task.id !== taskId));
  }

  function handleAddTask(): void {
    const newTask: TaskProp = {
      id: taskList.length + 1,
      title: "",
      completed: false,
      deleteTask: deleteTask,
    };
    addTask(newTask);
  }

  return (
    <div className="space-y-4">
      <div className="w-full">
        <button
          className="borderlands flat-shadow btn-rounded-rose font-baloo w-full"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>
      <div className="borderlands flat-shadow scrollbar-thin scrollbar-thumb-rose-500 scrollbar-track-gray-200 h-[calc(100vh-160px)] overflow-y-scroll rounded-3xl bg-rose-400 p-2">
        <TaskList taskList={taskList} deleteTask={deleteTask} />
      </div>
    </div>
  );
};

export default TaskManager;
