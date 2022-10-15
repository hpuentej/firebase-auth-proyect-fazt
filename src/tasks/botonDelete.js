export function BotonDelete({ task, deleteTask }) {
  const handleDelete = () => {
    deleteTask(task)
  }

  return (
    <>
      <button
        onClick={handleDelete}
        className="bg-red-400 hover:bg-red-500 p-2
                  rounded-md text-white"
      >
        Delete Task
      </button>
    </>
  );
}