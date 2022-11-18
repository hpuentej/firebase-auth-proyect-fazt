// import { useSelector } from "react-redux";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const TodoApp = () => {  

  return (
    <div>
      <h1>TodoApp</h1>
      <TaskForm/>
      <TaskList/>
    </div>
  );
}

export default TodoApp;
