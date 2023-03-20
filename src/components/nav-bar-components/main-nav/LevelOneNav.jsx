import React from "react";
import { useEffect, useState } from "react";

import NavDropdown from "react-bootstrap/NavDropdown";
import { Container } from "react-bootstrap";

import "./MainNav.css";
import LevelTwoNav from "./LevelTwoNav";

export default function LevelOneNav({ nav_title, target_url, direction }) {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  return (
    <>
      <div className="site-nav-dropdown-level-2">
        <Container>
          <NavDropdown
            title={nav_title}
            id="collasible-nav-dropdown"
            show={show}
            onMouseEnter={showDropdown}
            onMouseLeave={hideDropdown}
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
