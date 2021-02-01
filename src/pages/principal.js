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
import WeatherCard from '../component/weatherCard';
import ByTema from '../component/byTema';
import AdsHorizontal2 from '../component/adsHorizontal2';
import AdsHorizontal from "../component/adsHorizontal";
import AdsVertical from "../component/adsVertical";
import AdsVertical2 from "../component/adsVertical2";
import FormFooter from '../component/formFooter';
import {
  TwitterShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
} from "react-share";

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

        <Row>
          <Col sm={8}>
            <NotaBySection tema="politica" />
            <AdsHorizontal />
            <NotaBySection tema="covid" />
            <AdsHorizontal2 />
            <NotaBySection tema="otra cosa" />
          </Col>
          <Col sm={4}>
            <WeatherCard />
            <AdsVertical />
            <div
              style={{ height: "500px", border: "1px solid", marginTop: 20 }}
            >
              <br />
              <b className="text-danger">
                elegir algun contenido para este bloque o colocar mas notas
              </b>
            </div>
            <AdsVertical2 />
          </Col>
        </Row>
        <AdsHorizontal />
        <div style={{ marginTop: 40 }}>
          <b className="text-danger">
            sugerir cantidad total de notas a mostar y cada cuanto intercalar
            una publicidad
          </b>
        </div>
        <NotasFinal />
      </Container>
      <Footer />
    </>
  );
}

function Home() {
  return (
    <>
      <Row>
        <Col sm={8}>
          <NotaPrincipal data={[0, 5]} />
        </Col>
        <Col sm={4}>
          <ListaNotas />
        </Col>
        <AdsHorizontal2 />
        <Col sm={12}>
          <div style={{ marginTop: 40, marginBottom: -40 }}>
            <b className="text-danger">
              sugerir cantidad total de notas a mostar y cada cuantas filas de 3
              notas quieren una publicidad
            </b>
          </div>
          <Noticias />
        </Col>
        <AdsHorizontal />
      </Row>
    </>
  );
}

function Footer(){
  return (
    <footer
      style={{
        width: "100%",
        marginTop: "40px",
        backgroundColor: "#ebe8e8",
        boxShadow: "0px -5px 17px 0px rgba(50, 50, 50, 0.75)",
        padding: "15px",
      }}
    >
      <Link>
        <img
          style={{ height: "50px", marginBottom: "20px" }}
          className="mx-auto d-block"
          src={logo2}
          alt="logo2"
        />
      </Link>
      <SharedFooter />
    </footer>
  );
}

const SharedFooter = () => {



  return (
    <div className="float-right" style={{ marginTop: "-50px" }}>
      <b>Compartir</b>
      <FacebookShareButton
        url={window.location.href}
        title={"https://medio-noticias.herokuapp.com/home"}
      >
        <FacebookIcon size={40} round={true} className="ml-3" />
      </FacebookShareButton>
      <TwitterShareButton
        url={window.location.href}
        title={"https://medio-noticias.herokuapp.com/home"}
      >
        <TwitterIcon size={40} round={true} className="ml-3" />
      </TwitterShareButton>
      <WhatsappShareButton
        url={window.location.href}
        title={"https://medio-noticias.herokuapp.com/home"}
      >
        <WhatsappIcon size={40} round={true} className="ml-3" />
      </WhatsappShareButton>
    </div>
  );
}



export default Principal;