import React, { useContext } from 'react'
import { Alert, Badge, Card, Col, Row } from 'react-bootstrap';
import { NoticiasContext } from "../App";
import { imagenUrl } from '../helpers/imagenUrl';
import ListaNotas from '../component/ListaNotas'

const NotaBySection = () => {
    const noticias = useContext(NoticiasContext);
    const noticia = noticias[6];
    
    return (
      <section>
        <Row>
          <Col sm={8}>
            <Alert
              variant="info"
              style={{
                borderTop: "1px solid grey",
                borderBottom: "1px solid grey",
                marginBottom: '30px',
                marginTop: '30px'
              }}
              className="shadow"
            >
              <b>Seccion</b>
            </Alert>
          </Col>
        </Row>
        <Row >
          <Col sm={4}>
            <Cardd {...noticia} />
          </Col>
          <Col sm={4}>
            <ListaNotas {...noticia} />
          </Col>
        </Row>
      </section>
    );
}


const Cardd = (noticia) => {
    const imagen = imagenUrl(noticia.imagen);
    return (
      <div >
        <img className="mb-3" src={imagen} width="100%" />
        <h6>{noticia.titulo} </h6>
        <p >
          {noticia.subtitulo.substr(0, 130)}... <small> leer mas</small>
        </p>
        <br/>
      </div>
    );
}


export default NotaBySection;


 {/* <Card className="shadow" height={250}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>
            <p className="cel-txt">{noticia.titulo}</p>
          </Card.Title>
          <Card.Text>
            {noticia.subtitulo.substr(0, 130)}... <small> leer mas</small>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{noticia.fecha.slice(0, 10)}</small>
          <small className="text-info" style={{ float: "right" }}>
            {noticia.tipo}
          </small>
        </Card.Footer>
      </Card> */}

