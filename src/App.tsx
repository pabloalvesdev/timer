import React, { useState } from 'react';
import Watch from './Components/Watch';
import ITask from './Interfaces/ITask';
import Tasks from './Components/Tasks';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  
  return (
    <Container>
      <br /><br />
      <Row xs={12}>
        <Col />
        <Col md={12} lg={8}>
          <Row>
            <Col sm={12} md={6}>
              <Watch />
            </Col>
            <Col sm={12} md={6}>
              <Tasks />
            </Col>
          </Row>
        </Col>
        <Col/>
      </Row>
    </Container>
  );
}

export default App;
