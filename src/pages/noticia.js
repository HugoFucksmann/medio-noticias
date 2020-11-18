import React from "react";
import { Button, Col, Figure, Row } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import {imagenUrl} from '../helpers/imagenUrl'

import ListaNotas from "../component/ListaNotas";

function Noticia(noticias) {
 
  const { id } = useParams();
  const nota = noticias.noticias.find( (nota) => nota._id === id )
  return (
    <Row style={{ marginTop: "100px" }}>
      <Col sm={8}>
        <Nota {...nota} />
      </Col>
      <Col sm={4} style={{ marginTop: "150px" }}>
        <ListaNotas {...noticias} />
      </Col>
    </Row>
  );
}

function Nota(nota) {
  const img = nota.imagen;
  const imagen = imagenUrl(img);
    return (
      <>
        <h1>{nota.titulo}</h1>
        <h3>{nota.subtitulo}</h3>
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
        <Link to={'/'}>
          <Button variant="outline-info">volver al inicio</Button>
        </Link>
      </>
    );
}

export default Noticia;
