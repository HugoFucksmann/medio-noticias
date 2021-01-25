import React, { useContext } from 'react'
import { Card, CardColumns, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import { NoticiasContext } from "../App";
import { imagenUrl } from '../helpers/imagenUrl';

const ByTema = () => {
    const noticias = useContext(NoticiasContext);
    const { tema } = useParams();
    const notas = noticias.filter((nota) => nota.tema === tema).reverse();
    
    return (
      <section>
        <h3 className="text-info text-center">{tema.toUpperCase()}</h3>
        <hr />
        <CardColumns>
          {notas.map((noticia) => {
            return <CardTema key={noticia._id} nota={noticia} />;
          })}
        </CardColumns>
      </section>
    );
}

const CardTema = ({nota}) => {
  const img = nota.imagen;
  const imagen = imagenUrl(img);
    return (
      <Card className="m-2 p-2" >
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{nota.titulo.substr(0, 30)}</Card.Title>
          <Card.Text>{nota.texto.substr(0, 160)}</Card.Text>
        </Card.Body>
      </Card>
    );
}

export default ByTema;