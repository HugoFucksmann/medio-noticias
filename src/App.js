import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Principal from './pages/principal'
import BarraNav from "./shared/navbar";

function App() {
  return (
    <Router>
      <BarraNav />
      <Switch>
        <Route exact path="/">
          <Principal />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
