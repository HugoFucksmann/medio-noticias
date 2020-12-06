import React, { useContext } from 'react'
import { Col, Container, Row } from "react-bootstrap";
import logo2 from '../assets/icon/logo2.svg'

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
import Ads2 from "../component/ads2";
import { NoticiasContext } from "../App";
import WeatherCard from '../component/weatherCard';

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
        <Row>
          <Col sm={8}>
            <NotaBySection tema="politica" />
            <NotaBySection tema="covid" />
            <NotaBySection tema="otra cosa" />
          </Col>
          <Col sm={4}>
            <WeatherCard />
            <Ads2 />
          </Col>
        </Row>
        <Ads />
        <NotasFinal />
      </Container>
      <Footer />
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

function Footer(){
  return (
    <footer style={{ width: "100%", border: '1px solid' }}>
      <img style={{margin: '10px 40%'}} src={logo2} alt="logo2" />
    </footer>
  );
}

export default Principal;