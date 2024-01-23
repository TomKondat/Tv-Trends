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
        <Button className="explore-button" variant="outline-light">
          Explore Movies
        </Button>
      </Link>
      <Link to="/movies">
        <Button className="explore-button" variant="outline-light">
          Explore TV Shows
        </Button>
      </Link>
    </div>
  );
}

export default Home;
