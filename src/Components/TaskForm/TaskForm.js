import React, { useState } from "react";
import "./TaskForm.css"
import { db } from "../../firebase";

const TaskForm = ({ getTasks }) => {

  const [task, setTask] = useState({
    status: 1,
  });

  const [ error, setError ] = useState(false);

  const addTask = async (taksObject) => {
    await db.collection("tasks").doc().set(taksObject);
  };

  const { title, desc } = task;

  const handleSubmit = (e) => {
    e.preventDefault();
    if(title === '' || desc === '') {
      setError(true)
      return;
    }
    setError(false)

    addTask(task);
    getTasks();
    setTask({
      title: "",
      desc: "",
      status: 1,
    });
  };

  const handeInput = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  return (
    
    <div className="m-auto col-md-4">
      {error && <div className="mt-4 p-2 bg-danger text-white">NO PUEDE AGREGAR TAREA VACIA</div>}
      <h5 className="tasks mt-4">Taller Mecánico AutoCity</h5>
      <p className="add-tasks">-- Add Tasks --</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="title"
            placeholder="Titulo de la tarea"
            className="form-control m-2"
            onChange={handeInput}
            value={title}
            />

          <input
            type="text"
            name="desc"
            placeholder="Descripción"
            className="form-control m-2"
            onChange={handeInput}
            value={desc}
          />
        </div>
        <button type="submit" className="btn btn-secondary">
          Agregar Tarea
        </button>
      </form>
    </div>

  );
};

export default TaskForm;
