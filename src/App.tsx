import "./styles/custom-tailwind.css";
import "./styles/scrollbar.css";
import TaskManager from "./TaskManager";

const App: React.FC = () => {
  return (
    <div className="m-4">
      <TaskManager />
    </div>
  );
};

export default App;
