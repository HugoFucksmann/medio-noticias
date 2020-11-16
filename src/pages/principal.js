import React from "react";
import Noticias from '../component/Noticias';
import NotaPrincipal from '../component/NotaPrincipal'

function Principal() {
  return (
    <section className="container">
        <NotaPrincipal />
        <Noticias />
    </section>
  );
}

export default Principal;