import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import { Carousel, Col, Row } from "react-bootstrap";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

function LikedPage({ likedMovies, handleLike, setLikedMovies }) {
  const handleClearLiked = () => {
    setLikedMovies([]);
    localStorage.removeItem("likedMovies");
    setActivePage(0); // Reset to the first page when clearing liked movies
  };

  const itemsPerPage = 4;
  const [activePage, setActivePage] = useState(0);

  const totalItems = likedMovies.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    // Ensure that activePage is valid after likedMovies change
    if (totalPages > 0 && activePage >= totalPages) {
      setActivePage(totalPages - 1);
    }
  }, [likedMovies, activePage, totalPages]);

  const handleNext = () => {
    setActivePage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrev = () => {
    setActivePage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
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
        {likedMovies && Array.isArray(likedMovies) && likedMovies.length > 0 ? (
          <Carousel
            activeIndex={activePage}
            onSelect={() => {}}
            indicators={false}
            controls={false}
          >
            {[...Array(totalPages)].map((_, pageIndex) => (
              <Carousel.Item key={pageIndex}>
                <Row xs={1} md={2} lg={3} xl={3} xxl={4} className="g-4">
                  {likedMovies
                    .slice(
                      pageIndex * itemsPerPage,
                      pageIndex * itemsPerPage + itemsPerPage
                    )
                    .map((movie) => (
                      <Col key={movie.id}>
                        <MovieCard movie={movie} handleLike={handleLike} />
                      </Col>
                    ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <div className="d-flex justify-content-center align-items-center mt-5">
            <h1 style={{ color: "#CE3B3B" }} className="filter-container">
              List is empty <span style={{ color: "black" }}>😢</span>
            </h1>
          </div>
        )}
        {totalPages > 1 && (
          <div
            style={{ color: "#CE3B3B", fontSize: "1.5rem" }}
            className="d-flex justify-content-between mt-3 "
          >
            <Button
              variant="danger"
              onClick={handlePrev}
              disabled={activePage === 0}
            >
              <GrLinkPrevious size={25} />
            </Button>
            <Button
              variant="danger"
              onClick={handleNext}
              disabled={activePage === totalPages - 1}
            >
              <GrLinkNext size={25} />
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
}

export default LikedPage;
