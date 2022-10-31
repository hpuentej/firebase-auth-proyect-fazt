import React, { memo, useEffect } from "react";

export const Item = memo(({ user, handleDelete }) => {
  useEffect(() => {
    // console.log(`Item Render ${user.name}`);
  });

  return (
    <li className="flex ">
      <h1 className="mx-4 px-2">{user.name}</h1>
      <button className="bg-purple-400 hover:bg-purple-500 hover:text-purple-100 text-purple-900 rounded-md mr-80 px-2 mb-2" onClick={() => handleDelete(user.id)}>Delete</button>
    </li>
  );
});
