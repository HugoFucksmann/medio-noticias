import React, { useContext } from "react";
import { CardDeck, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NoticiasContext } from "../App";

import {imagenUrl} from '../helpers/imagenUrl'
import "./styles.css";

function NotasFinal() {
  const noticias = useContext(NoticiasContext);
  return (
    <CardDeck style={{marginTop: '150px'}}>
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
      to={`/home/noticia/${noticia._id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <Card className="shadow cardFinal cel-txt effectUp" height={250}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>
            <p className="cel-txt">{noticia.titulo}</p>
          </Card.Title>
          <Card.Text>
            {noticia.subtitulo.substr(0, 130)}... <small> leer mas</small>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{noticia.fecha.slice(0, 10)}</small>
          <small className="text-info" style={{ float: "right" }}>
            {noticia.tipo}
          </small>
        </Card.Footer>
      </Card>
    </Link>
  );
}

export default NotasFinal;
