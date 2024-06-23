import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menuDropdown">
      <DropdownButton variant="third" id="dropdown-item-button">
      <Link className="link" to="/wszystkie-ogloszenia">
          <Dropdown.Item className="menuBtn" as="button">
            Ogłoszenia
          </Dropdown.Item>
          </Link>
        <Link className="link" to="/miasta">
          <Dropdown.Item className="menuBtn" as="button">
            Miasta
          </Dropdown.Item>
        </Link>
        <Link className="link" to="/ustawienia-konta">
          <Dropdown.Item className="menuBtn" as="button">
            Ustawienia konta
          </Dropdown.Item>
        </Link>
        <Link className="link" to="/pomoc">
          <Dropdown.Item className="menuBtn" as="button">
            Pomoc
          </Dropdown.Item>
        </Link>
        <Link className="link" to="/o-nas">
          <Dropdown.Item className="menuBtn" as="button">
            O nas
          </Dropdown.Item>
        </Link>
      </DropdownButton>
    </div>
  );
};

export default Menu;
