import React, { useContext } from "react";
import { Button, Col, Container, Figure, Row, Media } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import {imagenUrl} from '../helpers/imagenUrl'
import BarraNav from "../shared/navbar";
import BarraTitulares from "../component/BarraTitulares";
import CardCarousel from "../component/CardCarousel";
import NotasFinal from "../component/NotasFinal";
import { NoticiasContext } from "../App";

function Noticia() {
  const noticias = useContext(NoticiasContext);
  const { id } = useParams();
  const nota = noticias.find((nota) => nota._id === id);
  
  return (
    <>
      <BarraNav />
      <Container>
        <BarraTitulares {...noticias} />
        <Row style={{ marginTop: "100px" }}>
          <Col sm={8}>
            <Nota {...nota} />
          </Col>
          <Col sm={4} >
            <ListaNotas />
          </Col>
        </Row>
        <CardCarousel {...noticias} />
        <NotasFinal {...noticias} />
      </Container>
    </>
  );
}

function Nota(nota) {
  const img = nota.imagen;
  const imagen = imagenUrl(img);
    return (
      <section style={{marginBottom: '80px'}}>
        <h1>{nota.titulo}</h1>
        <h5>{nota.subtitulo}</h5>
        <br />
        <Figure>
          <Figure.Image height={450} alt="171x180" src={imagen} />
          <Figure.Caption>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </Figure.Caption>
        </Figure>
        <br />
        <hr />
        <br />
        <p>{nota.texto}</p>
        <Link to={"/"}>
          <Button variant="outline-info">volver al inicio</Button>
        </Link>
      </section>
    );
}

function ListaNotas() {
   const noticiass = useContext(NoticiasContext);
   const noticias = noticiass.slice(0,6);
  return (
    <ul className="list-unstyled">
      {noticias.map((noticia) => {
        return (
          <Link
            key={noticia._id}
            to={`/noticia/${noticia._id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Lii {...noticia} />
          </Link>
        );
      })}
    </ul>
  );
}

function Lii(noticia) {
  const img = noticia.imagen;
  const imagen = imagenUrl(img);
  return (
    <>
      <Media as="li">
        <img
          width={90}
          height={90}
          className="mr-3"
          src={imagen}
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5>{noticia.titulo}</h5>
        </Media.Body>
      </Media>
      <br />
      <hr />
      <br />
    </>
  );
}

export default Noticia;
