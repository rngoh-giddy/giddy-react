import React from "react";
import { useEffect, useState } from "react";

import NavDropdown from "react-bootstrap/NavDropdown";
import { Container } from "react-bootstrap";

import "./MainNav.css";

export default function LevelTwoNav({
  nav_title,
  level,
  target_url,
  direction,
}) {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  return (
    <>
      <div
        className="site-nav-dropdown"
        onMouseEnter={showDropdown}
        onMouseLeave={hideDropdown}
      >
        <Container>
          <NavDropdown
            title={nav_title}
            direction="end"
            drop="end"
            id="collasible-nav-dropdown"
            className="site-nav-dropdown-item"
            show={show}
          >
            <LevelTwoNav nav_title="Breast Health"></LevelTwoNav>
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Action</NavDropdown.Item>
          </NavDropdown>
        </Container>
      </div>
    </>
  );
}
