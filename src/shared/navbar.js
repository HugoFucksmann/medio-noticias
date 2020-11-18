import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar} from 'react-bootstrap'
import logo from "../assets/logotype.png";
import { Link } from "react-router-dom";

function BarraNav() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="info" variant="dark" style={{ height: "80px" }} className="justify-content-center">
      <Link to={'/'}>
      <Navbar.Brand >
        <img alt="" src={logo} width="50" height="50" className="d-inline-block align-top" />
        &nbsp;&nbsp;
        Medio de Noticias 1
      </Navbar.Brand>
      </Link>
    </Navbar>
  );
}

export default BarraNav;