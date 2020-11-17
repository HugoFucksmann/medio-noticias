import React from "react";
import { Col, Figure, Media, Row } from "react-bootstrap";
import fott from "../assets/fa.jpg";

import ListaNotas from "../component/ListaNotas";

function Noticia() {
  return (
    <Row style={{ marginTop: "100px" }}>
      <Col sm={8}>
       <Nota />
      </Col>
      <Col sm={4} style={{ marginTop: "200px" }}>
        <ListaNotas />
      </Col>
    </Row>
  );
}

function Nota() {
    return (
      <>
        <h1>titulo</h1>
        <h3>
          afnosdfnsdo sdkgfnmsdokgns dkgn sdokg nsdokgn sdokgn sdog asf as as
          fasfasfasfas asfas fa fs fas asf asfa sfasfasas{" "}
        </h3>
        <br />
        <Figure>
          <Figure.Image height={450} alt="171x180" src={fott} />
          <Figure.Caption>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </Figure.Caption>
        </Figure>
        <br />
        <hr />
        <br />
        <p>
          snsdvonsdvjnsd jvnsd pjignsdji gnsdjignsdjig lorem ipsu set amet
          nsdjig nsdijgnlorem ipsu set amet lorem ipsu set amet lorem ipsu set
          amet snsdvonsdvjnsd jvnsd pjignsdji gnsdjignsdjig lorem ipsu set amet
          nsdjig nsdijgnlorem ipsu set amet lorem ipsu set amet lorem ipsu set
          amet snsdvonsdvjnsd jvnsd pjignsdji gnsdjignsdjig lorem ipsu set amet
          nsdjig nsdijgnlorem ipsu set amet lorem ipsu set amet lorem ipsu set
          amet snsdvonsdvjnsd jvnsd pjignsdji gnsdjignsdjig lorem ipsu set amet
          nsdjig nsdijgnlorem ipsu set amet lorem ipsu set amet lorem ipsu set
          amet snsdvonsdvjnsd jvnsd pjignsdji gnsdjignsdjig lorem ipsu set amet
          nsdjig nsdijgnlorem ipsu set amet lorem ipsu set amet lorem ipsu set
          amet snsdvonsdvjnsd jvnsd pjignsdji gnsdjignsdjig lorem ipsu set amet
          nsdjig nsdijgnlorem ipsu set amet lorem ipsu set amet lorem ipsu set
          amet snsdvonsdvjnsd jvnsd pjignsdji gnsdjignsdjig lorem ipsu set amet
          nsdjig nsdijgnlorem ipsu set amet lorem ipsu set amet lorem ipsu set
          amet
        </p>
      </>
    );
}



export default Noticia;
