import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const NavTab = () => {
  return (
    <Navbar variant="dark">
    <Container>
      <Link className='link' to="/">
        <Navbar.Brand className="navBrand">
          Sound<span style={{ color: "#f8b296" }}>we</span>
        </Navbar.Brand>
      </Link>
      <Navbar.Text>
        <Link className='link' to="/login">
          <Button variant="outline-secondary" className="navBtn">
            Zaloguj się / Załóż konto
          </Button>
        </Link>
      </Navbar.Text>
    </Container>    
  </Navbar>
  )
}

export default NavTab