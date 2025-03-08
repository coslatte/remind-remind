import "./styles/custom-tailwind.css";
import "./styles/scrollbar.css";
import TaskManager from "./TaskManager";
import TimePanel from "./TimePanel";

const App: React.FC = () => {
  return (
    <div className="m-2 bg-rose-100 p-2">
      <TimePanel />
      <TaskManager />
    </div>
  );
};

export default App;
