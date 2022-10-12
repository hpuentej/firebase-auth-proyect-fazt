import { useState } from "react";




export function ToDo() {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('tarea', task);
    alert(task)
    setTask(''); 
  }

  return (
    <>
      <h1 className="text-2xl font-bold text-yellow-400 mb-5">
        Task for Today
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          placeholder="Type task to add"
          className="mr-4 p-1 rounded text-black"
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="text-slate-300 bg-purple-400 p-1 rounded"
        >
          Add Task
        </button>
      </form>
    </>
  );
}
