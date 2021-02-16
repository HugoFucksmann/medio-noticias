import React, { } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import {  Spinner } from 'react-bootstrap';
import Principal from './pages/principal'
import ScrollToTop from "./helpers/scrollTop"; 
import Login from './pages/login';
import { useFetch } from "./helpers/useFetch";
import Error404 from './pages/404';
import ProtectedRoute from './helpers/protectedRoute';
import Form from './pages/form';
import AdsHorizontal from './component/adsHorizontal';

// "#f5f5f5 fondo tarjetas
// box-shadow:         7px 7px 5px 0px rgba(50, 50, 50, 0.75);

const url = `${process.env.REACT_APP_URL}/noticias`;
const urlpubli = `${process.env.REACT_APP_URL}/publicidad`;
export const NoticiasContext = React.createContext();

function App() {

  const publicidad = useFetch(urlpubli);
  const { data } = useFetch(url);
 
   
  if (data.length === 0 ) { 
    console.log('cargando');
    return (
        <Spinner variant="info" animation="border" role="status" style={{ margin: '20% 40%', fontSize: '400%',width: '100px', height: '100px' }}>
          <span className="sr-only">Loading...</span>
        </Spinner>
    );
  }
  
  const noticias = data.noticias.filter( noticias => noticias._id).reverse();
  const publi = publicidad.data.publi
  const total = data.total
  return (
    <NoticiasContext.Provider value={{ noticias, publi, total }}>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/home" component={Principal} />
          <Redirect exact from="/" to="/home" />
          <Route exact path="/logg" component={Login} />
          <ProtectedRoute exact path="/form" component={Form} />
          <Route path="*" component={Error404} />
        </Switch>
      </Router>
    </NoticiasContext.Provider>
  );
}

export default App;
