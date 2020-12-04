import React, { useContext } from "react";
import { NoticiasContext } from "../App";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import { imagenUrl } from "../helpers/imagenUrl";

function ListaNotas() {
  const noticias = useContext(NoticiasContext);
  const noticiass = noticias.slice(0, 3);
  return (
    <ul className="list-unstyled ">
      {noticiass.map((noticia) => {
        return (
          <Link
            key={noticia._id}
            to={`/home/noticia/${noticia._id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Lii {...noticia} />
          </Link>
        );
      })}
    </ul>
  );
}


function Lii(noticia) {
  const img = noticia.imagen;
  const imagen = imagenUrl(img);
  return (
    <>
      <Media as="li">
        <img
          width={120}
          height={75}
          className="mr-3"
          src={imagen}
          alt="Generic placeholder"
        />
        <Media.Body>
          <p><b className="text-info" >{noticia.tipo}  </b> {noticia.titulo.slice(0,6070)}</p>
        </Media.Body>
      </Media>
     
      <hr />
      <br />
    </>
  );
}


export default ListaNotas;