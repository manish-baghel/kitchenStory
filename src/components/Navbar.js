import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const AppNavbar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Event Finder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Manage Events" id="basic-nav-dropdown">
              <NavDropdown.Item href="/manage/create">Create Event</NavDropdown.Item>
              <NavDropdown.Item href="/manage/delete">Delete Event</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href={`${process.env.SERVER_URL}`}>API</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default AppNavbar;
