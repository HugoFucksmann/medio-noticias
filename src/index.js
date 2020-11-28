import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet, HelmetProvider } from "react-helmet-async";
import './index.css';
import App from './App';

//<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1"/>

ReactDOM.render(

    <HelmetProvider>
      <main>
        <Helmet>
          <meta
            name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1"
          />
        </Helmet>
        <App />
      </main>
    </HelmetProvider>,
 
  document.getElementById("root")
);

