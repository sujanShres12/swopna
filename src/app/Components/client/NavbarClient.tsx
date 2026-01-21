"use client";

import { Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function NavbarClient() {
  return (
    <>
      <Navbar.Brand href="#home" style={{color:'#620423'}}>Swopna Chitra</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Service</Nav.Link>
          <Nav.Link href="#aboutus">About</Nav.Link>
          <Nav.Link href="#link">Contact us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </>
  );
}
