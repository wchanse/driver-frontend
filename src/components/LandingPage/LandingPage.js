import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <h1 className="title">Welcome to Driver MVR</h1>
            <p className="subtitle">Motor Vehicle Record</p>
            {/* <div className="buttonContainer">
              <a href="/login">
                <Button size="lg" className="landingbutton">
                  Login
                </Button>
              </a>
              <a href="/register">
                <Button
                  size="lg"
                  className="landingbutton"
                  variant="outline-primary"
                >
                  Sign up
                </Button>
              </a>
            </div> */}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
