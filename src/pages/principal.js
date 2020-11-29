import React from 'react'
import { Container } from "react-bootstrap";


import BarraTitulares from "../component/BarraTitulares";
import BarraNav from "../shared/navbar";
import NotasFinal from "../component/NotasFinal";
import CardCarousel from "../component/CardCarousel";
import Noticias from "../component/Noticias";
import NotaPrincipal from "../component/NotaPrincipal";
import { useRouteMatch, Route, Switch } from 'react-router-dom';
import Noticia from './noticia';



function Principal() {
  const { path } = useRouteMatch();
  
  return (
    <>
      <BarraNav />
      <BarraTitulares />
      <Container fluid="lg">
        <Route path={path} component={Home} exact />
        <Route path={`${path}/noticia/:id`} component={Noticia} exact />
        <CardCarousel />
        <NotasFinal />
      </Container>
    </>
  );
}

function Home() {
  return (
    <section>
      <NotaPrincipal />
      <Noticias />
    </section>
  );
}

export default Principal;