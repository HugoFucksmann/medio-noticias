import React from 'react'
import { Container } from "react-bootstrap";


import BarraTitulares from "../component/BarraTitulares";
import BarraNav from "../shared/navbar";
import NotasFinal from "../component/NotasFinal";
import CardCarousel from "../component/CardCarousel";
import Ads from '../component/ads';
import Noticias from "../component/Noticias";
import NotaPrincipal from "../component/NotaPrincipal";



function Principal(noticias) {
  
  return (
    <>
      <BarraNav />
      <BarraTitulares {...noticias} />
      <Container fluid="lg">
    
        <Home {...noticias} />
        <CardCarousel {...noticias} />
        <NotasFinal {...noticias} />
      </Container>
    </>
  );
}

function Home(noticias) {
  return (
    <section>
      <NotaPrincipal {...noticias} />
      <Noticias {...noticias} />
    </section>
  );
}

export default Principal;