import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function Movies() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=6f8ef2f5b313c678f8869b69affa2d31"
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);

  return (
    <div className="movies-container">
      <Container className="movies-container">
        <div>
          <h1 style={{ color: "#CE3B3B" }} className="py-5">
            Most Trending Movies
          </h1>
        </div>
        <Row xs={1} md={2} lg={3} xl={4} xxl={4} className="g-4">
          {movies.map((movie) => (
            <Col key={movie.id}>
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Movies;
