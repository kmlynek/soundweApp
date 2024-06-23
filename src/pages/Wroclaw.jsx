import React, { useContext } from "react";
import { UserContext } from "../components/UserContext";
import { Container, Row, Col } from "react-bootstrap";
import UserCard from "../components/UserCard";

const Wroclaw = () => {
  const { users } = useContext(UserContext);

  const wroclawUsers = users.filter((user) => user.miasto === "Wrocław");

  return (
    <Container style={{background: "#111111"}}>
      <h2>
        Muzycy z <span style={{ color: "#f8b296" }}>Wrocławia</span>
      </h2>
      <Row>
        {wroclawUsers.map((user) => (
          <Col key={user.id} md={4}>
            <UserCard user={user} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Wroclaw;
