import React from "react";
import { useEffect, useState } from "react";

import NavDropdown from "react-bootstrap/NavDropdown";
import "./MainNav.css";

export default function NavigationDropdown(title, target_url, direction) {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  return (
    <>
      <div className="site-nav-dropdown">
        <Container></Container>
      </div>
    </>
  );
}
