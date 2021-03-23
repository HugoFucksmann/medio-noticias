import React, { useContext } from 'react'
import { Card, Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NoticiasContext } from '../App';
import { imagenUrl } from '../helpers/imagenUrl';


const VerticalNotas = (nota) => {
    const { noticias } = useContext(NoticiasContext);


  const imagen = imagenUrl(nota.imagen);
  return (<ul>
    
  {noticias.slice(0,3).map((nota) => {
      return (
     
          <Link
            to={`/home/noticia/${nota._id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Media
              className="mb-3 p-2 mb-4 shadow"
              style={{ backgroundColor: "#f5f5f5" }}
            >
              <img
                alt={nota.pieDeFoto}
                src={imagen}
                height={90}
                width={120}
                className="shadow"
                style={{
                  marginLeft: "-20px",
                  marginRight: "10px",
                  borderRadius: "10px",
                }}
              />
              <Media.Body>
                <h6>{nota.titulo.substr(0, 99)}...</h6>
              </Media.Body>
            </Media>
          </Link>
        
      );
  })}
  </ul>);
};


export default VerticalNotas;