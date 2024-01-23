import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function TvShows() {
  const [tvShows, setTvShows] = useState([]);

  const getTvShows = async () => {
    fetch(
      "https://api.themoviedb.org/3/trending/tv/day?api_key=6f8ef2f5b313c678f8869b69affa2d31"
    )
      .then((res) => res.json())
      .then((data) => setTvShows(data.results));
  };

  useEffect(() => {
    getTvShows();
  }, []);

  console.log(tvShows);

  return (
    <div className="movies-container">
      {tvShows.map((tv) => (
        <MovieCard key={tv.id} movie={tv} />
      ))}
    </div>
  );
}

export default TvShows;
