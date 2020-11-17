import React from "react";
import { CardDeck, Card } from "react-bootstrap";

import {useFetch} from "../helpers/useFetch";
import {imagenUrl} from '../helpers/imagenUrl'

const url = "http://localhost:3012/api/noticias";

function NotasFinal() {
  const { noticias } = useFetch(url);
  if (noticias.length === 0) {
    return <div>loading...</div>;
  }
  return (
    <CardDeck>
      {noticias.noticias.map((noticia) => {
        return (
          <Cards key={noticia._id} {...noticia} />
        );
      })}
    </CardDeck>
  );
}

function Cards(noticia){
  const img = noticia.imagen;
  const imagen = imagenUrl(img);
  return (
    <Card className="shadow">
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{noticia.titulo}</Card.Title>
        <Card.Text>
          {noticia.subtitulo}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  );
}

export default NotasFinal;
