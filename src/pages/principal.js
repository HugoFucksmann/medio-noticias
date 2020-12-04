import React from 'react'
import { Col, Container, Row } from "react-bootstrap";


import BarraTitulares from "../component/BarraTitulares";
import BarraNav from "../shared/navbar";
import NotasFinal from "../component/NotasFinal";
import NotaBySection from "../component/NotasBySection";
import Noticias from "../component/Noticias";
import NotaPrincipal from "../component/NotaPrincipal";
import { useRouteMatch, Route } from 'react-router-dom';
import Noticia from './noticia';
import ListaNotas from '../component/ListaNotas';
import Ads from '../component/ads'


function Principal() {
  const { path } = useRouteMatch();
  
  return (
    <>
      <BarraNav />
      <BarraTitulares />
      <Container fluid="lg">
        <Route path={path} component={Home} exact />
        <Route path={`${path}/noticia/:id`} component={Noticia} exact />
        <Ads />
        <NotaBySection />

        <NotasFinal />
      </Container>
    </>
  );
}

function Home() {
  return (
    <>
      <Row>
        <Col sm={8}>
          <NotaPrincipal />
        </Col>
        <Col sm={4} >
          <ListaNotas/>
        </Col>
        <Ads />
        <Col sm={12}>
          <Noticias />
        </Col>
      </Row>
    </>
  );
}

export default Principal;