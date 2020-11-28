import React, { useContext, useState } from 'react';
import { Badge } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { NoticiasContext } from '../App';

function BarraTitulares() {
  const noticias = useContext(NoticiasContext);
  const [notas, setNotas] = useState(noticias);
  
  
  const findNota = (id) => {
   setNotas((notas) => {
     return noticias.filter((notas) => notas._id !== id);
   }); 
  }
  return (
    <>
      <div
        className="container text-center"
        style={{ fontSize: "1.3em", marginTop: "30px", marginBottom: '20px' }}
      >
        <Badge key="temahoy" variant="info">Temas de hoy: </Badge>
        {noticias.slice(0, 3).map((noticia) => {
          return (
            <Link key={noticia._id} to={`/noticia/${noticia._id}`}>
              <Badge pill variant="light">
                {noticia.titulo.substr(0, 42)}
              </Badge>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default BarraTitulares;