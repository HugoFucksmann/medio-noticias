import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar} from 'react-bootstrap'
import logo from "../assets/logotype.png";

function BarraNav() {
  return (
    <Navbar bg="info" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Blog de Noticias 1
      </Navbar.Brand>
    </Navbar>
  );
}

export default BarraNav;