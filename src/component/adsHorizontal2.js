import React, { useContext  } from 'react'
import { publiUrl } from '../helpers/imagenUrl';
import { NoticiasContext } from "../App";


function AdsVertical(){
  const { publi } = useContext(NoticiasContext);
  const imagen = publiUrl(publi[1].imagen);
   const link = publiUrl(publi[1].link);
  
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <section
        className="adsHorizontal shadow"
        style={{
          backgroundImage: `url(${imagen})`,
          height: "100px",
        }}
      />
    </a>
  );   
}

export default AdsVertical;