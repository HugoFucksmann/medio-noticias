import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {  Spinner } from 'react-bootstrap';

import Principal from './pages/principal'
import ScrollToTop from "./helpers/scrollTop"; 
import Login from './pages/login';
import { useFetch } from "./helpers/useFetch";
import Error404 from './pages/404';
import ProtectedRoute from './helpers/protectedRoute'
import Noticia from './pages/noticia';
import Form from './pages/form'

const url = process.env.REACT_APP_URL_PROD;
console.log(url);
function App() {
  const  noticias = useFetch(url).noticias
  console.log(noticias);
  if (noticias.length === 0) {
    return (
        <Spinner variant="info" animation="border" role="status" style={{ margin: '20% 40%', fontSize: '400%',width: '100px', height: '100px' }}>
          <span className="sr-only">Loading...</span>
        </Spinner>
    );
  }
  return (
    <>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <Principal {...noticias} />
          </Route>

          <Route exact path="/noticia/:id">
            <Noticia {...noticias} />
          </Route>

          <Route path="/logg" component={Login} />

          
          <ProtectedRoute exact path="/form" component={Form} />

          <Route path="*" component={Error404} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
