import React, { useContext } from "react";
import { UserContext } from "../components/UserContext";
import { Container, Row, Col } from "react-bootstrap";
import UserCard from "../components/UserCard";

const Gdansk = () => {
  const { users } = useContext(UserContext);

  const gdanskUsers = users.filter((user) => user.miasto === "Gdańsk");

  return (
    <Container style={{background: "#111111"}}>
      <h2>
        Muzycy z <span style={{ color: "#f8b296" }}>Gdańska</span>
      </h2>
      <Row>
        {gdanskUsers.map((user) => (
          <Col key={user.id} md={4}>
            <UserCard user={user} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gdansk;
