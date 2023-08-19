import React, { useState } from 'react';
import Watch from './Components/Watch';
import ITask from './Interfaces/ITask';
import Tasks from './Components/Tasks';
import { Col, Container, Row } from 'react-bootstrap';
import Themes from './Themes';
import { useAppContext } from './Context';
import Layout from './Components/Layout';

function App() {
  const { theme } = useAppContext();
  return (
    <Layout>
      <Watch />
      <Tasks />
    </Layout>
  );
}

export default App;
