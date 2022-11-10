import React, { useContext } from "react";
import UserContext from "../contexts/userContext";

export const Navbar = () => {
  
  const { user, login, logout } = useContext(UserContext);

  return (
    <nav className=" bg-slate-800 text-white p-3 mb-10">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl">{user ? `Hola ${user.name}` : "Bienvenid@"}</h1>
        {!user ? (
          <button className="bg-blue-500 px-2 py-1 rounded-md" onClick={login}>
            Iniciar sesión
          </button>
        ) : (
          <button className="bg-blue-500 px-2 py-1 rounded-md" onClick={logout}>
            Cerrar sesión
          </button>
        )}
      </div>
    </nav>
  );
};
