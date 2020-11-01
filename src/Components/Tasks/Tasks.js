import React, { useState, useEffect } from "react";
import TaskForm from "../TaskForm/TaskForm";
import TaskStates from "../TaskStates/TaskStates";
import { db } from "../../firebase";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const status = [
    { title: "ToDo", statusId: 1 },
    { title: "In Progress", statusId: 2 },
    { title: "Done", statusId: 3 },
    { title: "Deleted", statusId: 4 },
  ];

  const getTasks = () => {
    db.collection("tasks").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setTasks(docs);
    });
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      <TaskForm getTasks={getTasks} />

      <div className="row">
        {status.map((state) => (
          <TaskStates
            key={state.statusId}
            tasks={tasks}
            title={state.title}
            getTasks={getTasks}
            statusId={state.statusId}
          />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
