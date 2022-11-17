import { useReducer } from "react";
import { useState } from "react";

const initialTodos = [
  { id: 1, title: "Task #1" },
  { id: 2, title: "Task #2" },
  { id: 3, title: "Task #3" },
];

const TYPES = {
  DELETE: "delete",
  ADD: "add",
  UPDATE: "update",
};

const reducer = (state, action) => {
  if (TYPES.DELETE === action.type) {
    return state.filter((todo) => todo.id !== action.payload);
  }
  if (TYPES.ADD === action.type) {
    return [...state, action.payload];
  }
  if (TYPES.UPDATE === action.type) {
    const todoEdit = action.payload 
    return state.map((todo) => (
      todo.id === todoEdit.id ? todoEdit : todo))
  }

  return state;
};

export const TodoAppReducer = () => {
  const [todos, todosDispatch] = useReducer(reducer, initialTodos);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: Date.now(), title: text };

    todosDispatch({
      type: "add",
      payload: newTodo,
    });
  };

  return (
    <>
      <h1>TodoAppReducer</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <h1>{todo.title}</h1>
              <button
                onClick={() =>
                  todosDispatch({
                    type: TYPES.DELETE,
                    payload: todo.id,
                  })
                }
              >
                Delete
              </button>
              <button
                onClick={() =>
                  todosDispatch({
                    type: TYPES.UPDATE,
                    payload: {...todo, title: text}, 
                  })
                }
              >
                Update
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
