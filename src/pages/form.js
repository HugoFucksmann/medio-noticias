import React, { useState, useContext, Suspense, useEffect } from 'react';
import { Button, Card, Col, Container, FormControl, InputGroup, Row, Table, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { NoticiasContext } from '../App'
import { imagenUrl } from '../helpers/imagenUrl';
import {actualizarArchivo} from "../helpers/fileUpload";
import Auth from '../helpers/auth'
import NoticiasService from '../helpers/noticiasService'
import iconEliminar from '../assets/eliminar.svg';
import getTime from '../helpers/getTime'

const Formm = (props) => {
  
    return (
      <>
        <Button
          onClick={() => Auth.logout(props)}
          variant="outline-info"
          style={{ float: "right", margin: "-50px 50px 0 0",paddingTop: '18px' }}
        >
          Log Out
        </Button>
        <Container className="mt-5">
          <Row className="mb-5">
            <Col md={12}>
              <Formulario {...props} />
            </Col>
            <Col md={4}></Col>
          </Row>

          <Row className="justify-content-md-center">
            <Col>
              <TablaNotas />
            </Col>
          </Row>
        </Container>
      </>
    );

}

const Formulario = (props) => {

  const [titulo, setTitulo] = useState("");
  const [subtitulo, setSubtitulo] = useState("");
  const [pieDeFoto, setPieDeFoto] = useState("");
  const [texto, setTexto] = useState("");
  const [tema, setTema] = useState("");
  const [fecha, setFecha] = useState(new Date().toISOString());
  const [isFile, setIsFile] = useState(false);

  function validateForm() {
    return (
      titulo.length > 0 &&
      subtitulo.length > 0 &&
      pieDeFoto.length > 0 &&
      texto.length > 0 &&
      tema.length > 0
    );
  }
  
  async function handleSubmit() {
    
    const notaDB = {
      titulo,
      subtitulo,
      pieDeFoto,
      texto,
      tema,
      fecha
    };
    
    await NoticiasService.crearNoticia(notaDB)
      .then( async (resp) => {
        const id = resp.data.noticias._id;
         await Swal.fire({
           allowOutsideClick: false,
           title: "Imagen Principal",
           input: "file",
           preConfirm: (file) => {
              actualizarArchivo(file, "noticias", id)
           },
         });
        if (isFile) {
          
          await Swal.fire({
            allowOutsideClick: false,
            title: "Archivo de audio video o img",
            input: "file",
            preConfirm: (file) => {
              actualizarArchivo(file, 'files', id)
                .then(() =>
                  Swal.fire("nota cargada con exito", "", "success")
                )
                .catch((err) => console.log(err));
            },
          });
        } else {
          Swal.fire("nota cargada con exito", "", "success");
        }        
      })
      .catch((err) => {
        console.log(err.response);
        Swal.fire("error al cargar la nota", "", "error");
      });
  }

  return (
    <Card bg="light" border="info" className="text-center shadow">
      <Card.Header as="h5">Formulario Noticias</Card.Header>
      <Card.Body>
        <Form.Group key="Tema" as={Row} controlId="formGridState">
          <Col sm="8">
            <Form.Control
              as="select"
              value={tema}
              onChange={(e) => setTema(e.target.value)}
            >
              <option>Tema</option>
              <option>politica</option>
              <option>covid</option>
              <option>otra cosa</option>
            </Form.Control>
          </Col>
          <Col>
            <Form.Check
              onChange={(e) => setIsFile(e.target.checked)}
              type="checkbox"
              label="archivo extra"
              inline
            />
          </Col>
        </Form.Group>

        <InputGroup key="tit" className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>Titulo</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </InputGroup>

        <InputGroup key="sub" className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="subtitulo">Subtitulo</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            type="text"
            value={subtitulo}
            onChange={(e) => setSubtitulo(e.target.value)}
          />
        </InputGroup>

        <InputGroup key="pdf" className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="pieDeFoto">Pie de foto</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            type="text"
            value={pieDeFoto}
            onChange={(e) => setPieDeFoto(e.target.value)}
          />
        </InputGroup>

        <InputGroup key="texto">
          <InputGroup.Prepend>
            <InputGroup.Text>Texto</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            as="textarea"
            rows={5}
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
          />
        </InputGroup>
        <br />
        <Button
          onClick={() => handleSubmit(props)}
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


function TablaNotas() {
  const noticias = useContext(NoticiasContext);

  function eliminarNota(_id) {
    Swal.fire({
      title: "eliminar la nota ?",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        return NoticiasService.borrarNoticia(_id).catch((err) => console.log(err));
      };
    })
  }   
    
  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <Card bg="light" border="info" className="mb-5 shadow">
        <Card.Header as="h5">Lista de Noticias</Card.Header>
        <Card.Body>
          <Table striped bordered hover className="text-center">
            <thead>
              <tr>
                <th>Foto</th>
                <th>Tema</th>
                <th>Titulo Nota</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {noticias.map((noticias) => {
                const imagen = imagenUrl(noticias.imagen);            
                return (
                  <tr key={noticias._id}>
                    <td>
                      <img height={35} src={imagen} alt={imagen} />
                    </td>
                    <td style={{ width: "100px" }}>{noticias.tema}</td>
                    <td>{noticias.titulo.substr(0, 160)}</td>
                    <td>
                      <img
                        className="puntero"
                        height={18}
                        src={iconEliminar}
                        alt="eliminar"
                        onClick={() => eliminarNota(noticias._id)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Suspense>
  );
}

export default Formm


/*



*/