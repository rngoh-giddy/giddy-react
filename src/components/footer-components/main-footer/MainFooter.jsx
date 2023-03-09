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

export default function MainFooter() {
  // console.log(article);

  return (
    <>
      <Container fluid className="site-footer">
        <Row>
            <Col sm={3} className="site-footer-logo">
            <Image fluid src='https://getmegiddy.com/themes/custom/gmg_theme/logo.svg' fill="currentColor" className='Site-logo'></Image>
            </Col>
            <Col sm={6} className="site-footer-tag-line">“Tagline here with a maximum character count of approximately seventy."</Col>
            <Col sm={3}></Col>
        </Row>
        <Row>
            <hr/>
        </Row>
        <Row>
            <Col sm={3} className="site-footer-columns">
                <h2>Explore</h2>
                <p>Culture & Lifestyle</p>
                <p>Sexual Health</p>
                <p>Diseases & Disorders</p>
                <p>Stages of Life</p>
                <p>Videos</p>
            </Col>
            <Col sm={3} className="site-footer-columns">
                <h2>Customer Service</h2>
                <p>Get in Touch With Us</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Cookie Policy</p>
            </Col>
            <Col sm={3} className="site-footer-columns">
                <h2>Company</h2>
                <p>About Us</p>
                <p>Medical Review</p>
                <p>Terms Glossary</p>
                <p>Our Austors</p>
            </Col>
            <Col sm={3} className="site-footer-info">
                <p>
                Our website services, content, and products are for informational purposes only. Giddy does not provide medical advice, diagnosis, or treatment. See additional information.
                </p>
            </Col>
        </Row>
        <Row>
            <Col className="site-footer-copyright">
            <p>© Copyright 2021 Giddy®   |   All Rights Reserved.</p>
            </Col>
        </Row>
      </Container>
    </>
  );
}
