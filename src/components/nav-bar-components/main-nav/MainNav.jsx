import React from "react";
import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";

import "./MainNav.css";

import Row from "react-bootstrap/Row";

import LevelOneNav from "./LevelOneNav";

export default function MainNav() {
  // console.log(article);

  return (
    <div className="site-nav-container">
      <div className="site-nav-background fixed-top">
        <Container>
          <Row>
            <Navbar key="lg" sticky="top" className="mb-3 site-nav">
              <Container>
                <Navbar.Brand href="/">
                  <Image
                    fluid
                    src="https://getmegiddy-bucket.s3.us-east-2.amazonaws.com/GMG_Logo.svg"
                    fill="currentColor"
                    className="site-logo"
                  ></Image>
                </Navbar.Brand>
                <div className="site-nav-dropdown">
                  <div className="site-nav-dropdown-header">
                    Sexual Health{" "}
                    <Image src="https://getmegiddy-bucket.s3.us-east-2.amazonaws.com/dropdown_down_arrow.svg" />
                  </div>
                  <div className="site-nav-dropdown-content">
                    <a href="#">
                      Breast Health
                      <Image src="https://getmegiddy-bucket.s3.us-east-2.amazonaws.com/dropdown_right_arrow.svg" />
                    </a>
                    <a href="#">Endometriosis</a>
                    <a href="#">Erectile Dysfunction</a>
                  </div>
                </div>

                <LevelOneNav
                  nav_title="Sexual Health"
                  className=""
                ></LevelOneNav>
                <LevelOneNav nav_title="Diseases & Disorders"></LevelOneNav>
                <LevelOneNav nav_title="Culture & Lifestyle"></LevelOneNav>
                <LevelOneNav nav_title="Videos"></LevelOneNav>
                <Nav.Link href="#features">Shop</Nav.Link>
                <Nav.Link href="#features">Sign in</Nav.Link>
              </Container>
            </Navbar>
          </Row>
        </Container>
      </div>
    </div>
  );
}
