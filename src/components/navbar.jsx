import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";
import "../styles/positioning.css";
import "../styles/colors.css";

function MyNavbar() {
  return (
    <Navbar variant="light" expand="lg">
      <Container>
        <Navbar.Brand className="display-2 circle" href="/">
          P
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="workexperience"> Work Experience</Nav.Link>
          <Nav.Link href="education"> Education</Nav.Link>
          <Nav.Link> Projects</Nav.Link>
          <Nav.Link>Resume</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
