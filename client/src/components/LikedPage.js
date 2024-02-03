import React from "react";
import MovieCard from "./MovieCard";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";

function LikedPage({ likedMovies, handleLike, setLikedMovies }) {
  const handleClearLiked = () => {
    setLikedMovies([]);
  };
  return (
    <div className="liked-container">
      <Container>
        <h1 style={{ color: "#CE3B3B" }} className="py-5">
          Everything you've liked
        </h1>
        <Button
          variant="secondary"
          onClick={handleClearLiked}
          disabled={likedMovies.length === 0}
          className="my-4"
        >
          {likedMovies.length === 0 ? "List is empty" : "Clear All"}
        </Button>
        <div>
          {likedMovies &&
          Array.isArray(likedMovies) &&
          likedMovies.length > 0 ? (
            likedMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} handleLike={handleLike} />
            ))
          ) : (
            <div className="d-flex justify-content-center align-items-center mt-5">
              <h1 style={{ color: "#CE3B3B" }} className="filter-container">
                List is empty <span style={{ color: "black" }}>😢</span>
              </h1>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

export default LikedPage;
