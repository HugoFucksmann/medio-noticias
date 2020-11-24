import React, { useState } from 'react'
import { Button, Card, Col, Container, FormControl, InputGroup, Row, Table } from 'react-bootstrap';

function Form(){
    return (
      <Container className="mt-5">
        <Row className="mb-5">
          <Col md={8}>
            <Formulario />
          </Col>
          <Col md={4}>
            <UploadFoto></UploadFoto>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col>
            <TablaNotas />
          </Col>
        </Row>
      </Container>
    );

}

function Formulario(){
   
  const [titulo, setTitulo] = useState("");
  const [subtitulo, setSubtitulo] = useState("");
  const [pieDeFoto, setPieDeFoto] = useState("");
  const [texto, setTexto] = useState("");

  function validateForm() {
    return titulo.length > 0 && subtitulo.length > 0 && pieDeFoto.length > 0 && texto.length > 0;
  }

  return (
    <Card bg="light" border="info" className="text-center shadow">
      <Card.Header as="h5">Formulario Noticias</Card.Header>
      <Card.Body>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>Titulo</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="subtitulo">Subtitulo</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            type="text"
            value={subtitulo}
            onChange={(e) => setSubtitulo(e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="pieDeFoto">Pie de foto</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            type="text"
            value={pieDeFoto}
            onChange={(e) => setPieDeFoto(e.target.value)}
          />
        </InputGroup>

        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>Texto</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            as="textarea"
            s
            rows={5}
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
          />
        </InputGroup>
        <br />
        <Button variant="outline-info" block disabled={!validateForm()}>
          Listo!
        </Button>
      </Card.Body>
    </Card>
  );
}

function UploadFoto(){
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <Card bg="light" border="info" className="text-center shadow">
      <Card.Header as="h5">Subir Imagen</Card.Header>
      <Card.Body>
        <input
          type="file"
          filename={selectedFile}
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />
        {selectedFile ? '<img />' : ''}
      </Card.Body>
    </Card>
  );
}

function TablaNotas(){
  return (
    <Card bg="light" border="info" className="text-center shadow">
      <Card.Header as="h5">Lista de Noticias</Card.Header>
      <Card.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Foto</th>
              <th>Titulo</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default Form