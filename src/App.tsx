import { useState } from "react";
import "./styles/index.css";

function Task() {
  const [taskInfo, setTaskInfo] = useState("");

  return (
    <>
      <div className="bg-purple-200 flex space-x-4 p-4">
        {/* Botón Completar Tarea */}
        <div>
          <button className="btn-rounded-purple">Agregar</button>
        </div>
        {/* Texto con información de Tarea */}
        <div>
          <input
            type="text"
            className="border p-2 rounded-2xl border-purple-100"
            placeholder="Tarea aqui..."
          />
        </div>
        {/* Editar Tarea */}
        <div>
          <button className="btn-rounded-purple">Editar</button>
        </div>
        {/* Eliminar Tarea */}
        <div>
          <button className="btn-rounded-purple">Elimitar</button>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <div className="bg-gray-800">
        <Task />
      </div>
    </>
  );
}

export default App;
