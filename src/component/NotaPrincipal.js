import React from 'react';
import { Card, Carousel } from "react-bootstrap";
import { Link } from 'react-router-dom';

import {imagenUrl} from "../helpers/imagenUrl";

function NotaPrincipal(noticias) {
  return (
    <>
      <Carousel>
        {noticias.noticias.map((noticia) => {
          const img = noticia.imagen;
          const imagen = imagenUrl(img);
          return (
            <Carousel.Item>
              <img className="d-block w-100" style={{maxHeight: '400px', marginTop: '20px'}} src={imagen}  />
              <Carousel.Caption style={{background: 'rgba(255,255,255,0.4)',color: 'black'}}>
                <h3>{noticia.titulo}</h3>
                <p>{noticia.subtitulo}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );  
        })}
      </Carousel>
    </>
  );
}

export default NotaPrincipal;