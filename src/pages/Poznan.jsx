import React, { useContext } from "react";
import { UserContext } from "../components/UserContext";
import { Container, Row, Col } from "react-bootstrap";
import UserCard from "../components/UserCard";

const Poznan = () => {
  const { users } = useContext(UserContext);

  const poznanUsers = users.filter((user) => user.miasto === "Poznań");

  return (
    <Container style={{background: "#111111"}}>
      <h2>
        Muzycy z <span style={{ color: "#f8b296" }}>Poznania</span>
      </h2>
      <Row>
        {poznanUsers.map((user) => (
          <Col key={user.id} md={4}>
            <UserCard user={user} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Poznan;
