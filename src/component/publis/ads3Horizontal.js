import React, { useContext } from "react";
import { publiUrl } from "../../helpers/imagenUrl";
import { NoticiasContext } from "../../App";

function AdsHorizontal() {
  const { publi } = useContext(NoticiasContext);
  const imagen = publiUrl(publi[4].imagen);
  const link = publiUrl(publi[4].link);

  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div
        className="adsHorizontal shadow"
        style={{
          backgroundImage: `url(${imagen})`,
        }}
      />
    </a>
  );
}

export default AdsHorizontal;
