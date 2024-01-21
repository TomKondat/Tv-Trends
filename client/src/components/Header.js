import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container className="d-flex justify-content-center align-items-center">
        <Navbar.Brand as={Link} to="/">
          <img
            alt=""
            src="https://www.freeiconspng.com/thumbs/popcorn-png/popcorn-png-16.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          &nbsp; <span style={{ color: "#CE3B3B" }}>M</span>ovies-
          <span style={{ color: "#CE3B3B" }}>A</span>pp &nbsp;
          <img
            alt=""
            src="https://www.freeiconspng.com/thumbs/popcorn-png/popcorn-png-16.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
