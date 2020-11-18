import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Nav, Navbar} from 'react-bootstrap'
import logo from "../assets/logotype.png";
import { Link } from "react-router-dom";

const f = new Date();
const meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
const fecha = "fecha: " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear();
const hora = "hora: " + f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds();

function BarraNav() {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="info" height={70} className="justify-content-between">
      <Navbar.Brand >
      <Link to={'/'}>
        <img alt="" src={logo} width="100" height="70" className="d-inline-block align-top" />
      </Link>
      </Navbar.Brand>
      {fecha}
      <br/>
      {hora}
    </Navbar>
  );
}

export default BarraNav;