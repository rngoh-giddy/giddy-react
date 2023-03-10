import React from "react";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Fisher Article Components
import FisherArticleHeader from "./FisherArticleHeader";
import FisherArticleAuthor from "./FisherArticleAuthor";
import ArticleImage from "../Article/ArticleImage";
import ArticleText from "../Article/ArticleText";
import FisherArticleDeck from "./FisherArticleDeck";

// Fisher Article CSS
import "./FisherArticle.css";

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
        <Row></Row>
        <Row>
          <Col sm={1}></Col>
          <Col sm={10}>
            <div className="Article-Title align-items-xl-end">
              {article?.title && <FisherArticleHeader title={title} />}
            </div>
            <div className="Article-Deck">
              {article?.deck && <FisherArticleDeck deck={deck} />}
            </div>
          </Col>
          <Col sm={1}></Col>
        </Row>
        <Row>
          <Col sm={3}></Col>
          <Col sm={6}>
            <div className="Article-Author col-sm-3">
              {article?.author && (
                <FisherArticleAuthor
                  author={author}
                  published={article.published}
                />
              )}
            </div>
            <Row>
              <div className="Article-Hero">
                {article?.image && <ArticleImage image={image} />}
              </div>
              <div className="Article-Body">
                {article?.body && <ArticleText body={body} />}
              </div>
            </Row>
          </Col>
          <Col sm={3}></Col>
        </Row>
        <Row>
          <Container>
            <hr />
            <Row>
              <Col sm={3}>
                <p className="text-gray">
                  Author: {article?.author && article.author.name}
                </p>
                <p className="text-gray">
                  Published: {article?.published && article.published}
                </p>
              </Col>
              <Col sm={9}>
                <p className="font-size-20 fw-bold">Share this article</p>
                <p></p>
              </Col>
            </Row>
            <Row className="fw-bold">
              <p>Browse by tag:</p>
            </Row>
            <hr />
          </Container>
        </Row>
        <Row>
          <Container>
            <p>Related Articles</p>
            <hr />
          </Container>
        </Row>
      </Container>
    </>
  );
}
