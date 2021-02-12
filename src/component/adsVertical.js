import React, { useContext } from "react";
import { publiUrl } from "../helpers/imagenUrl";
import { NoticiasContext } from "../App";

function AdsVertical2() {
  const { publi } = useContext(NoticiasContext);
  const imagen = publiUrl(publi[2].imagen);
   const link = publiUrl(publi[2].link);

  return (
    <a href={link} target="_blank" rel="noreferrer">
      <section
        className="adsVertical shadow"
        style={{
          backgroundImage: `url(${imagen})`,
        }}
      />
    </a>
  );
}

export default AdsVertical2;
