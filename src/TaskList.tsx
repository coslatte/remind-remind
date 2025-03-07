import React from "react";
import Task, { TaskProp } from "./Task";

export interface TaskListProp {
  taskList: TaskProp[];
  deleteTask: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProp> = ({ taskList, deleteTask }) => {
  return (
    <div className="flex flex-col items-center gap-1">
      {taskList.map((task) => (
        <Task key={task.id} {...task} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default TaskList;
