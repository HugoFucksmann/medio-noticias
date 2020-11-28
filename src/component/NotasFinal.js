import React, { useContext } from "react";
import { CardDeck, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NoticiasContext } from "../App";

import {imagenUrl} from '../helpers/imagenUrl'
import "./styles.css";
function NotasFinal() {
  const noticias = useContext(NoticiasContext);
  return (
    <CardDeck >
      {noticias.map((noticia) => {
        return <Cards key={noticia._id} {...noticia}  />;
      })}
    </CardDeck>
  );
}

function Cards(noticia){
  const img = noticia.imagen;
  const imagen = imagenUrl(img);
  return (
    <Link
      to={`/noticia/${noticia._id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <Card
        className="shadow margA"
        height={250}
        style={{ maxWidth: "250px" }}
      >
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{noticia.titulo}</Card.Title>
          <Card.Text>{noticia.subtitulo.substr(0, 145)}...  <small> leer mas</small></Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </Link>
  );
}

export default NotasFinal;
