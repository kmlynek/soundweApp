import React, { useContext } from "react";
import { UserContext } from "../components/UserContext";
import { Container, Row, Col } from "react-bootstrap";
import UserCard from "../components/UserCard";

const Rzeszow = () => {
  const { users } = useContext(UserContext);

  const rzeszowUsers = users.filter((user) => user.miasto === "Rzeszów");

  return (
    <Container style={{background: "#111111"}}>
      <h2>
        Muzycy z <span style={{ color: "#f8b296" }}>Rzeszowa</span>
      </h2>
      <Row>
        {rzeszowUsers.map((user) => (
          <Col key={user.id} md={4}>
            <UserCard user={user} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Rzeszow;
