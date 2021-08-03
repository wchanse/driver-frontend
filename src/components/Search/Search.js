import React from 'react';
import { Container, Row } from 'react-bootstrap';
import '../style.css';

const Search = () => {
  return (
    <div className="maincontent">
      <Container>
        <Row>
          <div className="page">
            <h1 className="heading">Search</h1>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Search;
