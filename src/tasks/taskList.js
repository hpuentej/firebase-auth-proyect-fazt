import { TaskDelete } from "./taskDelete";

export function TaskList({ taskItems, deleteTask}) {
  // const handleToggle = (task) => {
  //   toggleTask(task)
  // }

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
        {taskItems.map((task) => {
          return (
            <div key={task.id} className="flex justify-evenly my-3">
              <div className="my-auto">
                <input type="checkbox" defaultChecked={false}/>
                <span>{task.name}</span>
              </div>
              <TaskDelete
                task={task}
                taskItems={taskItems}
                deleteTask={deleteTask}
              />
            </div>
          );
        })}
      </ul>
    </>
  );
}

// onChange={(task) => handleToggle}

// checked={task.done}