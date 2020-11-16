import React from 'react';
import { Card } from "react-bootstrap";
import { useFetch } from "../helpers/useFetch";
import fotto from '../assets/fa.jpg'

const url = "http://localhost:3012/api/noticias";


function NotaPrincipal() {

  return (
    <section className="product" style={{marginTop: '20px'}}>
      <Card className="bg-dark text-white">
        <Card.Img src={fotto} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </section>
  );
}

export default NotaPrincipal;