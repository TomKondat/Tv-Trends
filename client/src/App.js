import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Movies from "./components/Movies";
import TvShows from "./components/TvShows";
import Footer from "./components/Footer";
import LikedPage from "./components/LikedPage";
import { useState } from "react";

function App() {
  const [likedMovies, setLikedMovies] = useState([]);
  const handleLike = (movie) => {
    const movieId = movie.id;

    if (likedMovies.some((likedMovie) => likedMovie.id === movieId)) {
      // If movie is already liked, remove it from the liked list
      setLikedMovies(
        likedMovies.filter((likedMovie) => likedMovie.id !== movieId)
      );
    } else {
      // If movie is not liked, add it to the liked list
      setLikedMovies([...likedMovies, movie]);
    }
  };
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/movies"
          element={<Movies handleLike={handleLike} likedMovies={likedMovies} />}
        />
        <Route path="/tvshows" element={<TvShows />} />
        <Route
          path="/likedpage"
          element={
            <LikedPage likedMovies={likedMovies} handleLike={handleLike} />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
