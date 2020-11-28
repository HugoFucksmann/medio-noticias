import React, { useState, useContext, Suspense } from 'react';
import { Button, Card, Col, Container, FormControl, InputGroup, Row, Table, Form } from 'react-bootstrap';
import { NoticiasContext } from '../App'
import iconEliminar from '../assets/eliminar.svg';
import { imagenUrl } from '../helpers/imagenUrl';
import {actualizarFoto} from "../helpers/fileUpload";
import Axios from 'axios';
import Swal from 'sweetalert2';
import Auth from '../helpers/auth'

const token = localStorage.getItem("token");
const config = {
  headers: { "x-token": token },
};

function Formm(props){
    console.log('Formm 17');
    return (
      <>
        <Button
          onClick={() => Auth.logout(props)}
          variant="outline-info"
          style={{ float: "right", margin: "-50px 50px 0 0" }}
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

function Formulario(props){
  const [titulo, setTitulo] = useState("");
  const [subtitulo, setSubtitulo] = useState("");
  const [pieDeFoto, setPieDeFoto] = useState("");
  const [texto, setTexto] = useState("");
  const [tipo, setTipo] = useState("");
  const [fecha, setFecha] = useState(new Date().toISOString());
  console.log('formulario 53');
  const getFecha = () => {
   return new Date().toISOString();
  }
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
    setFecha(getFecha());
    
   
    const notaDB = {
      titulo, subtitulo, pieDeFoto, texto, tipo, fecha
    }
    
    await Axios.post(`${process.env.REACT_APP_URL_PROD}/noticias`,notaDB, config)
      .then( resp => {
        const id = resp.data.noticias._id;
        const tipo = 'noticias';
        Swal.fire({
          title: "subir imagen",
          input: "file",
          preConfirm: (file) => {
            actualizarFoto(file, tipo, id)
            .then( () => {
              console.log(props.history);
              props.history.push("/form");
              Swal.fire("nota cargada con exito", "", "success");
            })
            .catch( err => console.log(err));
          },
        });
      })
      .catch( err => {
        console.log(err.response);
        Swal.fire("error al cargar la nota", "", "error");
      });
  }

  return (
    <Card bg="light" border="info" className="text-center shadow">
      <Card.Header as="h5">Formulario Noticias</Card.Header>
      <Card.Body>
        <Form.Group key="tipo" as={Col} controlId="formGridState">
          <Form.Control
            as="select"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          >
            <option>Tipo</option>
            <option>politica</option>
            <option>covid</option>
            <option>otra cosa</option>
          </Form.Control>
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


function TablaNotas() {
  const noticias = useContext(NoticiasContext);
  console.log("tabbbb");
  function eliminarNota(_id) {
    const url = `${process.env.REACT_APP_URL_PROD}/noticias/${_id}`;
    Swal.fire({
      title: "eliminar la nota ?",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        return Axios.delete(url, config)
          .then(() => {
            Swal.fire("Borrado", "", "success");
          })
          .catch((err) => console.log(err));
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
                <th>Tipo</th>
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
                    <td style={{ width: "100px" }}>{noticias.tipo}</td>
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