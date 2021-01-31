import React, { useContext  } from 'react'
import { publiUrl } from '../helpers/imagenUrl';
import { NoticiasContext } from "../App";


function AdsVertical(){
  const { publi } = useContext(NoticiasContext);
  const imagen = publiUrl(publi[1].imagen);
  
  return (
    <section
      className="adsHorizontal shadow"
      style={{
        backgroundImage: `url(${imagen})`,
        height: "100px",
      }}
    />
  );   
}

export default AdsVertical;