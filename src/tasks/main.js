import { useEffect, useState } from "react";
import { TaskCreator } from "./taskCreator";
// import { Margenes } from "./basicCss";
import { TaskList } from "./taskList";

export function ToDo() {
  const defaultTasks = [
    { name: "Task 1", done: false, id: 1 },
    { name: "Task 2", done: false, id: 2 },
    { name: "Task 3", done: false, id: 3 },
  ];

  const [taskItems, SetTaskItems] = useState([]);


  // Create a new task
  function createNewTask(newTask) {
    const defaultTasks = [
      ...taskItems,
      { name: newTask, done: false, id: Date.now() },
    ];

    SetTaskItems(defaultTasks);
  }

  useEffect(() => {
    let data = localStorage.getItem("tareas");
    if (data) SetTaskItems(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(taskItems));
  }, [taskItems]);

  // Delete a task
  function deleteTask(task){
    const newTasks = taskItems.filter((item) => item.id !== task.id);
    SetTaskItems(newTasks);
  };  

  //Toggle a task

  function toggleTask(task){
    const toggle = taskItems.map(item => {
      const newTaskStatus = item.id === task.id?{...task, done: !item.done}: item
    return (newTaskStatus)
    })
    SetTaskItems(toggle)
  }
  
  return (
    <>
      {/* <Margenes /> */}
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-yellow-400 mb-5">
          Task for Today
        </h1>
        <TaskCreator createNewTask={createNewTask} />
        <TaskList defaultTasks={defaultTasks} taskItems={taskItems}
         deleteTask={deleteTask} toggleTask={toggleTask}/>
      </div>
    </>
  );
}

