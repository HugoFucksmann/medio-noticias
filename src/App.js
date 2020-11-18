import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from 'react-bootstrap';

import BarraNav from "./shared/navbar";
import Principal from './pages/principal'
import Noticia from "./pages/noticia";
import BarraTitulares from './component/BarraTitulares'
import NotasFinal from './component/NotasFinal'

import { useFetch } from "./helpers/useFetch";
const url = "http://localhost:3012/api/noticias";

function App() {
  const { noticias } = useFetch(url);
  if (noticias.length === 0) {
    return <div>loading...</div>;
  }
  return (
    <Router>
      <BarraNav />
      <BarraTitulares {...noticias} />
      <Container fluid="lg">
        <Switch>
          <Route exact path="/">
            <Principal {...noticias} />
          </Route>
          <Route path="/noticia/:id" children={<Noticia {...noticias} />} />
        </Switch>
        <br />
        <hr />
        <br />
        <NotasFinal {...noticias} />
      </Container>
    </Router>
  );
}

export default App;
