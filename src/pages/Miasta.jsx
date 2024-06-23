import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Miasta.css";
import miastoImage from "../assets/miasto.jpg";
import { Link } from "react-router-dom";

const Miasta = () => {
  return (
    <Container fluid className="miastaBackground">
      <Row className="my-4">
        <Col>
          <img src={miastoImage} alt="Miasta" className="img-fluid" />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 style={{ margin: "20px" }}>Wybierz miasto i znajdź muzyka</h2>
        </Col>
      </Row>
      <Row>
        <Col md={4} className="my-2">
          <Link to="/ogloszenia/warszawa">
            <Button variant="primary" className="w-50">
              Warszawa
            </Button>
          </Link>
        </Col>
        <Col md={4} className="my-2">
          <Link to="/ogloszenia/krakow">
            <Button variant="primary" className="w-50">
              Kraków
            </Button>
          </Link>
        </Col>
        <Col md={4} className="my-2">
          <Link to="/ogloszenia/gdansk">
            <Button variant="primary" className="w-50">
              Gdańsk
            </Button>
          </Link>
        </Col>
        <Col md={4} className="my-2">
          <Link to="/ogloszenia/wroclaw">
            <Button variant="primary" className="w-50">
              Wrocław
            </Button>
          </Link>
        </Col>
        <Col md={4} className="my-2">
          <Link to="/ogloszenia/poznan">
            <Button variant="primary" className="w-50">
              Poznań
            </Button>
          </Link>
        </Col>
        <Col md={4} className="my-2">
          <Link to="/ogloszenia/rzeszow">
            <Button variant="primary" className="w-50">
              Rzeszów
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Miasta;
