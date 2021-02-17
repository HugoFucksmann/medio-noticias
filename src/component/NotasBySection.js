import React, { useContext } from 'react'
import { Alert, Col, Media, Row } from 'react-bootstrap';
import { NoticiasContext } from "../App";
import { getSeccion } from "../services/getNoticia";
import SingleNoticia from "../component/singleNoticia";
import {imagenUrl} from '../helpers/imagenUrl'
import icono from '../assets/icon/icc2.svg'
import { Link } from 'react-router-dom';

const NotaBySection = (props) => {

    const {noticias} = useContext(NoticiasContext);
    
    const temas = getSeccion(noticias, props.tema);
    if(temas.length === 0) return <div />

    const temaTitulo = temas[0].tema
    return (
      <section>
        <Row>
          <Col sm={12}>
            <Alert
              style={{
                border: "1px solid grey",
                marginBottom: "30px",
                marginTop: "30px",
                backgroundColor: "#f5f5f5",
              }}
              className="realShadow"
            >
              <img
                alt="icono"
                height={20}
                src={icono}
                style={{ float: "left", marginTop: "5px", marginRight: "5px" }}
              />
              <h5 className="text-info">
                <b>{temaTitulo}</b>
              </h5>
            </Alert>
          </Col>
        </Row>

        <Row>
          <Col sm={6}>
            <Link
              to={`/home/noticia/${temas[0]._id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <SingleNoticia key={temas[0]._id} {...temas[0]} />
            </Link>
          </Col>
          <Col sm={6}>
            {temas.slice(1, 5).map((nota) => {
              return <ListSeccNota key={nota._id} {...nota} />;
            })}
          </Col>
        </Row>
      </section>
    );
}

const ListSeccNota = (nota) => {
 
  const imagen = imagenUrl(nota.imagen);
  return (
    <Link
      to={`/home/noticia/${nota._id}`}
      style={{ textDecoration: "none", color: "black" }}
      
    >
      <Media
        className="mb-3 p-2 border shadow"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <img
          alt={nota.pieDeFoto}
          src={imagen}
          height={90}
          width={120}
          className="shadow"
          style={{
            marginLeft: "-20px",
            marginRight: "10px",
            borderRadius: "10px",
          }}
        />
        <Media.Body>
          <h6>{nota.titulo.substr(0, 99)}...</h6>
        </Media.Body>
      </Media>
    </Link>
  );
}


export default NotaBySection;



