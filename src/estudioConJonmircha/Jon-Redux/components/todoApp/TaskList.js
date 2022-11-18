import { useSelector, useDispatch } from "react-redux";
import { deleteTask  } from "../../features/tasks/taskSlice"

const TaskList = () => {
  // const dispatch = useDispatch();
  const tasksState = useSelector((state) => state.tasks.value);
  const dispatch = useDispatch();  

  const handleDelete = (id) => {
    const index = tasksState.findIndex((task) => task.id === id);
    dispatch(deleteTask(index));
  }

  return (
    <div>
      <h1>TaskList</h1>
      <ul>
        {tasksState.map((task) => (
          <li key={task.id}>
            <h1> {task.title} </h1>
            <p> {task.description}</p>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
