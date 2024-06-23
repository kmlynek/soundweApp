import React from 'react';
import { Card } from 'react-bootstrap';

const UserCard = ({ user }) => {
  const { nazwa, email, miasto, kategoria, opis, zdjecie } = user;

  return (
    <Card>
      <Card.Img variant="top" src={zdjecie} alt={nazwa} />
      <Card.Body>
        <Card.Title>{nazwa}</Card.Title>
        <Card.Text>
          <strong>Email:</strong> {email} <br />
          <strong>Miasto:</strong> {miasto} <br />
          <strong>Kategoria:</strong> {kategoria} <br />
          <strong>Opis:</strong> {opis}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
