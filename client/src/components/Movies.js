import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pagination from "react-bootstrap/Pagination";
import Spinner from "react-bootstrap/Spinner";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 4;
  const [loading, setLoading] = useState(true);

  const getMovies = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const response = await fetch(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=6f8ef2f5b313c678f8869b69affa2d31"
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="movies-container">
      <Container>
        <div>
          <h1 style={{ color: "#CE3B3B" }} className="py-5">
            Most Trending Movies Right Now
          </h1>
        </div>
        {loading ? (
          <Spinner
            animation="border"
            role="status"
            style={{
              color: "#CE3B3B",
              margin: "auto",
              display: "block",
              marginTop: "20%",
              marginBottom: "20%",
              width: "100px",
              height: "100px",
            }}
          />
        ) : (
          <Row xs={1} md={2} lg={3} xl={3} xxl={4} className="g-4">
            {currentMovies.map((movie) => (
              <Col key={movie.id}>
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
        )}
        <Pagination
          className="pagination-custom py-5 justify-content-center"
          var
        >
          {[...Array(Math.ceil(movies.length / moviesPerPage)).keys()].map(
            (number) => (
              <Pagination.Item
                key={number + 1}
                active={number + 1 === currentPage}
                onClick={() => paginate(number + 1)}
              >
                {number + 1}
              </Pagination.Item>
            )
          )}
        </Pagination>
      </Container>
    </div>
  );
}

export default Movies;
