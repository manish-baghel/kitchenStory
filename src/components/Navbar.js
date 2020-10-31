import React from "react";
import {connect} from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import {userActions} from "../actions/userActions";

const AppNavbar = (props) => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Kitchen Story</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Manage Food Items" id="basic-nav-dropdown">
              <NavDropdown.Item href="/manage/create">Add Food Item</NavDropdown.Item>
              <NavDropdown.Item href="/manage/delete">Delete Food Item</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href={`${process.env.SERVER_URL}`}>API</Nav.Link>
            {props.currentUser.user ? (
              <Nav.Link onClick={() => props.logout()}>Logout</Nav.Link>
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

const mapStateToProps = (state) => ({currentUser: state.authentication});
const actionCreators = {
  logout: userActions.logout,
};
export default connect(mapStateToProps, actionCreators)(AppNavbar);
