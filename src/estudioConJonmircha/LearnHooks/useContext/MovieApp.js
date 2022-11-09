import React from "react";
import { Navbar } from "./components/Navbar";
import { MovieList } from "./components/MovieList";
import { UserProvider } from "./contexts/userContext";
import { MovieProvider } from "./contexts/movieContext";

export function MovieApp() {
  return (
    <>
      <UserProvider>
        <MovieProvider>
          <Navbar />
          <MovieList />
        </MovieProvider>
      </UserProvider>
    </>
  );
}
