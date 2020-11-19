import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { imagenUrl } from '../helpers/imagenUrl';



function Noticias(noticias) {
  return <BigList {...noticias} />;
}

const BigList = (noticias) => {
  return (
    <section className="products">
      { noticias.noticias.map((noticia) => {
        return (
          <Link to={`/noticia/${noticia._id}`} style={{ textDecoration: 'none',  color: 'black' }} >
            <SingleNoticia  key={noticia._id} {...noticia} />
          </Link>
        );})
      }
    </section>
  );
};

const SingleNoticia = (noticia) => {
  const img = noticia.imagen;
  const imagen = imagenUrl(img);

  return (
    <Card className="product" >
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title> {noticia.titulo} </Card.Title>
        <Card.Text> {noticia.subtitulo.substr(0, 180)}...  <small> leer mas</small> </Card.Text>
      </Card.Body>
    </Card>
  );
}


export default Noticias;