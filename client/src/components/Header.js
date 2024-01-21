import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Moveis-App</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#movies">Movies</Nav.Link>
          <Nav.Link href="#series">Series</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
