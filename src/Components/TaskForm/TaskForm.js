import React, { useState } from "react";
import { db } from "../../firebase";

const TaskForm = ({ getTasks }) => {

  const [task, setTask] = useState({
    status: 1,
  });

  const addTask = async (taksObject) => {
    await db.collection("tasks").doc().set(taksObject);
  };

  const { title, desc } = task;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
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
    <div className="col-md-5 m-auto">
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
