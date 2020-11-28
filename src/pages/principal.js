import React from 'react'
import { Container } from "react-bootstrap";


import BarraTitulares from "../component/BarraTitulares";
import BarraNav from "../shared/navbar";
import NotasFinal from "../component/NotasFinal";
import CardCarousel from "../component/CardCarousel";
import Noticias from "../component/Noticias";
import NotaPrincipal from "../component/NotaPrincipal";



function Principal() {
  
  return (
    <>
      <BarraNav />
      <BarraTitulares />
      <Container fluid="lg">
    
        <Home />
        <CardCarousel />
        <NotasFinal />
      </Container>
    </>
  );
}

function Home() {
  return (
    <section>
      <NotaPrincipal />
      <Noticias />
    </section>
  );
}

export default Principal;