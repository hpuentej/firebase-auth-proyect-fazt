import { useSelector } from "react-redux";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const TodoApp = () => {

  const taskState = useSelector((state) => state.tasks);
  console.log(taskState);

  return (
    <div>
      <h1>TodoApp</h1>
      <TaskForm/>
      <TaskList/>
    </div>
  );
}

export default TodoApp;
