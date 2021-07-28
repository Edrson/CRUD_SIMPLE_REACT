/** @format */

import React from "react";
import shortid from "shortid";

function App() {
  const [tarea, setTarea] = React.useState("");
  const [tareas, setTareas] = React.useState([]);
  const agregarTarea = (e) => {
    e.preventDefault();
    console.log(tarea);
    if (!tarea.trim()) {
      console.log("elemento vacio");
      return;
    }
    setTareas([...tareas, { id: shortid.generate(), nombreTarea: tarea }]);
    setTarea("");
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">CRUD SIMPLE</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de tareas</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <span className="lead">Nombre de la tarea</span>
              <button className="btn btn-danger btn-sm float-right mx-2">
                Eliminar
              </button>
              <button className="btn btn-warning btn-sm float-right">
                Editar
              </button>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">Formulario</h4>
          <form onSubmit={agregarTarea}>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Ingrese tarea"
              onChange={(e) => setTarea(e.target.value)}
              value={tarea}
            />
            <button className="btn btn-dark btn-block" type="submit">
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
