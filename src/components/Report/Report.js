import React from 'react';
import { Container, Row } from 'react-bootstrap';
import '../style.css';
import { useHistory } from 'react-router-dom';

const Report = () => {
  const history = useHistory();
  return (
    <div className="maincontent">
      <Container>
        <Row>
          <div className="page">
            <h1 className="heading">Violations</h1>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Report;
