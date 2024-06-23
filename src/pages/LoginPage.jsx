import React from "react";
import loginImg from "../assets/loginPage.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import LoginBtn from "../components/LoginBtn";
import LoginForm from "../components/LoginForm";



function LoginPage() {
  return (
    <Container fluid className="pageBackground">
      <Row className="justify-content-center align-items-center">
        <Col md={4}>
          <div class="text-center mb-5">
          <h3 class="fw-bold">Zacznij korzystać</h3>
          <p>Utwórz konto lub zaloguj się, aby zarządzać swoim profilem.
          </p>
          </div>
          <LoginBtn />
          <LoginForm />          
        </Col>
        <Col md={4}>
          <div>
            <Image src={loginImg} fluid rounded />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
