import React, { useContext } from "react";
import { UserContext } from "../components/UserContext";
import { Container, Row, Col } from "react-bootstrap";
import UserCard from "../components/UserCard";

const Smyczkowe = () => {
  const { users } = useContext(UserContext);

  const smyczkoweUsers = users.filter((user) => user.kategoria === "Instrumenty smyczkowe");

  return (
    <Container style={{background: "#111111"}}>
      <h2>
        <span style={{ color: "#f8b296" }}>Instrumenty smyczkowe</span>
      </h2>
      <Row>
        {smyczkoweUsers.map((user) => (
          <Col key={user.id} md={4}>
            <UserCard user={user} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Smyczkowe;
