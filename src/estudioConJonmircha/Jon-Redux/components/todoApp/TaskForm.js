import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";

const TaskForm = () => {
  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
    completed: false,
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ ...task, id: uuid() }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title..."
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder={"Description..."}
          onChange={handleChange}
        ></textarea>
        <button>Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;


