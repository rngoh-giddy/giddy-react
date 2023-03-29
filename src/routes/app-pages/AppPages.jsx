import React, { useEffect, useState, useRef } from "react";

import "../../components/article-components/Article.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AppPages.css";

import Slider from "react-slick";

import { BiChevronLeft, BiChevronRight, BiPlayCircle } from "react-icons/bi";

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
      <div className="app-pages-container">
        <div className="header col-lg-10 col-md-11 col-12 mx-auto col-sm-9">
          <div className="header-content col-md-6">

            {/* Temp div for Giddy Icon */}
              <div className="icon col-lg-10 col-11 col-md-12 mx-auto col-sm-12">
                <div
                  style={{
                    border: "1px solid black",
                    backgroundColor: "lightblue",
                    borderRadius: "5px",
                    width: 63,
                    height: 63,
                  }}
                ></div>
              </div>

            {/* Title */}
            <div className="app-pages-title-and-deck-row">
              <div className="col-lg-10 mx-auto text-align-start col-11 col-sm-12">
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
              </div>
            </div>

            {/* Play Store Badges */}
              <div className="mx-auto text-align-center col-lg-10 col-10 col-sm-12 col-md-10 badge-container">
                <div className="d-none d-sm-none d-md-inline-block">
                  <a href="#">
                    <img
                      height={50}
                      src="https://getmegiddy-bucket.s3.us-east-2.amazonaws.com/app_landing_page/app_landing_page_apple.png"
                    />
                  </a>
                </div>
                <div className="d-none d-sm-none d-md-inline-block">
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
              </div>
          </div>

          {/* Hero Image */}
          <div className="d-none d-sm-none d-md-flex col-md-6 hero-image-container">
            <img
              className="hero-image"
              src="https://getmegiddy-bucket.s3.us-east-2.amazonaws.com/app_landing_page/app_landing_page_hero.png"
            />
          </div>
        </div>
        <img
          className="d-xs-block d-sm-block d-md-none hero-image"
          src="https://getmegiddy-bucket.s3.us-east-2.amazonaws.com/app_landing_page/app_landing_page_hero.png"
        />

        {/* Video Demo */}
        <div className="video-container container-padding">
          <div className="mx-auto col-sm-11 col-md-11 header col-11">
            <div className="header-content col-md-6 text-align-center">
              <h1>The answer(s) to sexual health.</h1>
              <p>
                Thousands of medically-reviewed Giddy articles are the
                foundation for your sexual health queries.
              </p>
              <p className="video-link d-xs-flex d-sm-flex">
                <BiPlayCircle /> Watch Demo
              </p>
              <div className="video-player d-xs-flex d-sm-flex d-md-none"></div>
            </div>
            <div className="video-player-container col-md-6 d-none d-sm-none d-md-flex">
              <div className="video-player"></div>
            </div>
          </div>
        </div>

        {/* Get Answers */}
        <div className="container-padding answers-container">
          <div className="header mx-auto justify-content-center">
            <div className="header-content col-md-6">
              <img
                className="d-none d-sm-none d-md-block"
                width={"100%"}
                src="https://getmegiddy-bucket.s3.us-east-2.amazonaws.com/app_landing_page/app_landing_page_get_answers.png"
              />
            </div>
            <img
              className="d-xs-block d-sm-block d-md-none"
              width={"100%"}
              src="https://getmegiddy-bucket.s3.us-east-2.amazonaws.com/app_landing_page/app_landing_page_get_answers_mobile.png"
            />
            <div className="answers-content-container col-md-6 col-sm-8 col-11">
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
          </div>
        </div>
        
        {/* Save and personalize */}
        <div className="outer-position row">
          <div className="container-padding save-container">
            <div className="mx-auto text-align-center justify-content-center col-md-11">
              <div className="save-container-content col-md-10 col-sm-9 col-lg-7">
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
            </div>
          </div>
          <img
            className="background"
            src={
              "https://getmegiddy-bucket.s3.us-east-2.amazonaws.com/app_landing_page/app_landing_page_swirl_bg.png"
            }
            width={"100%"}
          />
          <div className="container-padding personalize-container col-11">
            <div className="mx-auto text-align-start col-sm-8 col-md-6 col-11">
              <img
                src={
                  "https://getmegiddy-bucket.s3.us-east-2.amazonaws.com/app_landing_page/app_landing_page_personalize.png"
                }
                width={"100%"}
              />
              <div className="d-xs-flex d-sm-flex d-md-none personalize-content-container">
                <h1>Personalize your journey</h1>
                <p>
                  Get recommendations for new content around culture, diseases &
                  disorders, stages of life and so much more.
                </p>
              </div>
            </div>
            <div className="text-align-start col-md-6 d-none d-md-flex personalize-content-container">
              <h1>Personalize your journey</h1>
              <p>
                Get recommendations for new content around culture, diseases &
                disorders, stages of life and so much more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
