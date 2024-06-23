import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import "./Pomoc.css";

const Pomoc = () => {
  return (
    <Container className="pomocBackground">
      <Row className="my-4">
        <Col>
          <h2>
            <span style={{ color: "#f8b296" }}>Centrum </span>Pomocy
          </h2>
          <br></br>
          <p>          
            Znajdź odpowiedzi na najczęściej zadawane pytania lub skontaktuj się
            z nami.
          </p>
        </Col>
      </Row>
      <Row className="my-4">
        <Col>
          <h3>Najczęściej zadawane pytania</h3>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Jak mogę założyć konto?</Accordion.Header>
              <Accordion.Body>
                W celu rejestracji, wybierz "Załóż konto" na stronie głównej i
                uzupełnij odpowiedni formularz.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Jak mogę edytować moje dane?</Accordion.Header>
              <Accordion.Body>
                Możesz edytować swoje dane w zakładce "Ustawienia konta" po
                zalogowaniu się na swoje konto.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Jak mogę skontaktować się z obsługą klienta?
              </Accordion.Header>
              <Accordion.Body>
                Możesz skontaktować się z nami wysyłając e-mail na adres
                pomoc@soundwe.pl.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
      <Row className="my-4">
        <Col md={{ span: 6, offset: 3 }}>
          <h3 style={{ color: "#f8b296" }}>Kontakt</h3>
          <p>
            Jeśli nie znalazłeś odpowiedzi na swoje pytanie, <br></br>skontaktuj
            się bezpośrednio z nami.
          </p>
          <p>
            <strong>Email:</strong> pomoc@soundwe.pl
          </p>
          <p>
            <strong>Telefon:</strong> +48 123 123 123
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Pomoc;
