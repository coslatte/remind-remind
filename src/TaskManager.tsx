import { forwardRef, useImperativeHandle, useState } from "react";
import { TaskProp } from "./Task";
import TaskList from "./TaskList";

export interface TaskManagerHandle {
  handleAddTask: () => void;
}

const TaskManager = forwardRef<TaskManagerHandle>((_props, ref) => {
  const [taskList, setTaskList] = useState<TaskProp[]>([]);
  const completedTasks: number = getCompletedTasks();
  const pendingTasks: number = getPendingTasks();

  useImperativeHandle(ref, () => ({
    handleAddTask,
  }));

  // ADD
  // ---
  const handleAddTask = () => {
    const newTask: TaskProp = {
      id: taskList.length + 1,
      title: "",
      completed: false,
      deleteTask: deleteTask,
    };
    addTask(newTask);
  };

  const addTask = (task: TaskProp) => {
    setTaskList([...taskList, task]);
  };

  // DELETE
  // ------
  const deleteTask = (taskId: number) => {
    setTaskList(taskList.filter((task) => task.id !== taskId));
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
      <div className="scrollbar scrollbar-thumb-rose-500 scrollbar-track-rose-100 hover:scrollbar-thumb-rose-600 scrollbar-w-3 scrollbar-rounded h-full w-full overflow-y-auto overscroll-y-auto rounded-3xl bg-rose-400 p-1">
        <TaskList taskList={taskList} deleteTask={deleteTask} />
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
