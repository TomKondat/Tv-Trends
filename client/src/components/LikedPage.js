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
          variant="danger"
          onClick={handleClearLiked}
          disabled={likedMovies.length === 0}
        >
          Clear all liked movies
        </Button>
        <div>
          {likedMovies &&
          Array.isArray(likedMovies) &&
          likedMovies.length > 0 ? (
            likedMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} handleLike={handleLike} />
            ))
          ) : (
            <h1 style={{ color: "#CE3B3B" }} className="py-5">
              No liked movies yet
            </h1>
          )}
        </div>
      </Container>
    </div>
  );
}

export default LikedPage;
