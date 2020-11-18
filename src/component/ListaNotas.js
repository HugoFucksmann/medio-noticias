import React from "react";
import { Media } from "react-bootstrap";

import {imagenUrl} from '../helpers/imagenUrl'
import { Link } from "react-router-dom";


function ListaNotas(noticias) {
  
  return (
      <ul className="list-unstyled">
        {noticias.noticias.map((noticia) => {
          return (
            <Link to={`/noticia/${noticia._id}`} style={{ textDecoration: "none", color: "black" }} >
              <Lii key={noticia._id} {...noticia} />
            </Link>
          );
        })}
      </ul>
  );
}

function Lii(noticia){
    const img = noticia.imagen;
    const imagen = imagenUrl(img);
    return (
      <>
        <Media as="li">
          <img
            width={64}
            height={64}
            className="mr-3"
            src={imagen}
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5>{noticia.titulo}</h5>
          </Media.Body>
        </Media>
        <br />
        <hr />
        <br />
      </>
    );
}

export default ListaNotas;