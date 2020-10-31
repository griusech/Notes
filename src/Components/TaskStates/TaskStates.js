import React from "react";
import { db } from "../../firebase";

const TaskStates = ({ getTasks, tasks, title, statusId }) => {

  const changeStatus = async (id, status) => {
    await db.collection("tasks").doc(id).update({
      status: status,
    });
    getTasks();
  };

  const deleteTask = async (id) => {
    if (window.confirm("¿Realmente deseas eliminar?")) {
      await db.collection("tasks").doc(id).delete();
    }
  };

  return (
    <div className="col-md-3 mt-5">
      <h4 className="bg-info p-2">{title}</h4>
      {tasks.map(
        (task) =>
          task.status === statusId && (
            console.log(task.status === statusId),
            <div className="card mb-2">
              <div class="card-body">
                <div key={task.id}>
                  <p>
                    {task.title} - {task.desc}
                  </p>

                  {task.status === 4 ? (
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="btn btn-danger text-white"
                    >
                      Eliminar
                    </button>
                  ) : (
                    <>
                      {task.status > 1 && (
                        <button
                          onClick={() => changeStatus(task.id, task.status - 1)}
                          className="btn btn-info text-dark"
                        >
                          Anterior
                        </button>
                      )}

                      <button
                        onClick={() => changeStatus(task.id, task.status + 1)}
                        className="btn btn-warning text-dark"
                      >
                        Terminada
                      </button>

                      <button
                        onClick={() => deleteTask(task.id)}
                        className="btn btn-danger text-white"
                      >
                        Eliminar
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default TaskStates;
