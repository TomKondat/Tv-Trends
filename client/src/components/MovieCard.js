import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import "./styles.css";
import { IoMdStar } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";

function MovieCard({ movie, handleLike }) {
  const title = movie.title || movie.name;
  const release_date = movie.release_date || movie.first_air_date;
  const [showOverview, setShowOverview] = useState(false);
  const [like, setLike] = useState(false);
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
      <Popover.Header
        as="h3"
        className="d-flex justify-content-between align-items-center "
      >
        {title}
        <Button variant="link" onClick={handleOverview}>
          <IoClose style={{ color: "#CE3B3B" }} />
        </Button>
      </Popover.Header>

      <Popover.Body style={{ minHeight: "18rem" }}>
        {movie.overview}
      </Popover.Body>
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
      />
      <Card.Body style={{ backgroundColor: "black" }}>
        <Card.Title
          className="d-flex justify-content-between align-items-center "
          style={{ color: "white" }}
        >
          {title}
          <span
            className="heart-button"
            onClick={() => {
              handleLike(movie);
              setLike(!like);
            }}
          >
            <FaHeart size={25} color={like ? "#CE3B3B" : "grey"} />
          </span>
        </Card.Title>
        <Card.Text style={{ color: "white" }}>
          Rating: {(movie.vote_average / 2).toFixed(1)}&nbsp;
          <IoMdStar color="yellow" size={23} style={{ marginBottom: "2px" }} />
          &nbsp; ({movie.vote_count} Votes)
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center ">
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
              onClick={handleOverview}
            >
              Overview
            </Button>
          </OverlayTrigger>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
