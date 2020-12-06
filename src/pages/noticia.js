import React, { useContext } from "react";
import { Button, Col, Row, Figure } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { imagenUrl, fileUrl } from "../helpers/imagenUrl";
import { NoticiasContext } from "../App";
import ListaNotas from '../component/ListaNotas'
import Ads from "../component/ads";
import Ads2 from "../component/ads2";
import {
  TwitterShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
} from "react-share";


function Noticia() {
  const noticias = useContext(NoticiasContext);
  const { id } = useParams();
  const nota = noticias.find((nota) => nota._id === id);
 
  return (
    <>
      <Ads />
      <Row>
        <Col>
          <NotaCabezal {...nota} />
        </Col>
      </Row>
      <Row style={{ marginTop: "30px" }}>
        <Col sm={8}>
          <Nota {...nota} />
        </Col>
        <Col sm={4}>
          <ListaNotas />
          <Ads2 />
          
        </Col>
      </Row>
    </>
  );
}

function NotaCabezal(nota){
 
  return (
    <section>
      <h6 className="text-info ">MEDIOS REGION | {nota.tema.toUpperCase()}</h6>
      <p>
        <b>{nota.fecha.slice(0, 10)}</b>
      </p>
      <h2 className=" cel-txt text-black ">{nota.titulo}</h2>
    </section>
  );
}

function Nota(nota) {
  const imagen = imagenUrl(nota.imagen);
  let file,ext;
  if( nota.file ){
    file = fileUrl(nota.file);
    ext = file.slice(((file.lastIndexOf(".") - 1) >>> 0) + 2);
  }

    return (
      <section>
        <Figure>
          <Figure.Image height={450} alt="171x180" src={imagen} />
          <Figure.Caption>
            <p>{nota.pieDeFoto}</p>
          </Figure.Caption>
        </Figure>
        <h6 className="textoNota text-black ">{nota.subtitulo}</h6>
        <hr />

        {file && ext === "mp4" && (
          <div style={{ textAlign: "center" }}>
            <video width="90%" controls className="shadow">
              <source src={file} type="video/mp4" />
            </video>
          </div>
        )}
        {file && ext === "mp3" && (
          <div style={{ textAlign: "center" }}>
            <audio controls>
              <source src={file} type="audio/mp3" />
            </audio>
          </div>
        )}
        {file && ext === "jpg" || ext === "png" && (
          <div style={{ textAlign: "center" }}>
            <img width="90%" src={file} alt={file} />
          </div>
        )}
        <p className="textoNota text-black ">{nota.texto}</p>

        <Link to={"/home"} className="mb-2 float-left">
          <Button variant="outline-info">volver al inicio</Button>
        </Link>
        <div className="float-right">
          <FacebookShareButton url={window.location.href} title={nota.titulo}>
            <FacebookIcon size={40} round={true} className="ml-3" />
          </FacebookShareButton>

          <TwitterShareButton url={window.location.href} title={nota.titulo}>
            <TwitterIcon size={40} round={true} className="ml-3" />
          </TwitterShareButton>

          <WhatsappShareButton url={window.location.href} title={nota.titulo}>
            <WhatsappIcon size={40} round={true} className="ml-3" />
          </WhatsappShareButton>
        </div>
      </section>
    );
}

export default Noticia;

