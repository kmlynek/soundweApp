import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./ONas.css";

const ONas = () => {
  return (
    <Container fluid className="onas-background">
      <Row className="my-4">
        <Col>
          <h2 className="onas-header">O nas</h2>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Card className="onas-card mb-4">
            <Card.Body>
              <Card.Title className="onas-card-title">Nasza Misja</Card.Title>
              <Card.Text className="onas-card-text">
                Naszym celem jest połączenie muzyków z całej Polski i stworzenie społeczności, w której każdy może znaleźć idealnego partnera do grania. 
                Chcemy, aby muzyka łączyła ludzi.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Card className="onas-card mb-4">
            <Card.Body>
              <Card.Title className="onas-card-title" style={{color: "#f8b296"}}>Nasza Historia</Card.Title>
              <Card.Text className="onas-card-text">
                Projekt rozpoczął się w 2024 roku z myślą o wszystkich, którzy pragną grać wypełnić luki w swoim harmonogramie, bądź nawiązać stałą współpracę z innymi muzykami.
                Od tamtej pory stale się rozwijamy i poszerzamy naszą bazę użytkowników.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Card className="onas-card mb-4">
            <Card.Body>
              <Card.Title className="onas-card-title">Nasz Zespół</Card.Title>
              <Card.Text className="onas-card-text">
                Nasz zespół składa się z pasjonatów muzyki i technologii. Jesteśmy tutaj, aby wspierać społeczność muzyczną i pomagać w realizacji marzeń muzycznych.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ONas;
