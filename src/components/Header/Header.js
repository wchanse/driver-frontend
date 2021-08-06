import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="#home">
            <img
              style={{ marginRight: '3' }}
              src={'logo.png'}
              alt="logo"
              height="36"
            />
            {'  '}
            Driver MVR
          </Navbar.Brand>
        </LinkContainer>
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link href="#features">Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/drivers">
            <Nav.Link href="#features">Drivers</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/search">
            <Nav.Link href="#features">Search</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
