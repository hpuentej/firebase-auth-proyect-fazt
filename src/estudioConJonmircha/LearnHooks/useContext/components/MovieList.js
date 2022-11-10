import React, {useContext} from "react";
import { Movie } from "./Movie";
import MovieContext from "../contexts/movieContext";

export const MovieList = () => {
  const {movies} = useContext(MovieContext)
  return (
    <div className="container mx-auto mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
        {movies.map((movie) => (
          <div key={movie.id}>
            <Movie movie={movie}/>
          </div>
        ))}
      </div>
    </div>
  );
};
