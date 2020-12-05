import React, { useContext } from 'react'
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
import { NoticiasContext } from "../App";

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
        <NotaBySection tema="politica" />
        <NotaBySection tema="covid" />
        <NotaBySection tema="otra cosa" />
        <NotasFinal />
      </Container>
    </>
  );
}

function Home() {
  const data = [0,3];
  return (
    <>
      <Row>
        <Col sm={8}>
          <NotaPrincipal />
        </Col>
        <Col sm={4}>
          <ListaNotas {...data} />
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