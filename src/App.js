import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from 'react-bootstrap';

import BarraNav from "./shared/navbar";
import Principal from './pages/principal'
import Noticia from "./pages/noticia";
import BarraTitulares from './component/BarraTitulares'
import NotasFinal from './component/NotasFinal'


function App() {
  return (
    <Router>
      <BarraNav />
      <BarraTitulares />
      <Container fluid="lg">
        <Switch>
          <Route exact path="/">
            <Principal />
          </Route>

          <Route exact path="/noticia">
            <Noticia />
          </Route>
        </Switch>
        <br />
        <hr />
        <br />
        <NotasFinal />
      </Container>
    </Router>
  );
}

export default App;
