import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Principal from './pages/principal'
import Noticia from "./pages/noticia";
import BarraNav from "./shared/navbar";
import BarraTitulares from './component/BarraTitulares'

function App() {
  return (
    <Router>
      <BarraNav />
      <BarraTitulares />
      <Switch>
        <Route exact path="/">
          <Principal />
        </Route>
        <Route exact path="/noticia">
          <Noticia />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
