import React from "react";
import { Movie } from "./Movie";
import initialMovies from "../helpers/initialMovies";

export const MovieList = () => {
  console.log('MovieList')
  return (
    <div className="container mx-auto mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
        {initialMovies.map((movie) => (
          <div key={movie.id}>
            <Movie movie={movie}/>
          </div>
        ))}
      </div>
    </div>
  );
};
