import React, { useContext } from "react";
import { publiUrl } from "../helpers/imagenUrl";
import { NoticiasContext } from "../App";

function AdsHorizontal(){
  const { publi } = useContext(NoticiasContext);
  const imagen = publiUrl(publi[0].imagen);
    return (
      <div
        className="adsHorizontal shadow"
        style={{
          backgroundImage: `url(${imagen})`
        }}
      ></div>
    );
}

export default AdsHorizontal;