import React from "react";
import MovieCard from "./MovieCard";

const LikedPage = ({ likedMovies }) => {
  console.log("Liked Movies in LikedPage:", likedMovies);
  return (
    <div>
      <h1>Liked Movies</h1>
      <div>
        {likedMovies && Array.isArray(likedMovies) && likedMovies.length > 0 ? (
          likedMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p>No liked movies yet</p>
        )}
      </div>
    </div>
  );
};

export default LikedPage;
