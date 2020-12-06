import React, {} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Badge, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/icon/logo.svg";
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
        bg="light"
        height={70}
        className="justify-content-between mr-auto"
      >
        <Navbar.Brand>
          <Link to={"/home"}>
            <img
              alt="logo"
              src={logo}
              width={250}
              className="d-inline-block align-top"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
          
          </Nav>
          <div>
            <Badge
              className="shadow"
              pill
              variant="light"
              style={{ fontSize: "0.8em" }}
            >
              {fecha}
            </Badge>
            <br />
            <Badge
              className="shadow-sm"
              pill
              variant="light"
              style={{ fontSize: "0.7em" }}
            >
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
        className="justify-content-center bg-light pt-2 pb-2 shadow"
        activeKey="/home"
      >
        <Nav.Item>
          <h6 className="textoNota text-info">
            <p><b>Cotizacion del dia</b></p>
          </h6>
        </Nav.Item>
        {data.noticias.slice(0, 2).map(({ casa }) => {
          return (
            <Nav.Item key={casa.nombre} className="ml-5">
              <p className="textoNota text-black cel-cotizacion">
                {casa.nombre}&nbsp; compra:&nbsp;
                <span style={{ color: "red" }}>{casa.compra}</span>&nbsp; venta:&nbsp;
                <span style={{ color: "green" }}>{casa.venta}</span>
              </p>
            </Nav.Item>
          );
        })}
      </Nav>
    </>
  );
}

export default BarraNav;


/*   <Nav.Item className="mb-2 ml-2">
              <DropdownButton
                className="shadow-sm"
                variant="outline-dark"
                title="Politica"
              >
                <Dropdown.Item>Santa Fe</Dropdown.Item>
                <Dropdown.Item>Argentina</Dropdown.Item>
              </DropdownButton>
            </Nav.Item>
            <Nav.Item className="mb-2 ml-2">
              <Button
                className="shadow-sm"
                variant="outline-dark"
                eventkey="link-1"
              >
                Covid-19
              </Button>
            </Nav.Item>
            <Nav.Item className="mb-2 ml-2">
              <Button
                className="shadow-sm"
                variant="outline-dark"
                eventkey="link-2"
              >
                Otra cosa
              </Button>
            </Nav.Item>  */