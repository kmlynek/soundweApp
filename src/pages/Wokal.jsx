import React, { useContext } from "react";
import { UserContext } from "../components/UserContext";
import { Container, Row, Col } from "react-bootstrap";
import UserCard from "../components/UserCard";

const Wokal = () => {
  const { users } = useContext(UserContext);

  const wokalUsers = users.filter((user) => user.kategoria === "Wokal");

  return (
    <Container style={{background: "#111111"}}>
      <h2>
        <span style={{ color: "#f8b296" }}>Wokaliści</span>
      </h2>
      <Row>
        {wokalUsers.map((user) => (
          <Col key={user.id} md={4}>
            <UserCard user={user} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Wokal;
