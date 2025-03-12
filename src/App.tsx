import { useRef } from "react";
import Button from "./BasicComp/Button";
import "./styles/custom-tailwind.css";
import TaskManager, { TaskManagerHandle } from "./TaskManager";
import TimePanel from "./TimePanel";

const App: React.FC = () => {
  const taskManagerRef = useRef<TaskManagerHandle>(null);

  return (
    <>
      <div className="flex h-screen w-screen flex-col space-y-2 bg-rose-100 p-2">
        <div>
          <TimePanel />
        </div>
        <div className="flex h-full flex-col space-y-2">
          <Button
            label="Add Task"
            toHandle={() => taskManagerRef.current?.handleAddTask()}
          />
          <TaskManager ref={taskManagerRef} />
        </div>
      </div>
    </>
  );
};

export default App;
