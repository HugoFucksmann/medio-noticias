import React, { useContext } from 'react';
import { Badge } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { NoticiasContext } from '../App';

function BarraTitulares() {

  const noticias = useContext(NoticiasContext);
    
  return (
    <>
      <div
        className="container text-center "
        style={{ fontSize: "1.3em", marginTop: "20px", marginBottom: "40px" }}
      >
        <Badge key="temahoy" variant="dark" className="mr-2 shadow">
        Temas de hoy:
        </Badge>
        {noticias.slice(0, 3).map((noticia) => {
          return (
            <Link key={noticia._id} to={`/home/noticia/${noticia._id}`}>
              <Badge pill variant="info" className="ml-1 shadow">
                {noticia.titulo.substr(0, 38)}...
              </Badge>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default BarraTitulares;

