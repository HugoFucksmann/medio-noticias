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
import ImportantNotas from "../component/importantNotas";
import WeatherCard from '../component/weatherCard';
import ByTema from '../component/byTema';
import AdsHorizontal from "../component/publis/ads1Horizontal";
import AdsHorizontal2 from '../component/publis/ads2Horizontal';
import Ads3Horizontal from "../component/publis/ads3Horizontal";
import Ads4Horizontal from "../component/publis/ads4Horizontal";
import AdsVertical from "../component/publis/ads1Vertical";
import AdsVertical2 from "../component/publis/ads2Vertical";
import Ads4Vertical from "../component/publis/ads4Vertical";
import VerticalNotas from '../component/verticalNotas'
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
        <Ads4Horizontal />
        <Row>
          <Col sm={8}>
            <NotaBySection tema="politica" />
            <AdsHorizontal />
            <NotaBySection tema="otra cosa" />
            <AdsHorizontal2 />
            <NotaBySection tema="covid" />
            <Ads3Horizontal />
            <NotaBySection tema="covid" />
          </Col>
          <Col sm={4}>
            <WeatherCard />
            <AdsVertical />
            <ImportantNotas />
            <Ads4Vertical />
            <AdsVertical2 />
          </Col>
        </Row>
        <AdsHorizontal />

        <NotasFinal data={[15, 23]} />
        <Ads3Horizontal />
        <NotasFinal data={[24, 32]} />
        <Ads4Horizontal />
        <NotasFinal data={[33]} />
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
          <NotaPrincipal data={[4, 8]} />
        </Col>
        <Col sm={4}>
          <VerticalNotas />
        </Col>
        <Col sm={12}>
          <Ads3Horizontal />
        </Col>
        <Col sm={12}>
          <Noticias data={[3, 9]} />
        </Col>
        <Col sm={12}>
          <Ads4Horizontal />
        </Col>
        <Col sm={12}>
          <Noticias data={[9, 15]} />
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
      <div>
        <Link>
          <img
            style={{ height: "50px", marginBottom: "20px" }}
            className="mx-auto d-block"
            src={logo2}
            alt="logo2"
          />
        </Link>
      </div>

      <div className="footerMedia">
        <SharedFooter />
      </div>
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