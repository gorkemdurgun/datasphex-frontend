import Image from "next/image";
import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import beelogo from "../../public/beelogo.svg";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // do register
  };

  return (
    <div
      className="bg-light d-flex flex-column align-items-center justify-content-center"
      style={{
        height: "100vh",
      }}
    >
      <div className="card p-4" style={{ 
        width: "400px",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)"
      }}>
        <Image src={beelogo} width={100} height={100} alt="logo" className="mx-auto"/>
        <h1>Register</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleRegister}>
            Submit
          </Button>
        </Form>
        <p className="pt-4" >
          Already have an account? <h6 href="/login">Login</h6>
        </p>
      </div>
    </div>
  );
};

export default Register;
