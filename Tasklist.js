import React, { useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="container">
      <h3>Tasks</h3>
      <form onSubmit={addTask}>
        <input value={task} onChange={(e) => setTask(e.target.value)} placeholder="Add a task..." />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasks.map(t => (
          <li key={t.id} className={t.completed ? "done" : ""}>
            <span onClick={() => toggleTask(t.id)}>{t.text}</span>
            <button onClick={() => deleteTask(t.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
