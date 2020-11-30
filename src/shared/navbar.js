import React, {} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Badge, Button, Dropdown, Nav, Navbar, DropdownButton } from "react-bootstrap";
import logo from "../assets/logo_large.png";
import { Link } from "react-router-dom";
import getTime from '../helpers/getTime'
import {useFetch} from '../helpers/useFetch'

  const fecha = getTime.fecha();
  const hora = getTime.hora();
 
  
function BarraNav() {

  return (
    <>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        bg="info"
        height={70}
        className="justify-content-between mr-auto shadow"
      >
        <Navbar.Brand>
          <Link to={"/home"}>
            <img
              alt=""
              src={logo}
              width="245"
              height="60"
              className="d-inline-block align-top"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Item style={{ marginLeft: "10px" }}>
              <DropdownButton
                className="shadow-sm"
                variant="outline-dark"
                title="Politica"
              >
                <Dropdown.Item>Santa Fe</Dropdown.Item>
                <Dropdown.Item>Argentina</Dropdown.Item>
              </DropdownButton>
            </Nav.Item>
            <Nav.Item style={{ marginLeft: "10px" }}>
              <Button
                className="shadow-sm"
                variant="outline-dark"
                eventkey="link-1"
              >
                Covid-19
              </Button>
            </Nav.Item>
            <Nav.Item style={{ marginLeft: "10px" }}>
              <Button
                className="shadow-sm"
                variant="outline-dark"
                eventkey="link-2"
              >
                Cotizaciones
              </Button>
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

      <Cotizacion />
    </>
  );
}

const Cotizacion = () => {
  const url = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales';
  const data = useFetch(url)
  
  return (
    <>
      <Nav
        className="justify-content-center bg-light pt-3 pb-2 shadow"
        activeKey="/home"
      >
        {data.noticias.slice(0, 6).map(({ casa }) => {
          
          return (
            <Nav.Item key={casa.nombre} className="ml-5">
              <h6>
                {casa.nombre} Veta:{" "}
                <span style={{ color: "green" }}>{casa.venta}</span>
              </h6>
            </Nav.Item>
          );
        })}
      </Nav>
     
    </>
  );
}

export default BarraNav;