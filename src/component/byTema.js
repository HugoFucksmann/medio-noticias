import React, { useContext } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import { NoticiasContext } from "../App";
import { imagenUrl } from '../helpers/imagenUrl';
import SingleNoticia from './singleNoticia';
import AdsHorizontal from "./publis/ads1Horizontal";

const ByTema = () => {
    const {noticias} = useContext(NoticiasContext);
    const { tema } = useParams();
    const notas = noticias.filter((nota) => nota.tema === tema);
    
    return (
      <>
        <section>
          <h3 className="text-info text-center">{tema.toUpperCase()}</h3>
          <hr />
          <Row className="mb-4">
            <Col sm={8}>
              <NotaCabecera {...notas[0]} />
            </Col>
            <Col sm={4}>
              <NotaCabecera {...notas[1]} />
            </Col>
          </Row>
          <AdsHorizontal />
        </section>
        <section className="products">
          {notas.slice(2).map((noticia) => {
            return <SingleNoticia key={noticia._id} {...noticia} />;
          })}
        </section>
      </>
    );
}

const NotaCabecera = (nota) => {
  const img = nota.imagen;
  const imagen = imagenUrl(img);
    return (
      <Card className="shadow">
        <Card.Img variant="top" src={imagen} style={{ height: "300px" }} />
        <Card.Body style={{height: "110px"}}>
          <b>{nota.titulo}</b>
        </Card.Body>
      </Card>
    );
}





export default ByTema;