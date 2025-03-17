import { useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import TaskManager, { TaskManagerHandle } from "./TaskManager";
import TimePanel from "./TimePanel";
import "./styles/custom-tailwind.css";

const App: React.FC = () => {
  const taskManagerRef = useRef<TaskManagerHandle>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(false);
  };

  const AddTaskModal: React.FC = () => {
    const DEFAULT_BTN_TEXT: string = "Create";
    const [taskTitle, setTaskTitle] = useState<string>("");
    const [taskIsValid, setTaskIsValid] = useState<boolean>(false);
    const [buttonText, setButtonText] = useState<string>(DEFAULT_BTN_TEXT);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      if (!taskIsValid) {
        setButtonText("???");
        setTimeout(() => {
          setButtonText(DEFAULT_BTN_TEXT);
        }, 1500);
        return;
      }

      if (taskManagerRef.current) {
        taskManagerRef.current.handleAddTask(taskTitle);
        setTaskTitle("");
        setTaskIsValid(false);
        closeModal(e);
      }
    };

    const handleInputChange = (
      e: React.ChangeEvent<HTMLInputElement>,
    ): void => {
      const value = e.target.value;
      const condition: boolean = value.length > 3 ? true : false;

      setTaskTitle(value);
      setTaskIsValid(condition);
      setButtonText(DEFAULT_BTN_TEXT);
    };

    return (
      <>
        <div
          onClick={closeModal}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <div className="fixed inset-0 bg-rose-950/30"></div>
          <div
            className="borderlands pill-task relative z-50 flex w-60 flex-col space-y-2 rounded-3xl bg-rose-300 p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="items-center justify-center text-center text-2xl/6">
              New Task
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <div className="flex flex-col space-y-2 p-2">
                <p className="font-baloo mb-2 pl-1 text-2xl">Title</p>
                <input
                  type="text"
                  className="borderlands font-baloo h-full rounded-2xl bg-rose-200 pl-2 text-sm"
                  placeholder="Task name..."
                  value={taskTitle}
                  onChange={handleInputChange}
                  required
                />
                <button
                  type="submit"
                  className={`${taskIsValid ? "font-baloo borderlands rounded-full bg-rose-400 p-2 text-sm hover:bg-rose-500/8 active:bg-rose-100/50" : "font-baloo borderlands cursor-not-allowed rounded-full bg-rose-700 p-2 text-sm text-rose-100 hover:bg-rose-500/8 active:bg-rose-100/50"}`}
                  disabled={!taskIsValid}
                >
                  {buttonText}
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="borderlands flex h-full w-full flex-col space-y-2 rounded-4xl bg-rose-100 p-2">
        <div className="flex space-x-2 p-2">
          <div className="flex grow cursor-help">
            <TimePanel />
          </div>
          <div className="flex">
            <div className="h-8 w-8">
              <button className="borderlands flat-shadow rounded-full bg-rose-400/90 p-1 hover:bg-rose-300 active:bg-rose-500">
                <IoClose className="items-center justify-center text-3xl" />
              </button>
            </div>
          </div>
        </div>

        {/* TASKS */}
        <div className="flex h-full flex-col space-y-2">
          <button
            className="borderlands btn-rounded-rose flat-shadow font-baloo rounded-3xl text-2xl"
            onClick={openModal}
          >
            Add Task
          </button>
          <TaskManager ref={taskManagerRef} />
        </div>
        <div className="relative">
          {/* TASK MODAL */}
          {isModalOpen && <AddTaskModal />}
        </div>
      </div>
    </>
  );
};

export default App;
