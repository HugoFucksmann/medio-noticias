import React, { useContext } from "react";
import { Button, Col, Row, Figure } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { imagenUrl, fileUrl } from "../helpers/imagenUrl";
import { NoticiasContext } from "../App";
import { FacebookProvider, Comments } from "react-facebook";
import {
  TwitterShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
} from "react-share";
import AdsVertical2 from "../component/publis/ads2Vertical";
import AdsVertical from "../component/publis/ads1Vertical";
import VerticalNotas from "../component/verticalNotas";

function Noticia() {
  const {noticias} = useContext(NoticiasContext);
  const { id } = useParams();
  const nota = noticias.find((nota) => nota._id === id);
 
  return (
    <>
      <Row>
        <Col>
          <NotaCabezal {...nota} />
        </Col>
      </Row>
      <Row style={{ marginTop: "30px" }}>
        <Col sm={8}>
          <FacebookProvider appId="501058050598405">
            <Nota {...nota} />
          </FacebookProvider>
        </Col>
        <Col sm={4}>
          <VerticalNotas />
          <AdsVertical2 />
          <b className="text-danger">contenido o publicidad</b>
          <AdsVertical />
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
  const pageId = `https://medio-noticias.herokuapp.com/home/noticia/${nota._id}`;
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
            <p>
              <i>{nota.pieDeFoto}</i>
            </p>
            <div className="float-right mb-3 mt-1" style={{marginTop: '-40px'}}>
              <FacebookShareButton
                url={window.location.href}
                title={nota.titulo}
              >
                <FacebookIcon size={40} round={true} className="ml-3" />
              </FacebookShareButton>

              <TwitterShareButton
                url={window.location.href}
                title={nota.titulo}
              >
                <TwitterIcon size={40} round={true} className="ml-3" />
              </TwitterShareButton>

              <WhatsappShareButton
                url={window.location.href}
                title={nota.titulo}
              >
                <WhatsappIcon size={40} round={true} className="ml-3" />
              </WhatsappShareButton>
            </div>
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
        {(file && ext === "jpg") ||
          (ext === "png" && (
            <div style={{ textAlign: "center" }}>
              <img width="90%" src={file} alt={file} />
            </div>
          ))}
        <p className="textoNota text-black">{nota.texto}</p>
        <section>
          <Link to={"/home"} className="mb-1 float-left">
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
        <section>
          <Comments href={pageId} width="100%" /> 
        </section>
      </section>
    );
}

export default Noticia;

