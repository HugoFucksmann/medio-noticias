import React, { useContext } from 'react'
import { Alert, Col, Media, Row } from 'react-bootstrap';
import { NoticiasContext } from "../App";
import { getSeccion } from "../services/getNoticia";
import SingleNoticia from "../component/singleNoticia";
import {imagenUrl} from '../helpers/imagenUrl'
import Ads2 from '../component/ads2'
import icono from '../assets/icon/icc2.svg'
import { Link } from 'react-router-dom';

const NotaBySection = (props) => {

    const noticias = useContext(NoticiasContext);
    
    const temas = getSeccion(noticias, props.tema);
    const temaTitulo = temas[0].tema
    return (
      <section>
        <Row>
          <Col sm={8}>
            <Alert
              style={{
                border: "1px solid grey",
                marginBottom: "30px",
                marginTop: "30px",
                backgroundColor: "#f5f5f5",
                
              }}
              className="shadow"
            >
              <img alt="icono" height={20} src={icono} style={{float: 'left', marginTop: '5px', marginRight: '5px'}} />
              <h5 className="text-info"><b>{temaTitulo}</b></h5>
            </Alert>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <SingleNoticia key={temas[0]._id} {...temas[0]} />
          </Col>
          <Col sm={4}>
            {temas.slice(1, 5).map((nota) => {
              return <ListSeccNota key={nota._id} {...nota} />;
            })}
          </Col>
          <Col sm={4}>
            <Ads2/>
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
        className="mb-2 p-2 border shadow"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <img
          alt={nota.pieDeFoto}
          src={imagen}
          height={90}
          width={120}
          className="shadow-sm"
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


