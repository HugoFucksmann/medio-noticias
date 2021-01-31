import React, { } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Badge, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/icon/logo.svg";
import { Link } from "react-router-dom";
import {getFecha, getHora} from '../helpers/getTime'
import {useFetch} from '../helpers/useFetch'

  const fecha = getFecha();
  const hora = getHora();

  const url =
    "https://api.openweathermap.org/data/2.5/weather?lat=-31.6333&lon=-60.7&appid=a1cad7375df343ae073262a6ba4db56f&lang=es&units=metric";
 
 
function BarraNav() {
   const  clima  = useFetch(url);
  
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
          <Nav className="m-auto"></Nav>
          <div>
            <Badge
              className="shadow"
              pill
              variant="light"
              style={{ fontSize: "0.9em" }}
            >
              {fecha}
            </Badge>
            <br />
            {!clima.loading && (
              <Badge
                className="shadow"
                pill
                variant="light"
                style={{ fontSize: "0.8em" }}
              >
               Temperatura: {clima.data.main.temp}ºC
              </Badge>
            )}
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
            <p>
              <b>Cotización del dia:</b>
            </p>
          </h6>
        </Nav.Item>
        {data.data.slice(0, 2).map(({ casa }) => {
          return (
            <Nav.Item key={casa.nombre} className="ml-5">
              <p className="textoNota text-black cel-cotizacion">
                {casa.nombre}&nbsp; compra:&nbsp;
                <span style={{ color: "red" }}>{casa.compra}</span>&nbsp;
                venta:&nbsp;
                <span style={{ color: "green" }}>{casa.venta}</span>
              </p>
            </Nav.Item>
          );
        })}
      </Nav>
    </>
  );
}

const CotizacionBN = async () => {

  const data = await fetch("https://api.estadisticasbcra.com/base", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDM2NTI5NzgsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJodWdvZmZ1a3NtYW5uQGdtYWlsLmNvbSJ9.8KSfOgjnXz9W73LJo9JG7i2-7QXPgqjnDBSLi3Fgj9uDcumkl-zBGfCjlacliYJrOn-qreGBd98e1ylHCpSIpA",
    },
  }).catch((e) => console.log(e));
 
  console.log(data);
  return data

}

export default BarraNav;