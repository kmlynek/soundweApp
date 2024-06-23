import React, { useContext } from "react";
import { UserContext } from "../components/UserContext";
import { Container, Row, Col } from "react-bootstrap";
import UserCard from "../components/UserCard";

const InstrumentyKlawiszowe = () => {
  const { users } = useContext(UserContext);

  const klawiszoweUsers = users.filter((user) => user.kategoria === "Instrumenty klawiszowe");

  return (
    <Container style={{background: "#111111"}}>
      <h2>
        <span style={{ color: "#f8b296" }}>Instrumenty klawiszowe</span>
      </h2>
      <Row>
        {klawiszoweUsers.map((user) => (
          <Col key={user.id} md={4}>
            <UserCard user={user} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default InstrumentyKlawiszowe;