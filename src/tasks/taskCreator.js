import { useState } from "react";

export function TaskCreator({ createNewTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(task.trim() === "") return;
    createNewTask(task);
    setTask("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={task}
          placeholder="Type task to add"
          className="mr-4 py-2 pl-10 rounded-md text-slate-300 shadow-md placeholder-slate-300 text-medium ring-1 ring-slate-300
          focus:ring-2 focus:ring-emerald-500 focus:outline-none 
          bg-cyan-700
          focus:bg-transparent
          "
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="text-white bg-purple-400 py-1 px-2 rounded
                           mb-3 shadow-md
                           hover:bg-purple-300 
                           hover:text-purple-900
                           "
        >
          Add Task
        </button>
      </form>
    </>
  );
}
