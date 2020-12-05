import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NoticiasContext } from "../App";
import { imagenUrl } from '../helpers/imagenUrl';
import SingleNoticia from "../component/singleNoticia";


function Noticias() {
  const noticias = useContext(NoticiasContext).slice(3,12);
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




export default Noticias;