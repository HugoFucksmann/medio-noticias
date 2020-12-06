import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet, HelmetProvider } from "react-helmet-async";
import './index.css';
import App from './App';

ReactDOM.render(
  <HelmetProvider>
    <main>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&family=Roboto+Slab&display=swap"
          rel="stylesheet"
        />
        
      </Helmet>
      <App />
    </main>
  </HelmetProvider>,

  document.getElementById("root")
);

