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

import "./MainFooter.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function MainFooter() {
  // console.log(article);

  return (
    <>
      <div className="site-footer">
        <Container className="site-footer">
          <Row>
            <Col sm={2} className="site-footer-logo">
              <Image
                src="https://getmegiddy.com/themes/custom/gmg_theme/logo.svg"
                fill="currentColor"
                className="site-logo"
              ></Image>
            </Col>
            <Col sm={6} className="site-footer-tag-line">
              <div>The Authority on Sexual Health.</div> We want to help readers
              take control of their sexual health with illuminating content that
              will enhance their quality of life.
            </Col>
            <Col sm={1}></Col>
            <Col sm={3} className="site-footer-social-share">
              <Image src="https://getmegiddy-bucket.s3.us-east-2.amazonaws.com/facebook_article_share.png" />
              <Image src="https://getmegiddy-bucket.s3.us-east-2.amazonaws.com/twitter_article_share.png" />
              <Image src="https://getmegiddy-bucket.s3.us-east-2.amazonaws.com/instagram_article_share.png" />
              <Image src="https://getmegiddy-bucket.s3.us-east-2.amazonaws.com/linkdin_article_share.png" />
            </Col>
          </Row>
          <Row>
            <hr />
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
                By subscribing, you agree to the Terms of Use and Privacy
                Policy.
              </p>
              <p>
                Our website services, content, and products are for
                informational purposes only. Giddy does not provide medical
                advice, diagnosis, or treatment. See additional information.
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="site-footer-copyright">
              <p>© Copyright 2021 Giddy® | All Rights Reserved.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
