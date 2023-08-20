import React, { useEffect, useState } from 'react';
import Watch from './Components/Watch';
import ITask from './Interfaces/ITask';
import Tasks from './Components/Tasks';
import { Col, Container, Row } from 'react-bootstrap';
import Themes from './Themes';
import { useAppContext } from './Context';
import Layout from './Components/Layout';
import MobileLayout from './Components/Mobile';

function App() {
  const { theme } = useAppContext();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1000px)');

    const handleScreenChange = (event: any) => {
      setIsMobile(event.matches);
    };

    // Definir o estado inicial com base no tamanho da tela atual
    setIsMobile(mediaQuery.matches);

    // Adicionar um ouvinte para alterações no tamanho da tela
    mediaQuery.addListener(handleScreenChange);

    // Remover o ouvinte quando o componente for desmontado
    return () => {
      mediaQuery.removeListener(handleScreenChange);
    };
  }, []);

  return isMobile ? 
  (
    <MobileLayout>
      <Watch />
      <Tasks />
    </MobileLayout>
  ) : 
  (
    <Layout>
      <Watch />
      <Tasks />
    </Layout>
  )
  
}

export default App;
