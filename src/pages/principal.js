import React from "react";
import Noticias from '../component/Noticias';
import NotaPrincipal from '../component/NotaPrincipal'

function Principal(noticias) {
  return (
    <section className="container">
      <NotaPrincipal {...noticias} />
      <Noticias {...noticias} />
    </section>
  );
}

export default Principal;