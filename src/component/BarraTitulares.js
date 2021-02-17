import React, { } from 'react';
import { Badge, Col, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';

function BarraTitulares() {
    
  return (
    <div className="container text-center">
      <Row
        style={{ fontSize: "1.3em", marginTop: "20px", marginBottom: "40px" }}
      >
        <Col xs>
          <Link to={`/home/tipo/deportes`}>
            <Badge pill variant="info" className="shadow">
              Deportes
            </Badge>
          </Link>
        </Col>
        <Col xs>
          <Link to={`/home/tipo/regionales`}>
            <Badge pill variant="info" className="shadow">
              Noticias Regionales
            </Badge>
          </Link>
        </Col>
        <Col xs>
          <Link to={`/home/tipo/provinciales`}>
            <Badge pill variant="info" className="shadow">
              Noticias Provinciales
            </Badge>
          </Link>
        </Col>
        <Col xs>
          <Link to={`/home/tipo/politica`}>
            <Badge pill variant="info" className="shadow">
              Politica
            </Badge>
          </Link>
        </Col>
        <Col xs>
          <Link to={`/home/tipo/cultura`}>
            <Badge pill variant="info" className="  shadow">
              Cultura
            </Badge>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default BarraTitulares;

