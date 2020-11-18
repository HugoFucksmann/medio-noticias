import React, { useCallback, useState } from 'react';
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
      <div className="container text-center" style={{ fontSize: "1.3em" }}>
        <Badge variant="info">Temas de hoy: </Badge>
        {noticias.noticias.map((noticia) => {
          return (
            <Link to={`/noticia/${noticia._id}`}>
              <Badge key={noticia._id} pill variant="light">
                {noticia.titulo}
              </Badge>
            </Link>
          );
        })} 
      </div>
    </>
  );
}

export default BarraTitulares;