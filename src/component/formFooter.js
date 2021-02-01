import Axios from "axios";
import React, { useState } from "react";
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import Swal from "sweetalert2";

const url = `${process.env.REACT_APP_URL}/telegram`;
const FormFooter = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    msj: ''
  })

  async function handleSubmit(){
    await Axios.post(url,formData)
    .then( ({data}) => {
      if(data.ok) return Swal.fire(data.msj,"gracais por contactarnos", 'success')
      else return Swal.fire(data.msj, '', "error");
    })
  }


    return (
      <div>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">nombre</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            onChange={(e) =>
              setFormData({ ...formData, nombre: e.target.value })
            }
            value={formData.nombre}
            placeholder="escriba aqui"
            aria-label="Username"
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            value={formData.email}
            type="email"
            placeholder="escriba aqui"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup size="sm" className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Telefono</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            onChange={(e) =>
              setFormData({ ...formData, telefono: e.target.value })
            }
            value={formData.telefono}
            placeholder="escriba aqui"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup size="sm">
          <InputGroup.Prepend>
            <InputGroup.Text>Mensaje</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            onChange={(e) => setFormData({ ...formData, msj: e.target.value })}
            value={formData.msj}
            as="textarea"
            aria-label="With textarea"
          />
          <InputGroup.Prepend>
            <Button onClick={() => handleSubmit()} variant="outline-info">
              Enviar
            </Button>
          </InputGroup.Prepend>
        </InputGroup>
      </div>
    );
}


export default FormFooter;