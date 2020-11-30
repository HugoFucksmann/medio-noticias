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
          <title>sss</title>
          <script type="text/javascript" src="https://platform-api.sharethis.com/js/sharethis.js#property=5fc49987e3acfa0012ca6b69&product=inline-share-buttons" async="async"></script>
        </Helmet>
        <App />
      </main>
    </HelmetProvider>,
 
  document.getElementById("root")
);

