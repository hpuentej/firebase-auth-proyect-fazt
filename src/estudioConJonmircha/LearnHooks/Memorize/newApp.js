import React, { useState, useEffect, useMemo, useCallback } from "react";
import { List } from "./list";

const initialUsers = [
  { id: 1, name: "Diana" },
  { id: 2, name: "Sofia" },
  { id: 3, name: "Danitza" },
  { id: 4, name: "Selena" },
];

export const NewApp = () => {
  const [users, setUsers] = useState(initialUsers);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  const handleAdd = () => {
    console.log("handleAdd");
    const newUser = {
      id: Date.now(),
      name: text,
    };
    setUsers([...users, newUser]);
  };

  const handleSearch = () => {
    console.log("handleSearch");
    setSearch(text);
  };

  const handleDelete = useCallback((userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  }, [users]);

  // const handleDelete = (userId) => {
  //   setUsers(users.filter((user) => user.id !== userId));
  // }

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      // console.log("filter process");
      return user.name.toLowerCase().includes(search.toLowerCase());
    });
  }, [search, users]);

  const printUsers = useCallback(() => {
    console.log("Changed users:", users);
  }, [users])

  useEffect(() => {
    // console.log("App Render");
  });

  useEffect(() => {
    // console.log("users changed");
    printUsers()
  }, [users, printUsers]);

  return (
    <div>
      <div className="flex justify-center mb-3">
        <input
          className="border border-gray-400 rounded-md p-2 mr-2"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className=" bg-fuchsia-400 hover:bg-fuchsia-300 p-2 
                    rounded-md mr-2 font-medium text-white
                    hover:text-fuchsia-800"
        >
          Search
        </button>
        <button
          className=" bg-fuchsia-400 hover:bg-fuchsia-300 p-2 rounded-md
                      font-medium text-white hover:text-fuchsia-800"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
      <List users={filteredUsers} handleDelete={handleDelete}/>
    </div>
  );
};
