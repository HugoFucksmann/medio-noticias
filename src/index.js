import React from 'react';
import ReactDOM from 'react-dom';
import {Helmet} from "react-helmet";
import './index.css';
import App from './App';
ReactDOM.render(
  <React.StrictMode>
    <main>
      <Helmet>
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1"/>
      </Helmet>
       <App/> 
    </main>
  </React.StrictMode>,
  document.getElementById("root")
);

