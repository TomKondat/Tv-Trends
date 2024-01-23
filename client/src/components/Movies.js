import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function Movies() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=6f8ef2f5b313c678f8869b69affa2d31"
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Movies;
