import React, { useContext } from "react";
import { CardDeck, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NoticiasContext } from "../App";

import {imagenUrl} from '../helpers/imagenUrl'
import "./styles.css";

function NotasFinal() {
  const {noticias} = useContext(NoticiasContext);
  
  return (
    <CardDeck className="mt-3">
      {noticias.slice(0,8).map((noticia) => {
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
      to={`/home/noticia/${noticia._id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <Card className="shadow cardFinal cel-txt mb-3" style={{ minHeight: "400px" }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>
            <small className="cel-txt">{noticia.titulo.substr(0,77)}...</small>
          </Card.Title>
          <Card.Text>
            {noticia.subtitulo.substr(0, 130)}... <small> leer mas</small>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{noticia.fecha.slice(0, 10)}</small>
          <small className="text-info" style={{ float: "right" }}>
            {noticia.tema}
          </small>
        </Card.Footer>
      </Card>
    </Link>
  );
}

export default NotasFinal;
