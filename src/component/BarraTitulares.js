import React, { useState } from 'react';
import { Badge } from "react-bootstrap";
import { Link } from 'react-router-dom';

function BarraTitulares(noticias) {
  const [notas, setNotas] = useState(noticias);
  
  
  const findNota = (id) => {
   setNotas((notas) => {
     console.log(notas.noticias.filter((notas) => notas._id !== id));
     return notas.noticias.filter((notas) => notas._id !== id);
   }); 
  }
  return (
    <>
      <div
        className="container text-center"
        style={{ fontSize: "1.3em", marginTop: "15px" }}
      >
        <Badge variant="info">Temas de hoy: </Badge>
        {noticias.noticias.slice(0, 3).map((noticia) => {
          return (
            <Link to={`/noticia/${noticia._id}`}>
              <Badge key={noticia._id} pill variant="light">
                {noticia.titulo.substr(0, 42)}..
              </Badge>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default BarraTitulares;