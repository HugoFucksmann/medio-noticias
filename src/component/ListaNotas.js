import React from "react";
import { Col, Figure, Media, Row } from "react-bootstrap";

import {useFetch} from '../helpers/useFetch'
import {imagenUrl} from '../helpers/imagenUrl'
import fott from "../assets/fa.jpg";

const url = "http://localhost:3012/api/noticias";

function ListaNotas() {
    const { noticias } = useFetch(url);
    if (noticias.length === 0) {
      return <div>loading...</div>;
    }
  return (
    <>
      <ul className="list-unstyled">
        {noticias.noticias.map((noticia) => {
          return <Lii key={noticia._id} {...noticia} />;
        })}
      </ul>
    </>
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