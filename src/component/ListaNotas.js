import React, { useContext } from "react";
import { NoticiasContext } from "../App";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import { imagenUrl } from "../helpers/imagenUrl";


function ListaNotas({data}) {
    
   const noticias = useContext(NoticiasContext);
   const noticiass = noticias.slice(data[0], data[1]);
   return (
     <ul className="list-unstyled ">
       {noticiass.map((noticia) => {
         return <Lii key={noticia._id} {...noticia} />;
       })}
     </ul>
   );
}


function Lii(noticia) {
  const img = noticia.imagen;
  const imagen = imagenUrl(img);
  return (
    <Link
      to={`/home/noticia/${noticia._id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <Media as="li">
        <img
          width={130}
          height={85}
          className="mr-4 realShadow"
          src={imagen}
          alt="Generic placeholder"
        />
        <Media.Body>
          <p>
            <b className="text-info">{noticia.tipo} </b>{" "}
            {noticia.titulo.slice(0, 100)} ...
          </p>
        </Media.Body>
      </Media>
      <hr />
    </Link>
  );
}


export default ListaNotas;