import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

const TaskForm = () => {
  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
    completed: false,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasksState = useSelector((state) => state.tasks.value);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (params.id) {
      const [taskFound] = tasksState.filter((task) => task.id === params.id);
      setTask(taskFound);
    }
  }, [params.id, tasksState]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      dispatch(editTask(task));
    } else {
      dispatch(addTask({...task, id: uuid() }));
    }
    navigate("/redux");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title..."
          value={task.title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder={"Description..."}
          value={task.description}
          onChange={handleChange}
        ></textarea>
        <button>Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
