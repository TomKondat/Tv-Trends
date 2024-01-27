import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import "./styles.css";
import { IoMdStar } from "react-icons/io";

function MovieCard({ movie }) {
  const title = movie.title || movie.name;
  const release_date = movie.release_date || movie.first_air_date;
  const [showOverview, setShowOverview] = useState(false);

  const handleTrailer = () => {
    const searchTerm = `${title} trailer`;
    const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
      searchTerm
    )}`;
    window.open(youtubeSearchUrl, "_blank");
  };

  const handleOverview = () => {
    setShowOverview(!showOverview);
  };

  const popover = (
    <Popover id="popover-basic" className="overview-popover">
      <Popover.Header as="h3">{title} Overview</Popover.Header>

      <Popover.Body style={{ minHeight: "18rem" }}>
        {movie.overview}
      </Popover.Body>
      <Popover.Body>{movie.adult}</Popover.Body>
      <Popover.Body>
        <strong>Release Date:</strong> &nbsp;
        {new Date(release_date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </Popover.Body>
    </Popover>
  );

  return (
    <Card className="card-hover-animation" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <Card.Body style={{ backgroundColor: "black" }}>
        <Card.Title style={{ color: "white" }}>{title}</Card.Title>
        <Card.Text style={{ color: "white" }}>
          Rating: {(movie.vote_average / 2).toFixed(1)}&nbsp;
          <IoMdStar color="yellow" size={23} style={{ marginBottom: "2px" }} />
          &nbsp; ({movie.vote_count} Votes)
        </Card.Text>

        <Button
          className="trailer-button"
          variant="danger"
          onClick={handleTrailer}
        >
          Watch Trailer
        </Button>
        <OverlayTrigger
          trigger="click"
          placement="top-end"
          show={showOverview}
          overlay={popover}
        >
          <Button
            className="overview-button"
            variant="secondary"
            style={{ marginLeft: "65px" }}
            onClick={handleOverview}
          >
            Overview
          </Button>
        </OverlayTrigger>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
