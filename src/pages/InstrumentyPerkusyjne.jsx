import React, { useContext } from "react";
import { UserContext } from "../components/UserContext";
import { Container, Row, Col } from "react-bootstrap";
import UserCard from "../components/UserCard";

const Perkusyjne = () => {
  const { users } = useContext(UserContext);

  const perkusyjneUsers = users.filter((user) => user.kategoria === "Instrumenty perkusyjne");

  return (
    <Container style={{background: "#111111"}}>
      <h2>
        <span style={{ color: "#f8b296" }}>Instrumenty perkusyjne</span>
      </h2>
      <Row>
        {perkusyjneUsers.map((user) => (
          <Col key={user.id} md={4}>
            <UserCard user={user} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Perkusyjne;
