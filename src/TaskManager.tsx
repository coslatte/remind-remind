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
    <>
      <div className="m-2">
        <button
          className="borderlands flat-shadow btn-rounded-purple font-t1 w-full"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>
      <div className="borderlands flat-shadow scrollbar-thin scrollbar-thumb-rose-500 scrollbar-track-gray-200 m-2 h-64 overflow-y-scroll rounded-3xl bg-rose-400 p-2">
        <TaskList taskList={taskList} deleteTask={deleteTask} />
      </div>
    </>
  );
};

export default TaskManager;
