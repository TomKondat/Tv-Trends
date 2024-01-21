import React from "react";
import "./styles.css";
import Button from "react-bootstrap/Button";

function Home() {
  return (
    <div className="home-container">
      <div className="welcome-heading">
        <span>Welcome to Movies-App</span>
      </div>
      <div className="welcome-content">
        <span>Here you can explore many movies</span>
      </div>
      <Button className="explore-button" variant="outline-light">
        Explore
      </Button>
    </div>
  );
}

export default Home;
