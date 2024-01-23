import React from "react";
import "./styles.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <div className="welcome-heading">
        <span>
          Welcome to <span style={{ color: "#CE3B3B" }}>T</span>V{" "}
          <span style={{ color: "#CE3B3B" }}>T</span>rends
        </span>
      </div>
      <div className="welcome-content">
        <span>
          Explore everything that's{" "}
          <span style={{ color: "#CE3B3B", fontWeight: "bold" }}>Trending</span>
        </span>
      </div>
      <Link to="/movies">
        <Button className="explore-movies" size="lg" variant="dark" active>
          Explore Movies
        </Button>
      </Link>
      <Link to="/tvshows">
        <Button className="explore-tvshows" size="lg" rounded variant="dark">
          Explore TV Shows
        </Button>
      </Link>
      <div></div>
    </div>
  );
}

export default Home;
