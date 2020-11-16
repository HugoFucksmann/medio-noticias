import React from 'react';
import { Badge } from "react-bootstrap";

function BarraTitulares() {

  return (
    <>
      <div className="container text-center" style={{fontSize: '1.3em'}}>
        <Badge variant="info">Temas de hoy: </Badge>{" "}
        <Badge pill variant="light">
          Secondary
        </Badge>{" "}
        <Badge pill variant="light">
          Success
        </Badge>{" "}
        <Badge pill variant="light">
          Danger
        </Badge>{" "}
        <Badge pill variant="light">
          Warning
        </Badge>{" "}
        <Badge pill variant="light">
          Info
        </Badge>
        <Badge variant="light">Light</Badge>{" "}
        <Badge pill variant="light">
          Dark
        </Badge>
      </div>
    </>
  );
}

export default BarraTitulares;