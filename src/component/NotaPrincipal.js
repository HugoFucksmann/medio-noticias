import React, { useContext } from 'react';
import { Carousel } from "react-bootstrap";

import {imagenUrl} from "../helpers/imagenUrl";
import { NoticiasContext } from '../App';
import { Link } from 'react-router-dom';

function NotaPrincipal() {
  const noticias = useContext(NoticiasContext);
  return (
    <>
      <Carousel className="full-width" >
        {noticias.map((noticia) => {
          const img = noticia.imagen;
          const imagen = imagenUrl(img);
          return (
            <Carousel.Item key={noticia._id}> 
            <Link to={`/home/noticia/${noticia._id}`}>
              <img className="d-block w-100" style={{maxHeight: '400px'}} src={imagen}  />
              <Carousel.Caption style={{background: 'rgba(255,255,255,0.5)',color: 'black'}}  >
                <h2 className="cardTxm">{noticia.titulo}</h2>
              </Carousel.Caption>
            </Link>
              
            </Carousel.Item>
          );  
        })}
      </Carousel>
    </>
  );
}

export default NotaPrincipal;