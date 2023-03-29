import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom/client";

import { useParams } from "react-router-dom";

import "../../components/article-components/Article.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AppPages.css";

import Slider from "react-slick";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export default function AppPages() {
  const slider = useRef(null);

  const images = [
    {
      imageUrl:
        "https://getmegiddy-bucket.s3.us-east-2.amazonaws.com/app_landing_page/app_landing_page_slider_1.png",
      title: "Topics",
      content: "Browse dozens of categories",
    },
    {
      imageUrl:
        "https://getmegiddy-bucket.s3.us-east-2.amazonaws.com/app_landing_page/app_landing_page_slider_2.png",
      title: "Topic 2",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    },
    {
      imageUrl:
        "https://getmegiddy-bucket.s3.us-east-2.amazonaws.com/app_landing_page/app_landing_page_slider_3.png",
      title: "Topic 3",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    },
  ];
  const settings = {
    dots: true,
    arrows: false,
  };

  const renderCarousel = () => {
    return images.map((image, index) => (
      <div
        data-index={index}
        key={image.title}
        className="carousel-image-container"
      >
        <img className="carousel-image" src={image.imageUrl} />
        <div className="slider-text-content">
          <h2>{image.title}</h2>
          <p>{image.content}</p>
        </div>
      </div>
    ));
  };
  return (
    <>
      <Container fluid className="app-pages-container">
        <Row>
          <Col className="header col-lg-10 col-md-11 col-11 mx-auto col-sm-9">
            <div className="header-content col-md-6">
              {/* Temp div for Giddy Icon */}
              <Row>
                <Col className="col-lg-10 col-11 col-md-12 mx-auto col-sm-9">
                  <div
                    style={{
                      border: "1px solid black",
                      backgroundColor: "lightblue",
                      borderRadius: "5px",
                      width: 63,
                      height: 63,
                    }}
                  ></div>
                </Col>
              </Row>
              {/* Title */}
              <Row className="app-pages-title-and-deck-row">
                <Col className="col-lg-6 mx-auto text-align-start col-11 col-sm-12">
                  <div className="title-container">
                    <h1>Get your sexual health answers with Ask Giddy AI</h1>
                  </div>
                  <div className="content-container">
                    <p>
                      Ask questions and discover more about care pathways that
                      work for{" "}
                      <em>
                        <strong>you</strong>
                      </em>
                      .
                    </p>
                  </div>
                </Col>
              </Row>
              {/* Play Store Badges */}
              <Row className="mx-auto">
                <Col className="badge-container mx-auto text-align-center col-lg-6 col-11 col-sm-9">
                  <div className="d-none d-sm-none d-md-block">
                    <a href="#">
                      <img
                        height={50}
                        src="https://getmegiddy-bucket.s3.us-east-2.amazonaws.com/app_landing_page/app_landing_page_apple.png"
                      />
                    </a>
                  </div>
                  <div className="d-none d-sm-none d-md-block">
                    <a href="#">
                      <img
                        height={50}
                        src="https://getmegiddy-bucket.s3.us-east-2.amazonaws.com/app_landing_page/app_landing_page_android.png"
                      />
                    </a>
                  </div>
                  <div className="d-xs-block d-sm-block d-md-none">
                    <a href="#">
                      <img
                        height={50}
                        src="https://getmegiddy-bucket.s3.us-east-2.amazonaws.com/app_landing_page/app_landing_page_apple_mobile.png"
                      />
                    </a>
                  </div>
                  <div className="d-xs-block d-sm-block d-md-none">
                    <a href="#">
                      <img
                        height={50}
                        src="https://getmegiddy-bucket.s3.us-east-2.amazonaws.com/app_landing_page/app_landing_page_android_mobile.png"
                      />
                    </a>
                  </div>
                  <br />
                </Col>
              </Row>
            </div>
            {/* Hero Image */}
            <Col className="col-md-6">
              <img
                className="hero-image"
                src="https://getmegiddy-bucket.s3.us-east-2.amazonaws.com/app_landing_page/app_landing_page_hero.png"
              />
            </Col>
          </Col>
        </Row>
        {/* Video Demo */}
        <Row className="video-container container-padding">
          <Col className="mx-auto col-sm-11 header">
            <Col md={{ order: 2 }} className="header-content col-md-6">
              <h1>The answer(s) to sexual health.</h1>
              <p>
                Thousands of medically-reviewed Giddy articles are the
                foundation for your sexual health queries.
              </p>
              <br />
              <div>
                <p className="video-link">Watch Demo</p>
              </div>
            </Col>
            <Col md={{ order: 1 }} className="col-md-6">
              <div className="video-player"></div>
            </Col>
          </Col>
        </Row>
        {/* Get Answers */}
        <Row className="container-padding">
          <Col className="header mx-auto justify-content-center">
            <Col className="header-content col-md-6">
              <img
                className="d-none d-sm-none d-md-block"
                width={"100%"}
                src="https://getmegiddy-bucket.s3.us-east-2.amazonaws.com/app_landing_page/app_landing_page_get_answers.png"
              />
              <img
                className="d-xs-block d-sm-block d-md-none"
                width={"100%"}
                src="https://getmegiddy-bucket.s3.us-east-2.amazonaws.com/app_landing_page/app_landing_page_get_answers_mobile.png"
              />
            </Col>
            <Col className="col-md-6">
              <div className="answers-container">
                <h1>Get answers in seconds</h1>
                <p>
                  Powered by AI integration to get you accurate, unbiased and
                  relevant information on dozens of sexual health topics
                  including:
                </p>
                <ul>
                  <li>Fertility</li>
                  <li>Dating & relationships</li>
                  <li>Erectile dysfunction</li>
                  <li>Breast cancer</li>
                </ul>
              </div>
            </Col>
          </Col>
        </Row>
        {/* Save and personalize */}
        <div className="outer-position">
          <Row className="container-padding save-container">
            <Col className="mx-auto text-align-center justify-content-center col-md-9">
              <div className="save-container-content">
                <h1>Save & share</h1>
                <p>
                  Create a library of curated articles to learn more about
                  sexual health for yourself and loved ones.
                </p>
              </div>
              <div className="image-carousel">
                <div
                  className="btn-prev"
                  onClick={() => slider?.current?.slickPrev()}
                >
                  <BiChevronLeft />
                </div>
                <div className="slider-container">
                  <Slider ref={slider} {...settings}>
                    {renderCarousel()}
                  </Slider>
                </div>
                <div
                  className="btn-next"
                  onClick={() => slider?.current?.slickNext()}
                >
                  <BiChevronRight />
                </div>
              </div>
            </Col>
          </Row>
          <img
            className="background"
            src={
              "https://getmegiddy-bucket.s3.us-east-2.amazonaws.com/app_landing_page/app_landing_page_swirl_bg.png"
            }
            width={"100%"}
          />
          <Row className="container-padding personalize-container">
            <Col className="mx-auto text-align-start col-sm-8">
              <img
                src={
                  "https://getmegiddy-bucket.s3.us-east-2.amazonaws.com/app_landing_page/app_landing_page_personalize.png"
                }
                width={"100%"}
              />
              <h1>Personalize your journey</h1>
              <p>
                Get recommendations for new content around culture, diseases &
                disorders, stages of life and so much more.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
