import React from "react";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "react-bootstrap/Image";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function MainNav() {
  // console.log(article);

  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  return (
    <Container fluid>
      <Row>
        <Navbar key="lg" sticky="top" className="mb-3 Site-nav">
          <Container fluid>
            <Navbar.Brand href="/">
              <Image
                fluid
                src="https://getmegiddy-bucket.s3.us-east-2.amazonaws.com/GMG_Logo.svg"
                fill="currentColor"
                className="Site-logo"
              ></Image>
            </Navbar.Brand>
            <NavDropdown
              title="Sexual Health"
              id="collasible-nav-dropdown"
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Action</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Diseases & Disorders"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Action</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Culture & Lifestyle"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Action</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Videos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Action</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#features">Shop</Nav.Link>
            <Nav.Link href="#features">Sign in</Nav.Link>
          </Container>
        </Navbar>
      </Row>
    </Container>
  );
}
