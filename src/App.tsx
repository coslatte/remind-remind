import "./styles/custom-tailwind.css";
import TaskManager from "./TaskManager";
import TimePanel from "./TimePanel";

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-rose-100">
      <div className="flex h-full flex-col space-y-2 p-2">
        <TimePanel />
        <TaskManager />
      </div>
    </div>
  );
};

export default App;
