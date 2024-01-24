import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark text-white ">
      <Container>
        <Row>
          <Col md={12} className="text-center mt-3">
            <div style={{ fontSize: 25, marginBottom: 10 }}>
              <Link to="/">
                <img
                  src="https://www.freeiconspng.com/thumbs/popcorn-png/popcorn-png-16.png"
                  alt="Home"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />
              </Link>
              &nbsp; © 2024 Tom Kondat. All rights reserved. &nbsp;
              <Link to="/">
                <img
                  src="https://www.freeiconspng.com/thumbs/popcorn-png/popcorn-png-16.png"
                  alt="Home"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />
              </Link>
            </div>
            <p>
              <a
                href="https://www.linkedin.com/in/tom-kondat/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: 10 }}
              >
                <FaLinkedin size={35} />
              </a>
              <a
                href="https://github.com/TomKondat"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: 10 }}
              >
                <FaGithub size={35} />
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
