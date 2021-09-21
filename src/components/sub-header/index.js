import React from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";

const SubHeader = () => {
  return (
    <>
      <Navbar bg="secondary" expand="md" sticky="top" className="border-bottom">
        <Container fluid>
          <Navbar.Brand role="button" className="head-title">
            Beyondlife.club
            <div className="sub-head-title">Powered by GuardianLink</div>
          </Navbar.Brand>

          <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="d-flex me-auto ms-auto">
                <Nav.Link href="#home">Menu Item</Nav.Link>
                <Nav.Link href="#link">Menu Item</Nav.Link>
                <Nav.Link href="#home">Menu Item</Nav.Link>
                <Nav.Link href="#link">Menu Item</Nav.Link>
              </Nav>

              <Nav></Nav>
            </Navbar.Collapse>
          </>
        </Container>
      </Navbar>
    </>
  );
};

export default SubHeader;
