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
              src={'https://placeholder.pics/svg/150x50/888888/EEE/Logo'}
              alt="logo"
              height="36"
            />
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
