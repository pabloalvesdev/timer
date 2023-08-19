import React, { useState } from 'react';
import Watch from './Components/Watch';
import ITask from './Interfaces/ITask';
import Tasks from './Components/Tasks';
import { Col, Container, Row } from 'react-bootstrap';
import Themes from './Themes';
import { useAppContext } from './Context';

function App() {
  const { theme } = useAppContext();
  return (
    <Container>
      <br /><br />
      <Row>
        <Col>
          <Row>
            <Col style={{backgroundColor: Themes[theme].background.alternative, borderRadius: 10, display: 'flex', justifyContent: 'center', alignItems: 'center'}} lg={6} sm={12}>
              <Watch />
            </Col>
            <Col lg={6} sm={12}>
              <Tasks />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
