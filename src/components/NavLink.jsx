import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";

function NavLink() {
  return (
    <Navbar expand="lg" className="header">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <a href="#" className="btn nav-links lr">
              Login/Register
            </a>
            <a href="#" className="btn nav-links au">
              About Us
            </a>
            <a href="#" className="btn nav-links c">
              Contacts
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavLink;
