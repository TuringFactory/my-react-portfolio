import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/positioning.css";
import "../styles/colors.css";
import React, { Component } from "react";
import { motion } from "framer-motion/dist/framer-motion";

class MyNavbar extends Component {
  state = {};
  render() {
    return (
      <Navbar collapseOnSelect variant="light" expand="lg" className="space">
        <Container>
          <Navbar.Brand className="display-2 " href="#/">
            <motion.div whileHover={{ scale: 1.3 }}>Homepage</motion.div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link href="#/workexperience"> Work Experience</Nav.Link>
              <Nav.Link href="#/education"> Education</Nav.Link>
              <Navbar.Toggle
                onClick={downloadPDF}
                className="btn btn-outline-success  d-inline"
                type="submit"
              >
                Resume
              </Navbar.Toggle>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
const downloadPDF = () => {
  fetch(require("../assets/data/PaulNguyenResume.pdf")).then((response) => {
    response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "PaulNguyenResume.pdf";
      alink.click();
    });
  });
};

export default MyNavbar;
