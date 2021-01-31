import React, { useContext } from 'react';
import { Carousel } from "react-bootstrap";

import {imagenUrl} from "../helpers/imagenUrl";
import { NoticiasContext } from '../App';
import { Link } from 'react-router-dom';

function NotaPrincipal({data}) {
  const {noticias} = useContext(NoticiasContext);
  const noticiass = noticias.slice(data[0], data[1]);
  return (
    <>
      <Carousel className="full-width shadow" >
        {noticiass.map((noticia) => {
          const img = noticia.imagen;
          const imagen = imagenUrl(img);
          return (
            <Carousel.Item key={noticia._id}>
              <Link to={`/home/noticia/${noticia._id}`}>
                <img
                  className="d-block w-100"
                  style={{ maxHeight: "400px" }}
                  src={imagen}
                />
                <Carousel.Caption
                  style={{
                    background: "rgba(255,255,255,0.8)",
                    color: "black",
                  }}
                >
                  <h4 className="text-info cel-txt">
                    <b>{noticia.tema}</b>
                  </h4>
                  <h5 className="cel-txt">{noticia.titulo}</h5>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          );  
        })}
      </Carousel>
      <br/>
    </>
  );
}

export default NotaPrincipal;