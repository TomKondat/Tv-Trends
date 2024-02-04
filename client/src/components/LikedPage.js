import React from "react";
import MovieCard from "./MovieCard";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import { Col, Row } from "react-bootstrap";
function LikedPage({ likedMovies, handleLike, setLikedMovies }) {
  const handleClearLiked = () => {
    setLikedMovies([]);
    localStorage.removeItem("likedMovies");
  };

  return (
    <div className="liked-container">
      <Container>
        <h1 style={{ color: "#CE3B3B" }} className="py-5">
          Everything you've liked
        </h1>
        <div className="filter-container mb-4">
          <Button
            variant="secondary"
            onClick={handleClearLiked}
            disabled={likedMovies.length === 0}
          >
            {likedMovies.length === 0 ? "List is empty" : "Clear All"}
          </Button>
        </div>
        <div>
          {likedMovies &&
          Array.isArray(likedMovies) &&
          likedMovies.length > 0 ? (
            <Row xs={1} md={2} lg={3} xl={3} xxl={4} className="g-4">
              {likedMovies.map((movie) => (
                <Col key={movie.id}>
                  <MovieCard movie={movie} handleLike={handleLike} />
                </Col>
              ))}
            </Row>
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
