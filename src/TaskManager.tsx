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
    <div className="flex flex-col border-2 border-pink-100 bg-purple-300">
      <button className="btn-rounded-purple" onClick={handleAddTask}>
        Add Task
      </button>
      <TaskList taskList={taskList} deleteTask={deleteTask} />
    </div>
  );
};

export default TaskManager;
