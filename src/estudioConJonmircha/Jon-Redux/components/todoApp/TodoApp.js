import { Routes, Route } from "react-router-dom";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const TodoApp = () => {
  return (
    <div>
      <h1>TodoApp</h1>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/create-task" element={<TaskForm />} />
        <Route path="/edit-task/:id" element={<TaskForm />} /> 
      </Routes>
    </div>
  );
};

export default TodoApp;
