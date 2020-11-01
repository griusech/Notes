import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import ReplyIcon from '@material-ui/icons/Reply';
import './TaskStates.css'
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
            <div className="card mb-2 text-left">
              <div class="card-body">
                <div key={task.id}>
                  <h5>
                    {task.title} 
                  </h5>
                  <p>
                  {task.desc}
                  </p>
                <div className="buttons-actions text-right">
                  {task.status === 4 ? (
                    <DeleteIcon
                      onClick={() => deleteTask(task.id)}
                      className="task-delted"
                    >
                      Eliminar
                    </DeleteIcon>
                  ) : (
                    <>
                      {task.status > 1 && (
                        <ReplyIcon
                          onClick={() => changeStatus(task.id, task.status - 1)}
                          className="reverse-task"
                        >
                          Anterior
                        </ReplyIcon>
                      )}

                      <DoneAllIcon
                        onClick={() => changeStatus(task.id, task.status + 1)}
                        className="done-task"
                      >
                        Terminada
                      </DoneAllIcon>

                      <DeleteIcon
                        onClick={() => deleteTask(task.id)}
                        className="task-delted"
                      >
                        Eliminar
                      </DeleteIcon>
                    </>
                  )}
                  
                </div>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default TaskStates;
