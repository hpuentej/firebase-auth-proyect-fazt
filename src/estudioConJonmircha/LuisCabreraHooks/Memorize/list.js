import React, { memo, useEffect } from "react";
import { Item } from "./item";

export const List = memo(({ users, handleDelete }) => {
  useEffect(() => {
    // console.log("List Render");
  });

  return (
    <ul>
      <div className="flex flex-col items-end">
        {users.map((user) => {
          return <Item key={user.id} user={user} handleDelete={handleDelete} />;
        })}
      </div>
    </ul>
  );
});
