import React, { useContext } from "react";
import { NoticiasContext } from "../App";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import { imagenUrl } from "../helpers/imagenUrl";


function ImportantNotas() {
    
   const {noticias} = useContext(NoticiasContext);
   const noticiass = noticias.filter((noticia) => noticia.important);

   return (<>
     <br/><hr/>
    <p className="text-center text-info"><b>Notas destacadas</b></p>
     <ul className="list-unstyled">
       {noticiass.map((noticia) => {
         return <Lii key={noticia._id} {...noticia} />;
       })}
     </ul>
   </>);
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
            <b className="text-info">{noticia.tipo}</b> {noticia.titulo.slice(0, 100)} ...</p>
          <hr />
        </Media.Body>
      </Media>
    </Link>
  );
}


export default ImportantNotas;