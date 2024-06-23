import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import UserCard from "./UserCard";
import "./UserContextFilters.css";

const UserContextFilters = () => {
  const { users, filters, setFilters } = useContext(UserContext);

  const handleMiastoChange = (event) => {
    const newFilters = { ...filters, miasto: event.target.value };
    setFilters(newFilters);
  };

  const handleKategoriaChange = (event) => {
    const newFilters = { ...filters, kategoria: event.target.value };
    setFilters(newFilters);
  };

  const clearFilters = () => {
    setFilters({ miasto: null, kategoria: null });
  };

  const filteredUsers = users.filter((user) => {
    let includeUser = true;

    if (filters.miasto && user.miasto !== filters.miasto) {
      includeUser = false;
    }

    if (filters.kategoria && user.kategoria !== filters.kategoria) {
      includeUser = false;
    }

    return includeUser;
  });

  return (
    <Container className="container-custom">
      <h2>
        Wszystkie <span style={{ color: "#f8b296" }}>Ogłoszenia</span>
      </h2>
      <Form>
        <Form.Group controlId="formMiasto" className="form-group">
          <Form.Label>Miasto:</Form.Label>
          <Form.Control
            as="select"
            value={filters.miasto || ""}
            onChange={handleMiastoChange}
          >
            <option value="">wszystkie miasta...</option>
            <option value="Wrocław">Wrocław</option>
            <option value="Warszawa">Warszawa</option>
            <option value="Kraków">Kraków</option>
            <option value="Rzeszów">Rzeszów</option>
            <option value="Gdańsk">Gdańsk</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formKategoria" className="form-group">
          <Form.Label>Kategoria:</Form.Label>
          <Form.Control
            as="select"
            value={filters.kategoria || ""}
            onChange={handleKategoriaChange}
          >
            <option value="">wszystkie kategorie...</option>
            <option value="Gitary">Gitary</option>
            <option value="Wokal">Wokal</option>
            <option value="Instrumenty klawiszowe">
              Instrumenty klawiszowe
            </option>
          </Form.Control>
        </Form.Group>

        <Button variant="secondary" onClick={clearFilters} className="btnForm">
          Wyczyść filtry
        </Button>
      </Form>

      <Row>
        {filteredUsers.map((user) => (
          <Col key={user.id} md={4} style={{ marginBottom: "20px" }}>
            <div className="user-card">
              <UserCard user={user} />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UserContextFilters;
