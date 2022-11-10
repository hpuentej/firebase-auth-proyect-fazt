import React from "react";
import { useContext } from "react";
import UserContext from "../contexts/userContext";

export const Movie = ({ movie }) => {

  const {user, toggleFavoriteMovie} = useContext(UserContext)

  const imgStyles = {
    height: "16.25rem",
    width: "100%",
    objectFit: "cover",
    objectPosition: "left",
  }; 

  const isFavorite = user && user.favoriteMovies.includes(movie.id)

  return (
    <div className="px-2 ">
      <img
        src={movie.imageUrl}
        alt={movie.title}
        className=""
        style={imgStyles}
      />
      <div className="">
        <h1 className="mb-1">{movie.title}</h1>
        <button
          className={`px-2 py-1 rounded-md 
          ${
            isFavorite
              ? "bg-green-500 text-white"
              : "outline outline-1 outline-sky-500 text-sky-500"
          }`}
          onClick={() => toggleFavoriteMovie(movie.id)}
        >
          {isFavorite ? "Dismiss ?" : "Add to favorites"}
        </button>
      </div>
    </div>
  );
};
