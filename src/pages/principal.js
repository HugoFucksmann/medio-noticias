import React, { useContext } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import logo2 from '../assets/icon/logo2.svg'
import toTop from "../assets/icon/toTop.png";
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
import VerticalNotas from '../component/verticalNotas';
import { NoticiasContext } from "../App";
import {
  TwitterShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
} from "react-share";

function Principal() {
  const { noticias } = useContext(NoticiasContext);
  const { path } = useRouteMatch();
  const temas = Object.values(noticias).reduce(
    (r, i) => (!~r.indexOf(i.tema) ? (r.push(i.tema), r) : r),
    []
  );

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
            {temas.map((tema) => {
              return (
                <>
                  <NotaBySection tema={tema} />
                  <AdsHorizontal />
                </>
              );
            })}
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
      <Footer temas={temas} />
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

function Footer({temas}){
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
      <div className="row text-center">
        <div className="col">
          <b style={{ fontSize: "14px" }}>Secciones</b>
          <ListGroup variant="flush">
            {temas.map((tema) => {
              return (
                <ListGroup.Item
                  className="bg-transparent"
                  style={{ fontSize: "10px", marginTop: '-5px' }}
                >
                  <Link to={`/home/tipo/${tema}`}>{tema}</Link>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </div>
        <div className="col">
          <Link>
            <img
              style={{ height: "50px", marginBottom: "30px" }}
              className="mx-auto d-block"
              src={logo2}
              alt="logo2"
            />
          </Link>
          <Link>
            <img src={toTop} style={{ height: "25px" }} />
            <p style={{ fontSize: "14px" }}>Volver al inicio</p>
          </Link>
        </div>
        <div className="col">
          <SharedFooter />
        </div>
      </div>
    </footer>
  );
}

const SharedFooter = () => {



  return (
    <div className="float-right" style={{ marginTop: "20px" }}>
      <b>Compartir</b>
      <FacebookShareButton
        url={window.location.href}
        title={"https://medio-noticias.herokuapp.com/home"}
      >
        <FacebookIcon size={30} round={true} className="ml-3" />
      </FacebookShareButton>
      <TwitterShareButton
        url={window.location.href}
        title={"https://medio-noticias.herokuapp.com/home"}
      >
        <TwitterIcon size={30} round={true} className="ml-3" />
      </TwitterShareButton>
      <WhatsappShareButton
        url={window.location.href}
        title={"https://medio-noticias.herokuapp.com/home"}
      >
        <WhatsappIcon size={30} round={true} className="ml-3" />
      </WhatsappShareButton>
      <br />
      <div className="mt-4">
        <small>
          desarrollo y diseño:{" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/hugo-fucksmann-5422181b1/"
          >
            HugoDev_
          </a>
        </small>
      </div>
    </div>
  );
}

export default Principal;