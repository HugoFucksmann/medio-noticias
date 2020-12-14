import React, { PureComponent } from 'react'
import { Card } from 'react-bootstrap';
import {imagenUrl} from '../helpers/imagenUrl'

function SingleNoticia(noticia) {
  const img = noticia.imagen;
  const imagen = imagenUrl(img);

  return (
    <Card
      className="product shadow cel-txt"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <Card.Img
        variant="top"
        src={imagen}
        className=" realShadow"
        style={{ width: "92%", margin: "-15px auto 0", borderRadius: "20px" }}
      />
      <Card.Body>
        <b className="text-info">{noticia.tema}</b>
        <Card.Title>
          <p className="cel-txt">{noticia.titulo.substr(0, 88)}...</p>
        </Card.Title>
        <Card.Text>
          {noticia.subtitulo.substr(0, 150)}... <small> leer mas</small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SingleNoticia;