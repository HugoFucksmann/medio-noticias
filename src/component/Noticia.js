import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useFetch } from '../helpers/useFetch';
import fotito from "../assets/d1.jpg";

const url = "http://localhost:3012/api/noticias";

function Noticia() {

  const {loading, noticias} = useFetch(url);
  const noticiass = noticias.noticias;
  /* console.log(noticiass);
  console.log(noticias.noticias.map((noticia) => noticia.texto)); */
  return (
      <BigList noticias={noticias} />
  );
}

const BigList = ( {noticias} ) => {
 
  console.log(noticias.noticias.map((noticia) => noticia.texto));
  return (
    <section className="products">
      { noticias.noticias.map((noticia) => {
        return (
          <SingleNoticia key={noticia.id} {...noticia} />
        )})
      }
    </section>
  );
};

const SingleNoticia = (noticia) => {
  const imagen = noticia.imagen;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title> {noticia.titulo} </Card.Title>
        <Card.Text> {noticia.subtitulo} </Card.Text>
      </Card.Body>
    </Card>
  );
}


export default Noticia;