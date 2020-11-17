import React from "react";
import { Card } from "react-bootstrap";
import { useFetch } from '../helpers/useFetch';
import { imagenUrl } from '../helpers/imagenUrl';

const url = "http://localhost:3012/api/noticias";

function Noticias() {
  
  const { noticias } = useFetch(url);
  
  return (
      <BigList noticias={noticias} />
  );
}

const BigList = React.memo(( {noticias} ) => {
  
  if (noticias.length === 0) {
    return <div>loading...</div>;
  }
  return (
    <section className="products">
      { noticias.noticias.map((noticia) => {
        return (
          <SingleNoticia key={noticia._id} {...noticia} />
        )})
      }
    </section>
  );
});

const SingleNoticia = (noticia) => {
  const img = noticia.imagen;
  const imagen = imagenUrl(img);

  return (
    <Card className="product" >
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title> {noticia.titulo} </Card.Title>
        <Card.Text> {noticia.subtitulo} </Card.Text>
      </Card.Body>
    </Card>
  );
}


export default Noticias;