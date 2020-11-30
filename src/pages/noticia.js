import React, { useContext } from "react";
import { Button, Col, Container, Figure, Row, Media } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import {imagenUrl} from '../helpers/imagenUrl'
import { NoticiasContext } from "../App";

function Noticia() {
  const noticias = useContext(NoticiasContext);
  const { id } = useParams();
  const nota = noticias.find((nota) => nota._id === id);
 
  return (
    <>
        <Row style={{ marginTop: "75px" }}>
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
        <h6 className="text-info ">MEDIOS REGION | {nota.tipo.toUpperCase()}</h6>
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
        <h6 className="textoNota">{nota.subtitulo}</h6>
        <hr />
        <br />
        <p className="textoNota">{nota.texto}</p>
        <Link to={"/home"}>
          <Button variant="outline-info">volver al inicio</Button>
        </Link>
        <br />
        <br />
        <div class="sharethis-inline-share-buttons"></div>
        <br />
        {/** TWETTER **/}
        <Button variant="light">
          <a
            href="https://twitter.com/share?ref_src=twsrc%5Etfw"
            class="twitter-share-button"
            data-size="large"
            data-show-count="false"
          >
            Tweet
          </a>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
        </Button>

        <Button>
          <a href="whatsapp://send?text=texto%20con%20URL">whatsapp</a>
        </Button>
        <br />
        <br />
      </section>
    );
}

function ListaNotas() {
   const noticias = useContext(NoticiasContext);
   const noticiass = noticias.slice(0,6);
  return (
    <ul className="list-unstyled mt-4">
      {noticiass.map((noticia) => {
        return (
          <Link
            key={noticia._id}
            to={`/home/noticia/${noticia._id}`}
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
