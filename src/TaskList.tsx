import React from "react";
import Task, { TaskProp } from "./Task";

interface TaskListProp {
  taskList: TaskProp[];
  changeTaskTitle: (id: number, newTitle: string) => void;
  completeTask: (taskId: number) => void;
  deleteTask: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProp> = ({
  taskList,
  changeTaskTitle,
  completeTask,
  deleteTask,
}) => {
  return (
    <div className="flex flex-col items-center gap-1">
      {taskList.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          completed={task.completed}
          changeTaskTitle={changeTaskTitle}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
