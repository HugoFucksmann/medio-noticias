import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Badge, Button, Dropdown, Nav, Navbar, NavDropdown, DropdownButton } from "react-bootstrap";
import logo from "../assets/logotype.png";
import { Link } from "react-router-dom";

const f = new Date();
const meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
const fecha = f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear();
const hora = f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds();

function BarraNav() {
  return (
    <>
      <Navbar sticky="top" collapseOnSelect expand="lg" bg="info" height={70}
        className="justify-content-between mr-auto shadow">
        <Navbar.Brand>
          <Link to={"/"}>
            <img alt="" src={logo} width="100" height="70" className="d-inline-block align-top" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto" >
            <Nav.Item  >
              <DropdownButton size="sm"  variant="outline-dark" title="Politica">
                <Dropdown.Item >Santa Fe</Dropdown.Item>
                <Dropdown.Item >Argentina</Dropdown.Item>
              </DropdownButton>
            </Nav.Item>
            <Nav.Item style={{marginLeft: '10px'}}>
              <Button size="sm" variant="outline-dark" eventKey="link-1">Covid-19</Button>
            </Nav.Item>
            <Nav.Item style={{marginLeft: '10px'}}>
              <Button size="sm" variant="outline-dark" eventKey="link-2">Deportes</Button>
            </Nav.Item>
          </Nav>
          <div>
            <Badge className="shadow" pill variant="light">
              {fecha}
            </Badge>
            <br />
            <Badge className="shadow-sm" pill variant="light">
              {hora}
            </Badge>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default BarraNav;