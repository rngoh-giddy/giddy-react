import React from "react";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import "./Article.css";

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
            href="https://servedbyadbutler.com/go2/;ID=185102;size=970x250;setID=598602"
            target="_blank"
          >
            <img
              src="https://servedbyadbutler.com/adserve/;ID=185102;size=970x250;setID=598602;type=img;click=CLICK_MACRO_PLACEHOLDER"
              width="970"
              height="250"
            />
          </a>
        </Row>
        <Row>
          <Col sm={1}></Col>
          <Col sm={10}>
            <div className="article-title">
              {article?.title && <ArticleHeader title={title} />}
            </div>
            <div className="article-deck">
              {article?.deck && <ArticleDeck deck={deck} />}
            </div>
          </Col>
          <Col sm={1}></Col>
        </Row>
        <Row>
          <Col sm={3}></Col>
          <Col sm={6}>
            <div className="article-author">
              {article?.author && (
                <ArticleAuthor author={author} published={article.published} />
              )}
            </div>
            <div className="article-hero">
              {article?.image && <ArticleImage image={image} />}
            </div>
            <div className="article-body">
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
