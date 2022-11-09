import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { MovieList } from "./components/MovieList";
import UserContext from "./contexts/userContext";

// const defaultUser = {
//   id: 1,
//   name: "",
//   email: "algo@correo.pe",
//   favoriteMovie: [1, 2, 3],
// };

export function MovieApp() {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({
      id: 2,
      name: "Hans Puente",
      email: "hpuentej@uni.pe",
      favoriteMovie: [3, 4, 7],
    });
  };
    
  const logout = () => {
    setUser(null);
  };

  const data = { user , login, logout };

  return (
    <>
      <UserContext.Provider value={data}>
        <Navbar />
        <MovieList />
      </UserContext.Provider>
    </>
  );
}
