import React, { useState, useEffect } from "react";
import "./styles.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function Home() {
  const phrases = [
    "Explore everything that's Trending",
    "Explore Movies",
    "Explore TV Shows",
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <Container>
        <div className="welcome-heading pt-5 pb-2">
          <span>Welcome to TV Trends</span>
        </div>
        <div className="welcome-content">
          <span className="phrase-transition">
            {phrases[currentPhraseIndex]}
          </span>
        </div>
        <div className="mt-5 pt-5">
          <div>
            <Link to="/movies">
              <Button
                className="explore-movies"
                size="lg"
                variant="danger"
                active
              >
                Explore Movies
              </Button>
            </Link>
          </div>
          <div className="mt-5">
            <Link to="/tvshows">
              <Button
                className="explore-tvshows"
                size="lg"
                variant="primary"
                active
              >
                Explore TvShows
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
