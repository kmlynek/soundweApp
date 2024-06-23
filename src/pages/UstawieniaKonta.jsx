import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col, Card, Alert } from "react-bootstrap";
import { UserContext } from "../components/UserContext";
import "./UstawieniaKonta.css";

const UstawieniaKonta = () => {
  const { users, setUsers, currentUser, setCurrentUser } = useContext(UserContext);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  const handleSaveChanges = () => {
    const userIndex = users.findIndex(user => user.id === currentUser.id);

    if (userIndex !== -1) {
      const updatedUsers = [...users];
      updatedUsers[userIndex] = currentUser;
      setUsers(updatedUsers);
    }

    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const handleFileChange = (e) => {
    // Obsługa zmiany pliku
  };

  const handleVisibilityChange = () => {
    setCurrentUser({ ...currentUser, widocznosc: !currentUser.widocznosc });
  };

  const handleCategoryChange = (e) => {
    setCurrentUser({ ...currentUser, kategoria: e.target.value }); 
  };

  const handleCityChange = (e) => {
    setCurrentUser({ ...currentUser, miasto: e.target.value }); 
  };
    
  if (!currentUser) {
    return <div>Loading...</div>; // Lub inny komunikat o ładowaniu
  }

  return (
    <Container fluid className="pageBackground">
      <Row className="mt-5">
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Body>
              <Card.Title>Twoje konto</Card.Title>
              <Form>
                <Form.Group className="formGroup">
                  <Form.Label>Imię i Nazwisko</Form.Label>
                  <Form.Control
                    type="text"
                    name="nazwa"
                    value={currentUser.nazwa}
                    onChange={(e) =>
                      setCurrentUser({ ...currentUser, nazwa: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="formGroup">
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={currentUser.email}
                    onChange={(e) =>
                      setCurrentUser({ ...currentUser, email: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="formGroup">
                  <Form.Label>Hasło</Form.Label>
                  <Form.Control
                    type="password"
                    name="haslo"
                    value={currentUser.haslo}
                    onChange={(e) =>
                      setCurrentUser({ ...currentUser, haslo: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="formGroup">
                  <Form.Label>Numer kontaktowy</Form.Label>
                  <Form.Control
                    type="text"
                    name="numer"
                    value={currentUser.numer}
                    onChange={(e) =>
                      setCurrentUser({ ...currentUser, numer: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="formGroup">
                  <Form.Label>Miasto</Form.Label>
                  <Form.Control
                    as="select"
                    name="miasto"
                    value={currentUser.miasto}
                    onChange={handleCityChange}
                  >
                    <option value="Warszawa">Warszawa</option>
                    <option value="Kraków">Kraków</option>
                    <option value="Gdańsk">Gdańsk</option>
                    <option value="Wrocław">Wrocław</option>
                    <option value="Poznań">Poznań</option>
                    <option value="Rzeszów">Rzeszów</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group className="formGroup">
                  <Form.Label>Opis</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="opis"
                    value={currentUser.opis}
                    onChange={(e) => setCurrentUser({ ...currentUser, opis: e.target.value })}
                  />
                </Form.Group>
                <Form.Group className="formGroup">
                  <Form.Label>Kategoria</Form.Label>
                  <Form.Control
                    as="select"
                    name="kategoria"
                    value={currentUser.kategoria}
                    onChange={handleCategoryChange}                    
                  >
                    <option value="Wokal">Wokal</option>
                    <option value="Gitary">Gitary</option>
                    <option value="Instrumenty klawiszowe">
                      Instrumenty klawiszowe
                    </option>
                    <option value="Instrumenty perkusyjne">
                      Instrumenty perkusyjne
                    </option>
                    <option value="Instrumenty dęte">Instrumenty dęte</option>
                    <option value="Instrumenty smyczkowe">
                      Instrumenty smyczkowe
                    </option>
                    <option value="DJ">DJ</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group className="formGroup">
                  <Form.Check
                    type="checkbox"
                    id="widocznoscCheckbox"
                    label="Czy chcesz, aby twój profil był widoczny?"
                    checked={currentUser.widocznosc}
                    onChange={handleVisibilityChange}
                  />
                </Form.Group>
                <Form.Group className="formGroup">
                  <Form.Label>Zdjęcie</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                  {currentUser.zdjecie && (
                    <img
                      id="userImage"
                      src={currentUser.zdjecie}
                      alt="Podgląd zdjęcia"
                    />
                  )}
                </Form.Group>
                <Button
                  variant="primary"
                  className="w-100"
                  id="saveBtn"
                  onClick={handleSaveChanges}
                >
                  Zapisz zmiany
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {showAlert && (
        <Row className="mt-3">
          <Col md={{ span: 6, offset: 3 }}>
            <Alert
              variant="success"
              onClose={() => setShowAlert(false)}
              dismissible
            >
              Zmiany zostały zapisane!
            </Alert>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default UstawieniaKonta;
