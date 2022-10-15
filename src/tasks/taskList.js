import { BotonDelete } from "./botonDelete";

export function TaskList({ taskItems, deleteTask, defaultTasks, toggleTask }) {
  const handleChekbox = (task) => {
    toggleTask(task);
  };

  const defaultTareas = defaultTasks.map((task) => {
    return (
      <li key={task.id} className="flex justify-evenly my-3">
        <div className="my-auto">
          <input type="checkbox" defaultChecked={false} />
          <span>{task.name}</span>
        </div>
        <BotonDelete
          task={task}
          taskItems={taskItems}
          deleteTask={deleteTask}
        />
      </li>
    );
  });

  return (
    <>
      <ul
        className="flex flex-col self-center bg-cyan-200 w-72
                   rounded-md outline-none shadow-md hover:outline-amber-300
                   hover:outline-1 hover:outline-offset-0 
                   justify-evenly mb-4 text-purple-700 shadow-yellow-200
                   pt-1 pb-2
                  "
      >
        {taskItems.length ? (
          taskItems.map((task) => {
            return (
              <li key={task.id} className="flex justify-between mx-2 my-3">
                <div className="my-auto">
                  <input
                    type="checkbox"
                    checked={task.done}
                    className="mr-2"
                    onChange={() => handleChekbox(task)}
                  />
                  <span>{task.name}</span>
                </div>
                <BotonDelete
                  task={task}
                  taskItems={taskItems}
                  deleteTask={deleteTask}
                />
              </li>
            );
          })
        ) : (
          <div>
            <h1>Tasks de ejemplo. Agregue sus propias tareas</h1>
            <ul>{defaultTareas}</ul>
          </div>
        )}
      </ul>
    </>
  );
}
