import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NoticiasContext } from "../App";
import SingleNoticia from "../component/singleNoticia";


function Noticias({ data }) {
  const { noticias } = useContext(NoticiasContext);
  const noticiass = noticias.slice(data[0], data[1]);
  return (
    <section className="products">
      {noticiass.map((noticia) => {
        return (
          <Link
            key={noticia._id}
            to={`/home/noticia/${noticia._id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <SingleNoticia key={noticia._id} {...noticia} />
          </Link>
        );
      })}
    </section>
  );
}




export default Noticias;