import React, { useContext } from "react";
import { UserContext } from "../components/UserContext";
import { Container, Row, Col } from "react-bootstrap";
import UserCard from "../components/UserCard";

const Gitary = () => {
  const { users } = useContext(UserContext);

  const gitaryUsers = users.filter((user) => user.kategoria === "Gitary");

  return (
    <Container style={{background: "#111111"}}>
      <h2>
        <span style={{ color: "#f8b296" }}>Gitarzyści</span>
      </h2>
      <Row>
        {gitaryUsers.map((user) => (
          <Col key={user.id} md={4}>
            <UserCard user={user} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gitary;
