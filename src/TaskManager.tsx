import { forwardRef, useImperativeHandle, useState } from "react";
import { TaskProp } from "./Task";
import TaskList from "./TaskList";

export interface TaskManagerHandle {
  handleAddTask: (title: string) => void;
}

const TaskManager = forwardRef<TaskManagerHandle>((_props, ref) => {
  const [taskList, setTaskList] = useState<TaskProp[]>([]);
  const completedTasks: number = getCompletedTasks();
  const pendingTasks: number = getPendingTasks();

  useImperativeHandle(ref, () => ({
    handleAddTask,
  }));

  // HANDLING TASKS
  // --------------
  const handleAddTask = (title?: string) => {
    const newTask: TaskProp = {
      id: taskList.length + 1,
      title: title || "",
      completed: false,
      changeTaskTitle: changeTaskTitle,
      completeTask: completeTask,
      deleteTask: deleteTask,
    };
    addTask(newTask);
  };

  const addTask = (task: TaskProp) => {
    setTaskList([...taskList, task]);
  };

  const deleteTask = (taskId: number) => {
    setTaskList(taskList.filter((task) => task.id !== taskId));
  };

  const completeTask = (taskId: number) => {
    setTaskList(
      taskList.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        }
        return task;
      }),
    );
  };

  const changeTaskTitle = (taskId: number, newTitle: string) => {
    setTaskList(
      taskList.map((task) => {
        if (task.id === taskId) {
          return { ...task, title: newTitle };
        }
        return task;
      }),
    );
  };

  // FUNCTIONS
  // ---------
  function getCompletedTasks(): number {
    return taskList.filter((task) => task.completed).length;
  }

  function getPendingTasks(): number {
    const dif = taskList.length - completedTasks; // Not the best choise but im lazy rn (stays like this for te rest of the century)
    if (dif > 0) {
      return dif;
    }
    console.log("error while getting pending task"); // just in case
    return 0;
  }

  // COMPONENTS
  // ----------
  const HandyInfoText = (props: { children: React.ReactNode }) => (
    <div className="flex rounded-3xl bg-rose-300">
      <p className="font-baloo pr-2 pl-2 text-rose-100">{props.children}</p>
    </div>
  );

  return (
    <div className="borderlands flat-shadow flex h-64 flex-col space-y-1 rounded-3xl bg-rose-500 p-2">
      <div className="flex h-full w-full overflow-y-auto rounded-3xl bg-rose-400 p-2">
        <div className="w-full">
          <TaskList
            taskList={taskList}
            changeTaskTitle={changeTaskTitle}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        </div>
      </div>
      <div className="pointer-events-auto flex h-8 items-center justify-start space-x-2 rounded-3xl bg-rose-600 p-2">
        <HandyInfoText>Tasks: {taskList.length}</HandyInfoText>
        <HandyInfoText>Completed: {completedTasks}</HandyInfoText>
        <HandyInfoText>Pending: {pendingTasks}</HandyInfoText>
      </div>
    </div>
  );
});

export default TaskManager;
