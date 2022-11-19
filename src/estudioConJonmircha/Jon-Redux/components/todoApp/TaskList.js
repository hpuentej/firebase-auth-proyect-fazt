import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../../features/tasks/taskSlice";
import { Link } from "react-router-dom";

const TaskList = () => {
  // const dispatch = useDispatch();
  const tasksState = useSelector((state) => state.tasks.value);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  // const handleEdit = (id) => {
  //   dispatch(editTask(id));
  // };

  return (
    <div>
      <header>
        <h1>Tasks {tasksState.length}</h1>
        <Link to="create-task">
          <button>Create Task</button>
        </Link>
      </header>
      <ul>
        {tasksState.map((task) => (
          <li key={task.id}>
            <h1> {task.title} </h1>
            <p> {task.description}</p>
            <Link to={`edit-task/${task.id}`}>
              {/* <button onClick={() => handleEdit(task.id)}>Edit</button> */}
              <button>Edit</button>
            </Link>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
