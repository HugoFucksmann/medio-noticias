import React from 'react';
import { Badge } from "react-bootstrap";
import { useFetch } from "../helpers/useFetch";
import { imagenUrl } from "../helpers/imagenUrl";

const url = "http://localhost:3012/api/noticias";
function BarraTitulares() {
 const { noticias } = useFetch(url);
 if (noticias.length === 0) {
   return <div>loading...</div>;
 }
  return (
    <>
      <div className="container text-center" style={{ fontSize: "1.3em" }}>
        <Badge variant="info">Temas de hoy: </Badge>
        {noticias.noticias.map((noticia) => {
          return <Badge key={noticia._id} pill variant="light">
          {noticia.titulo}
        </Badge>
          
        })}
      </div>
    </>
  );
}

export default BarraTitulares;