import React, { useContext } from "react";
import { Button, Col, Row, Figure } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import {imagenUrl} from '../helpers/imagenUrl'
import { NoticiasContext } from "../App";
import ListaNotas from '../component/ListaNotas'
import {
  TwitterShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
} from "react-share";

function Noticia() {
  const noticias = useContext(NoticiasContext);
  const { id } = useParams();
  const nota = noticias.find((nota) => nota._id === id);
 
  return (
    <>
        <Row style={{ marginTop: "60px" }}>
          <Col sm={8}>
            <Nota {...nota} />
          </Col>
          <Col sm={4} >
            <ListaNotas />
          </Col>
        </Row>
    </>
  );
}

function Nota(nota) {
  const img = nota.imagen;
  const imagen = imagenUrl(img);
    return (
      <section>
        <h6 className="text-info ">
          MEDIOS REGION | {nota.tipo.toUpperCase()}
        </h6>
        <p>
          <b>{nota.fecha.slice(0, 10)}</b>
        </p>
        <h2 className="cel-txt">{nota.titulo}</h2>
        <br />
        <Figure>
          <Figure.Image height={450} alt="171x180" src={imagen} />
          <Figure.Caption>
            <p>{nota.pieDeFoto}</p>
          </Figure.Caption>
        </Figure>
        <h6 className="textoNota ">{nota.subtitulo}</h6>
        <hr />
        <p className="textoNota">{nota.texto}</p>
        <Link to={"/home"} className="mb-2 float-left">
          <Button variant="outline-info">volver al inicio</Button>
        </Link>

        <div className="float-right">
          <FacebookShareButton url={window.location.href} title={nota.titulo}>
            <FacebookIcon size={40} round={true} className="ml-3" />
          </FacebookShareButton>

          <TwitterShareButton url={window.location.href} title={nota.titulo}>
            <TwitterIcon size={40} round={true} className="ml-3" />
          </TwitterShareButton>

          <WhatsappShareButton url={window.location.href} title={nota.titulo}>
            <WhatsappIcon size={40} round={true} className="ml-3" />
          </WhatsappShareButton>
        </div>
      </section>
    );
}

export default Noticia;

