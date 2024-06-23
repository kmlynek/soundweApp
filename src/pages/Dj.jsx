import React, { useContext } from "react";
import { UserContext } from "../components/UserContext";
import { Container, Row, Col } from "react-bootstrap";
import UserCard from "../components/UserCard";

const Dj = () => {
  const { users } = useContext(UserContext);

  const djUsers = users.filter((user) => user.kategoria === "DJ");

  return (
    <Container style={{background: "#111111"}}>
      <h2>
        <span style={{ color: "#f8b296" }}>Dj</span>
      </h2>
      <Row>
        {djUsers.map((user) => (
          <Col key={user.id} md={4}>
            <UserCard user={user} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Dj;
