import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NoticiasContext } from "../App";
import { imagenUrl } from '../helpers/imagenUrl';



function Noticias() {
  const noticias = useContext(NoticiasContext);
  return(
  <section className="products">
      { noticias.map((noticia) => {
        return (
          <Link key={noticia._id} to={`/home/noticia/${noticia._id}`} style={{ textDecoration: 'none',  color: 'black' }} >
            <SingleNoticia  key={noticia._id} {...noticia} />
          </Link>
        )})
      }
  </section>
  )
}

const SingleNoticia = (noticia) => {
  const img = noticia.imagen;
  const imagen = imagenUrl(img);

  return (
    <Card className="product shadow cel-txt">
      <Card.Img variant="top" src={imagen} className="borderR shadow-sm" />
      <Card.Body>
        <b className="text-info">{noticia.tipo}</b>
        <Card.Title>
          <p className="cel-txt">{noticia.titulo}</p>
        </Card.Title>
        <Card.Text>
          {noticia.subtitulo.substr(0, 180)}... <small> leer mas</small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}


export default Noticias;