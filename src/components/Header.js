import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => (
  <Navbar bg="dark" variant="dark">
<Navbar.Brand as={Link} to="/">Korean Restaurant</Navbar.Brand>
<Nav className="mr-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
      <Nav.Link as={Link} to="/reservations">Reservation</Nav.Link>
    </Nav>
  </Navbar>
);

export default Header;