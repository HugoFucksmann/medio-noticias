import React, { useState, useContext, Suspense, useEffect } from 'react';
import { Button, Card, Col, Container, FormControl, InputGroup, Row, Table, Form, Modal, Pagination } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { NoticiasContext } from '../App'
import { imagenUrl } from '../helpers/imagenUrl';
import {actualizarArchivo} from "../helpers/fileUpload";
import Auth from '../helpers/auth'
import NoticiasService from '../helpers/noticiasService'
import PublicidadService from "../helpers/publicidadService";
import iconEliminar from '../assets/iconos/eliminar.svg';
import iconEditar from "../assets/iconos/editar.png";
import defaultImage from '../assets/default-image.png'
import {getFecha} from '../helpers/getTime'
import Accordion from "react-bootstrap/Accordion";

import iconoAccordion from "../assets/icon/iconoAccordion.png";

const Formm = (props) => {
   
    return (
      <>
        <Button
          onClick={() => Auth.logout(props)}
          variant="outline-info"
          style={{
            float: "right",
            margin: "-50px 50px 0 0",
            paddingTop: "18px",
          }}
        >
          Log Out
        </Button>

        <Container className="mt-5">
          <Row className="mb-2">
            <Col md={12}>
              <Formulario />
            </Col>
            <Col md={4}></Col>
          </Row>
          <Row>
            <Col>
              <PublicidadForm />
            </Col>
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

const Formulario = () => {
  const [imagenn, setImagenn] = useState()
  const [titulo, setTitulo] = useState("");
  const [subtitulo, setSubtitulo] = useState("");
  const [pieDeFoto, setPieDeFoto] = useState("");
  const [texto, setTexto] = useState("");
  const [tema, setTema] = useState("");
  const [fecha, setFecha] = useState(getFecha());
  const [isFile, setIsFile] = useState(false);
  const [filee, setFile] = useState(null);

  function validateForm() {
    return (
      titulo.length > 0 &&
      subtitulo.length > 0 &&
      pieDeFoto.length > 0 &&
      texto.length > 0 &&
      tema.length > 0 &&
      filee != null
    );
  }

  function mostrarImagen(file){
    setFile(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = (e) => {
      setImagenn(reader.result);
    };
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
        actualizarArchivo(filee, 'noticias', id).catch(err => console.log(err))
        if (isFile) {
          await Swal.fire({
            allowOutsideClick: false,
            title: "Archivo de audio video o img",
            input: "file",
            preConfirm: (file) => {
              actualizarArchivo(file, 'files', id)
                .then(() => {
                  Swal.fire("nota cargada con exito", "", "success")
                })
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
            <InputGroup key="njjnj" className="mb-4">
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
            </InputGroup>
            <InputGroup key="tit" className="mb-4">
              <InputGroup.Prepend>
                <InputGroup.Text>Titulo</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="text"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </InputGroup>

            <InputGroup key="sub" className="mb-4">
              <InputGroup.Prepend>
                <InputGroup.Text id="subtitulo">Subtitulo</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="text"
                value={subtitulo}
                onChange={(e) => setSubtitulo(e.target.value)}
              />
            </InputGroup>

            <InputGroup key="pdf" className="mb-4">
              <InputGroup.Prepend>
                <InputGroup.Text id="pieDeFoto">Pie de foto</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="text"
                value={pieDeFoto}
                onChange={(e) => setPieDeFoto(e.target.value)}
              />
            </InputGroup>
          </Col>
          <Col>
            <Form.File
              custom
              data-browse=""
              id="exampleFormControlFile1"
              label="Seleccione imagen principal"
              onChange={(e) => {
                mostrarImagen(e.target.files[0]);
              }}
            />
            <Form.Check
              onChange={(e) => setIsFile(e.target.checked)}
              type="checkbox"
              label="archivo extra"
              inline
            />
            {imagenn ? (
              <img
                className="shadow mt-3"
                style={{ height: "170px", width: "280px" }}
                src={imagenn}
              />
            ) : (
              <img
                className="shadow mt-3"
                style={{ height: "170px", width: "280px" }}
                src={defaultImage}
              />
            )}
          </Col>
        </Form.Group>

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
          {isFile ? (
            <span>Al terminar, cargar archivo extra</span>
          ) : (
            <span>Listo!</span>
          )}
        </Button>
      </Card.Body>
    </Card>
  );
}

const TablaNotas = () => {
  const [count, setCount] = useState(0)
  const [noticias, setNoticias] = useState(useContext(NoticiasContext).noticias.slice(0,10));
  const [nota, setNota] = useState()
  const [total, setTotal] = useState(useContext(NoticiasContext).total);
  const [modalShow, setModalShow] = useState(false);
  const [active, setActive] = useState(1);
  let items = [];
  for (let number = 1; number <= Math.ceil(total / 10); number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => notasPaginadas(number)}
      >
        {number}
      </Pagination.Item>
    );
  }


  useEffect(() => {
    (async () => {
      await NoticiasService.importantLimit().then((count) => setCount(count));
    })();
  }, [noticias]);

  async function notasPaginadas(number){
   
    await NoticiasService.getNoticiasPaginadas(number).then(({ data }) => {
      setNoticias(data.noticias);
      setActive(number);
    });
    
  }
  
  function eliminarNota(_id) {
    Swal.fire({
      title: "eliminar la nota ?",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        return NoticiasService.borrarNoticia(_id)
        .then(async () => setNoticias(await NoticiasService.getNoticias()))
        .catch((err) => console.log(err));
      };
    })
  }   

  function editarNota(noticia){
    setNota(noticia)
    setModalShow(true)
  }

  async function setImportant(cheked, noticia){
    const newNota = { ...noticia, important: cheked };
    return await NoticiasService.actualizarNoticia(noticia._id, newNota)
    .then( async () => await NoticiasService.getNoticiasPaginadas(active).then(({data}) => setNoticias(data.noticias)))
  }

  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      {nota && (
        <ModalEdit
          show={modalShow}
          onHide={() => setModalShow(false)}
          nota={nota}
        />
      )}
      <Card bg="light" border="info" className="mb-5 shadow">
        <Card.Header as="h5">Lista de Noticias</Card.Header>
        <Card.Body>
          <Table striped bordered hover className="text-center">
            <thead>
              <tr>
                <th>Foto</th>
                <th>Tema</th>
                <th>Fecha</th>
                <th>Titulo Nota</th>
                <th>Eliminar editar</th>
                <th>Fijar nota {`[${count}/3]`} </th>
              </tr>
            </thead>
            <tbody>
              {noticias.map((noticia, index) => {
                const imagen = imagenUrl(noticia.imagen);
                return (
                  <tr key={noticia._id}>
                    <td>
                      <img height={50} src={imagen} alt={imagen} />
                    </td>
                    <td style={{ width: "70px" }}>{noticia.tema}</td>
                    <td>{noticia.fecha.slice(0, 10)}</td>
                    <td>{noticia.titulo.substr(0, 70)}</td>
                    <td style={{ width: "50px" }}>
                      <img
                        className="puntero"
                        height={18}
                        src={iconEliminar}
                        alt="eliminar"
                        onClick={() => eliminarNota(noticia._id)}
                      />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <img
                        className="puntero"
                        height={18}
                        src={iconEditar}
                        alt="editar"
                        onClick={() => editarNota(noticia)}
                      />
                    </td>
                    <td style={{ width: "100px" }}>
                      {count >= 3 ? (
                        <Form.Check
                          disabled={!noticia.important}
                          type="checkbox"
                          checked={noticia.important}
                          onChange={(e) =>
                            setImportant(e.target.checked, noticia)
                          }
                        />
                      ) : (
                        <Form.Check
                          disabled={false}
                          type="checkbox"
                          checked={noticia.important}
                          onChange={(e) =>
                            setImportant(e.target.checked, noticia)
                          }
                        />
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <Pagination>{items}</Pagination>
        </Card.Body>
      </Card>
    </Suspense>
  );
}

function ModalEdit(props) {
  const [nota, setNota] = useState(props.nota);
  useEffect(() => {
    setNota(props.nota)
  },[props])
  
  function handleSubmit(){
    NoticiasService.actualizarNoticia(nota._id, nota)
    .then(({data}) => {
      console.log(data);
      if(data.ok) Swal.fire('nota editada con exito','','success');
      else Swal.fire("error al actualizar la nota", "", "error");
    })
    .catch( err => {
      console.log(err);
      Swal.fire("error al actualizar la nota", "", "error");
    });
  };
  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Card bg="light" border="info" className="text-center shadow">
        <Card.Header as="h5">Editar Noticia</Card.Header>
        <Card.Body>
          <Form.Group key="Tema" as={Row} controlId="formGridState">
            <Col sm="8">
              <InputGroup key="njjnj" className="mb-4">
                <Form.Control
                  as="select"
                  value={nota.tema || ''}
                  onChange={(e) => setNota({ ...nota, tema: e.target.value })}
                >
                  <option>politica</option>
                  <option>covid</option>
                  <option>otra cosa</option>
                </Form.Control>
              </InputGroup>
              <InputGroup key="tit" className="mb-4">
                <InputGroup.Prepend>
                  <InputGroup.Text>Titulo</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  type="text"
                  value={nota.titulo}
                  onChange={(e) => setNota({ ...nota, titulo: e.target.value })}
                />
              </InputGroup>

              <InputGroup key="sub" className="mb-4">
                <InputGroup.Prepend>
                  <InputGroup.Text id="subtitulo">Subtitulo</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  type="text"
                  value={nota.subtitulo}
                  onChange={(e) =>
                    setNota({ ...nota, subtitulo: e.target.value })
                  }
                />
              </InputGroup>

              <InputGroup key="pdf" className="mb-4">
                <InputGroup.Prepend>
                  <InputGroup.Text id="pieDeFoto">Pie de foto</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  type="text"
                  value={nota.pieDeFoto}
                  onChange={(e) =>
                    setNota({ ...nota, pieDeFoto: e.target.value })
                  }
                />
              </InputGroup>
            </Col>
          </Form.Group>

          <InputGroup key="texto">
            <InputGroup.Prepend>
              <InputGroup.Text>Texto</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              as="textarea"
              rows={5}
              value={nota.texto}
              onChange={(e) => setNota({ ...nota, texto: e.target.value })}
            />
          </InputGroup>
          <br />

          <Button onClick={() => handleSubmit()} variant="outline-info" block>
            Editar Nota !
          </Button>
        </Card.Body>
      </Card>
    </Modal>
  );
}

const PublicidadForm = () => {

  return (
    <Accordion defaultActiveKey="1" style={{ marginBlock: "20px" }}>
      <Card className="shadow puntero">
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <b>Carga de Publicidad</b>
          <img
            alt="iconoAccordion"
            height={20}
            src={iconoAccordion}
            style={{ float: "left", marginTop: "5px", marginRight: "5px" }}
          />
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body >
            <Row>
              <ImageModal publi={"vertical uno"} id={"601447116e96f8e5457170e2"} />
              <ImageModal publi={"vertical dos"} id={"601447546e96f8e5457170e3"} />
              <ImageModal publi={"horizontal uno"} id={"601447646e96f8e5457170e4"} />
              <ImageModal publi={"horizontal dos"} id={"601447796e96f8e5457170e5"} />
            </Row>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

const ImageModal = ({publi, id}) => {
  const [file, setFile] = useState();
  const [imagenn, setImagenn] = useState();
  const [link, setLink] = useState('');

  function mostrarImagen(file) {
    setFile(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = (e) => {
      setImagenn(reader.result);
    };
  }
 
  function handleSubmit(){
   actualizarArchivo(file, "publi", id)
     .then(() =>
       PublicidadService.cargarLink(id, link).then(() =>
         Swal.fire("publicidad actualizada", "", "success")
       )
       .catch((err) => {
         console.log(err);
         Swal.fire("error al cargar la publicidad", "", "error");
       })
     )
     .catch((err) => {
       console.log(err);
       Swal.fire("error al cargar la publicidad", "", "error");
     });
  }

  return (
    <Col sm={3}>
      <Form.File
        custom
        data-browse=""
        id="exampleFormControlFile1"
        label={`${publi}`}
        onChange={(e) => {
          mostrarImagen(e.target.files[0]);
        }}
      />
      <Form.Control
        style={{ marginTop: "10px" }}
        value={link}
        onChange={(e) => setLink(e.target.value)}
        size="sm"
        type="text"
        placeholder="link de la publicidad"
      />
      {imagenn ? (
        <img
          className="shadow mt-3"
          style={{ height: "150px", width: "240px" }}
          src={imagenn}
          alt="imk1"
        />
      ) : (
        <img
          className="shadow mt-3"
          style={{ height: "150px", width: "240px" }}
          src={defaultImage}
          alt="imk2"
        />
      )}
      <Button
        variant="outline-info"
        block
        size="sm"
        className="mt-3"
        onClick={(e) => handleSubmit(publi)}
      >
        cargar
      </Button>
    </Col>
  );
}




export default Formm


/*



*/