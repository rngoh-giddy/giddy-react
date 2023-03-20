import React from "react";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ArticleHeader from "./ArticleHeader";
import ArticleAuthor from "./ArticleAuthor";
import ArticleImage from "./ArticleImage";
import ArticleText from "./ArticleText";
import ArticleDeck from "./ArticleDeck";
import Image from "react-bootstrap/Image";

export default function Article() {
  const [article, setArticle] = useState([]);
  const { author, title, body, image, deck } = article;
  const { id } = useParams();
  console.log(article);

  useEffect(() => {
    fetch(`https://api.getmegiddyapi.com/article/drupal/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.article);
        setArticle(data.article);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const script = document.createElement("script");
  script.src = "ad_served.js";
  script.async = true;
  script.onload = () => this.scriptLoaded();

  document.body.appendChild(script);

  return (
    <>
      <Container fluid>
        <Row>
          <Col></Col>
          <amp-ad
            type="adbutler"
            data-account="185102"
            data-zone="598602"
          ></amp-ad>
          <a
            href="https://servedbyadbutler.com/go2/;ID=185102;size=728x90;setID=598030"
            target="_blank"
          >
            <img
              src="https://servedbyadbutler.com/getad.img/;libID=3756107"
              width="728"
              height="90"
            />
          </a>
        </Row>
        <Row>
          <Col sm={1}></Col>
          <Col sm={10}>
            <div className="Article-Title">
              {article?.title && <ArticleHeader title={title} />}
            </div>
            <div className="Article-Deck">
              {article?.deck && <ArticleDeck deck={deck} />}
            </div>
          </Col>
          <Col sm={1}></Col>
        </Row>
        <Row>
          <Col sm={3}></Col>
          <Col sm={6}>
            <div className="Article-Author">
              {article?.author && (
                <ArticleAuthor author={author} published={article.published} />
              )}
            </div>
            <div className="Article-Hero">
              {article?.image && <ArticleImage image={image} />}
            </div>
            <div className="Article-Body">
              {article?.body && <ArticleText body={body} />}
            </div>
          </Col>
          <Col sm={3}></Col>
        </Row>
        <Row>
          <Container>
            <hr />
            <Row>
              <Col sm={3}>
                <p>Author: {article?.author && article.author.name}</p>
                <p>Published: {article?.published && article.published}</p>
              </Col>
              <Col sm={9}>
                <p>Share this article</p>
                <p></p>
              </Col>
            </Row>
            <Row>
              <p>Browse by tag:</p>
            </Row>
            <hr />
          </Container>
        </Row>
        <Row>
          <Container className="article-container-flex">
            <Col sm={9}>
              <p className="article-related-header">Related Articles</p>
              <hr />
            </Col>
          </Container>
        </Row>
      </Container>
    </>
  );
}
