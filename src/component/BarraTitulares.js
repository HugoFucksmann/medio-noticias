import React, { useContext } from 'react';
import { Badge } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { NoticiasContext } from '../App';

function BarraTitulares() {
    
  return (
    <>
      <div
        className="container text-center "
        style={{ fontSize: "1.3em", marginTop: "20px", marginBottom: "40px" }}
      >
        <Link to={`/home/tipo/deportes`}>
          <Badge pill variant="info" className="ml-5 shadow">
            Deportes
          </Badge>
        </Link>
        <Link to={`/home/tipo/regionales`}>
          <Badge pill variant="info" className="ml-5 shadow">
            Noticias Regionales
          </Badge>
        </Link>
        <Link to={`/home/tipo/provinciales`}>
          <Badge pill variant="info" className="ml-4 shadow">
            Noticias Provinciales
          </Badge>
        </Link>
        <Link to={`/home/tipo/politica`}>
          <Badge pill variant="info" className="ml-5 shadow">
            Politica
          </Badge>
        </Link>
        <Link to={`/home/tipo/cultura`}>
          <Badge pill variant="info" className="ml-5 shadow">
            Cultura
          </Badge>
        </Link>
      </div>
    </>
  );
}

export default BarraTitulares;

