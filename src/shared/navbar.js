import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar} from 'react-bootstrap'
import logo from "../assets/logotype.png";

function BarraNav() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="info" variant="dark" style={{ height: "80px" }} className="justify-content-center">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="50"
          height="50"
          className="d-inline-block align-top"
        />{" "}
        Medio de Noticias 1
      </Navbar.Brand>
    </Navbar>
  );
}

export default BarraNav;