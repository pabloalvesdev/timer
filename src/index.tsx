import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GlobalStyles from './Styles/GlobalStyles';
import AppContextProvider from './Context';
import AppTemplate from './Template';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <AppTemplate>
        <GlobalStyles />
        <App />
      </AppTemplate>
    </AppContextProvider>
  </React.StrictMode>
);