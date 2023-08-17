import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import GlobalStyles from './Styles/GlobalStyles';
import AppContextProvider from './Context';
import AppTemplate from './Template';
import Dialog from './Components/Dialog';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <AppTemplate>
        <GlobalStyles />
        <Dialog />
        <App />
      </AppTemplate>
    </AppContextProvider>
  </React.StrictMode>
);