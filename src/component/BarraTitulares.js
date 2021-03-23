import React, { useContext } from 'react';
import { Badge, Col, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { NoticiasContext } from "../App";

function BarraTitulares() {
  const { noticias } = useContext(NoticiasContext);
  const temas = Object.values(noticias).reduce(
    (r, i) => (!~r.indexOf(i.tema) ? (r.push(i.tema), r) : r),
    []
  );
    
  return (
    <div className="container text-center">
      <Row
        style={{ fontSize: "1.3em", marginTop: "20px", marginBottom: "40px" }}
      >
      {temas.map((tema) => {
        return (
          <Col xs>
            <Link to={`/home/tipo/${tema}`}>
              <Badge pill variant="info" className="shadow">
                {tema}
              </Badge>
            </Link>
          </Col>
        );
      })}
      </Row>
    </div>
  );
}

export default BarraTitulares;

