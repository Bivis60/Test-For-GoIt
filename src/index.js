import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

const theme = {
  colors: {
    mainText: 'rgba(18, 20, 23, 1)',
    titleText: 'rgba(138, 138, 137, 1)',
    informText: 'rgba(18, 20, 23, 0.5)',
    secondaryText: 'rgba(18, 20, 23, 0.2)',
    modalSecondaryText: 'rgba(54, 53, 53, 1)',
    butonText: 'rgba(255, 255, 255, 1)',
    mainButonColor: 'rgba(52, 112, 255, 1)',
    accentButonColor: 'rgba(11, 68, 205, 1)',
    backGround: 'rgba(255, 255, 255, 1)',
    inputBackGround: 'rgba(247, 247, 251, 1)',
    elementColor: 'rgba(18, 20, 23, 0.1)',
  },

  radius: {
    mainRadius: '14px',
    butonRadius: '12px',
    modalRadius: '24px',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Test-For-GoIt">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
