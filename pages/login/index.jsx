import Image from "next/image";
import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import beelogo from "../../public/beelogo.svg";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "gorkemdurgun" && password === "123123123") {
      router.push("/dashboard");
    } else {
      alert("Login Failed");
    }
  };

  return (
    <div
      className="bg-light d-flex flex-column align-items-center justify-content-center"
      style={{
        height: "100vh",
      }}
    >
      <div
        className="card p-4"
        style={{
          width: "400px",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        }}
      >
        <Image src={beelogo} width={100} height={100} alt="logo" className="mx-auto" />
        <h1>Login</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleLogin}>
            Submit
          </Button>
        </Form>
        <p className="pt-4">
          Dont have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
