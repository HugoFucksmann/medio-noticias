import React from "react";
import Noticias from '../component/Noticias';
import NotaPrincipal from '../component/NotaPrincipal';

function Home(noticias){
    return (
      <section>

        <NotaPrincipal {...noticias} />
        <Noticias {...noticias} />
      </section>
      
    );
     
}


export default Home;