import React, { } from 'react'
import { Col, Container, Row } from "react-bootstrap";
import logo2 from '../assets/icon/logo2.svg'

import BarraTitulares from "../component/BarraTitulares";
import BarraNav from "../shared/navbar";
import NotasFinal from "../component/NotasFinal";
import NotaBySection from "../component/NotasBySection";
import Noticias from "../component/Noticias";
import NotaPrincipal from "../component/NotaPrincipal";
import { useRouteMatch, Route, Link } from 'react-router-dom';
import Noticia from './noticia';
import ListaNotas from '../component/ListaNotas';
import Ads from '../component/ads'
import Ads2 from "../component/ads2";
import WeatherCard from '../component/weatherCard';
import ByTema from '../component/byTema';

function Principal() {
  const { path } = useRouteMatch();
  return (
    <>
      <BarraNav />
      <BarraTitulares />

      <Container fluid="lg">
        <Route path={path} component={Home} exact />
        <Route path={`${path}/noticia/:id`} component={Noticia} exact />
        <Route path={`${path}/tipo/:tema`} component={ByTema} exact />
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
        <Footer />
      </Container>
    </>
  );
}

function Home() {
  return (
    <>
      <Row>
        <Col sm={8}>
          <NotaPrincipal data={[0, 6]} />
        </Col>
        <Col sm={4}>
          <ListaNotas />
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
    <footer
      style={{
        width: "100%",
        height: "100px",
        marginTop: "50px",
        backgroundColor: "#ebe8e8",
        boxShadow: "0px -5px 17px 0px rgba(50, 50, 50, 0.75)",
        padding: '15px'
      }}
    >
      <Link>
        <img className="mx-auto d-block" src={logo2} alt="logo2" />
      </Link>
    </footer>
  );
}



export default Principal;