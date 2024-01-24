import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./styles.css";

function MovieCard({ movie }) {
  const title = movie.title || movie.name;

  const handleTrailer = () => {
    const searchTerm = `${title} trailer`;
    const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
      searchTerm
    )}`;
    window.open(youtubeSearchUrl, "_blank");
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <Card.Body style={{ backgroundColor: "black" }}>
        <Card.Title style={{ color: "white" }}>{title}</Card.Title>
        <Card.Text style={{ color: "white" }}>
          Rating: {(movie.vote_average / 2).toFixed(1)} ({movie.vote_count}{" "}
          Votes)
        </Card.Text>
        <Button
          className="trailer-button"
          variant="danger"
          onClick={handleTrailer}
        >
          Watch Trailer
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
