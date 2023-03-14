import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import "../../components/article-components/Article.css";
import "./FisherArticle.css";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import ArticleImage from "../../components/article-components/ArticleImage";
import ArticleText from "../../components/article-components/ArticleText";
import "./FisherArticle.css";
import FisherArticleAuthor from "./FisherArticleAuthor";
import FisherArticleDeck from "./FisherArticleDeck";
import FisherArticleHeader from "./FisherArticleHeader";

export default function FisherArticle() {
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
            <div className="article-title">
              {article?.title && <FisherArticleHeader title={title} />}
            </div>
            <div className="article-deck">
              {article?.deck && <FisherArticleDeck deck={deck} />}
            </div>
          </Col>
          <Col sm={1}></Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm={6} xl={10}>
            <div className="article-author col-sm-3">
              {article?.author && (
                <FisherArticleAuthor
                  author={author}
                  published={article.published}
                />
              )}
            </div>
            <Col className="order-2 order-xl-1">
              <div className="article-body article-body-fisher">
                {article?.image && <ArticleImage image={image} />}
                {article?.body && <ArticleText body={body} />}
              </div>
            </Col>
          </Col>
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
