import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";
import "./login.css";
import  axios from "axios";

import auth from "../helpers/auth";
import Swal from "sweetalert2";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await axios
        .post(`${process.env.REACT_APP_URL_PROD}/login`, {
          email,
          password,
        })
        .then((resp) => {
          localStorage.setItem("token", resp.data.token);
          auth.login(() => props.history.push("/form"));
          Swal.fire("Login correcto!", "", "success");
        })
        .catch((err) => {
          console.log(err);
          Swal.fire("error al loguearse", "", "error");
        });
        
    } catch (e) {
      alert(e.message);
    }
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}
