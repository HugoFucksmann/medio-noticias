import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Spinner } from 'react-bootstrap';

import BarraNav from "./shared/navbar";
import Principal from './pages/principal'
import Noticia from "./pages/noticia";
import BarraTitulares from './component/BarraTitulares'
import NotasFinal from './component/NotasFinal'
import CardCarousel from './component/CardCarousel';
import { useFetch } from "./helpers/useFetch";

const url = process.env.REACT_APP_URL;
console.log(url);
function App() {
  
  const { noticias } = useFetch(url);
  if (noticias.length === 0) {
    return (
      <Container>
        <Spinner variant="info" animation="border" role="status" style={{ margin: '20% 40%', fontSize: '400%',width: '100px', height: '100px' }}>
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Container>
    );
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
        <CardCarousel {...noticias} />
        <br />
        <hr />

        <NotasFinal {...noticias} />
      </Container>
    </Router>
  );
}

export default App;
