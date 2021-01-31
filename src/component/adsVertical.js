import React, { useContext } from "react";
import { publiUrl } from "../helpers/imagenUrl";
import { NoticiasContext } from "../App";

function AdsVertical2() {
  const { publi } = useContext(NoticiasContext);
  const imagen = publiUrl(publi[2].imagen);

  return (
    <section
      className="adsVertical shadow"
      style={{
        backgroundImage: `url(${imagen})`,
      }}
    />
  );
}

export default AdsVertical2;
