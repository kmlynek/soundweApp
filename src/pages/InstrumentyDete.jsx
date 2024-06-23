import React, { useContext } from "react";
import { UserContext } from "../components/UserContext";
import { Container, Row, Col } from "react-bootstrap";
import UserCard from "../components/UserCard";

const Dete = () => {
  const { users } = useContext(UserContext);

  const deteUsers = users.filter((user) => user.kategoria === "Instrumenty dęte");

  return (
    <Container style={{background: "#111111"}}>
      <h2>
        <span style={{ color: "#f8b296" }}>Instrumenty dęte</span>
      </h2>
      <Row>
        {deteUsers.map((user) => (
          <Col key={user.id} md={4}>
            <UserCard user={user} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Dete;
