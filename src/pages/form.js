import React, { useState, useContext } from 'react';
import { Button, Card, Col, Container, FormControl, InputGroup, Row, Table } from 'react-bootstrap';
import { NoticiasContext } from '../App'
import iconEliminar from '../assets/eliminar.svg';
import iconEditar from '../assets/editar.svg'
import { imagenUrl } from '../helpers/imagenUrl';
import Axios from 'axios';
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
  const [tipo, setTipo] = useState("");

  function validateForm() {
    return (
      titulo.length > 0 &&
      subtitulo.length > 0 &&
      pieDeFoto.length > 0 &&
      texto.length > 0 &&
      tipo.length > 0
    );
  }
  async function handleSubmit(){
    const notaDB = {
      titulo, subtitulo, pieDeFoto, texto, tipo
    }
    const token = localStorage.getItem('token');
    const config = { 
      headers: {
        'x-token': token
      }
    };
    
    await Axios.post('http://localhost:3012/api/noticias',notaDB, config)
      .then( resp => console.log(resp))
      .catch( err => console.log(err.response));
  }

  return (
    <Card bg="light" border="info" className="text-center shadow">
      <Card.Header as="h5">Formulario Noticias</Card.Header>
      <Card.Body>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>Tipo</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            type="text"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          />
        </InputGroup>

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
        <Button
          onClick={() => handleSubmit()}
          variant="outline-info"
          block
          disabled={!validateForm()}
        >
          Listo!
        </Button>
      </Card.Body>
    </Card>
  );
}

function UploadFoto(){
  const [selectedFile, setSelectedFile] = useState(null);

  function validateForm() {
    return selectedFile !== null;
  }

  function handleUpload(){

  }

  return (
    <Card bg="light" border="info" className="text-center shadow">
      <Card.Header as="h5">Subir Imagen</Card.Header>
      <Card.Body>
        <input
          type="file"
          filename={selectedFile}
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />
        {selectedFile ? <img width={100} src={selectedFile} /> : ""}
        <Button
          className="mt-4"
          onClick={() => handleUpload()}
          variant="outline-info"
          block
          disabled={!validateForm()}
        >
          subir foto
        </Button>
      </Card.Body>
    </Card>
  );
}

function TablaNotas(){
  const {noticias} = useContext(NoticiasContext);

  return (
    <Card bg="light" border="info" className="mb-5 shadow">
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
            {noticias.map((noticias) => {
              const imagen = imagenUrl(noticias.imagen);
              return (
                <tr key={noticias._id} className="text-center">
                  <td><img height={35} src={imagen} /></td>
                  <td>{noticias.titulo.substr(0, 160)}</td>
                  <td>
                    <img className="mr-3 puntero" height={18} src={iconEditar} />
                    <img className="puntero" height={18} src={iconEliminar} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default Form