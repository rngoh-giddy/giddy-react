import React from "react";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ArticleHeader from "../Article/ArticleHeader";
import ArticleAuthor from "../Article/ArticleAuthor";
import ArticleImage from "../Article/ArticleImage";
import ArticleText from "../Article/ArticleText";
import ArticleDeck from "../Article/ArticleDeck";

import './MSArticle.css';

export default function MSArticle() {
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
        <Row className="justify-content-center">
          <Col xs={12} sm={10}>
            <div className="Article-Title">
              {article?.title && <ArticleHeader title={title} />}
            </div>
            <div className="Article-Deck">
              {article?.deck && <ArticleDeck deck={deck} />}
            </div>
          </Col>
        </Row>
        <Row xl={2} className="col-sm-10 mx-auto">
          <Col sm={8}>
            <div className="Article-Author">{article?.author && <ArticleAuthor author={author} published={article.published} />}</div>
            <div className="Article-Hero">{article?.image && <ArticleImage image={image} />}</div>
          </Col>
        </Row>
        <Row xl={2} className="col-sm-10 mx-auto">
            <div className="Article-Deck Article-Deck--italic align-items-start mt-4">
              {article?.deck && <ArticleDeck deck={deck} />}
            </div>
            <div className="Article-Body Article-Body--left-align">{article?.body && <ArticleText body={body} />}</div>
          <Col>
            Ad goes here
          </Col>
        </Row>
        <Row>
          <Container>
            <hr/>
            <Row>
              <Col sm={3}>
              <p>This is an edit on this page: {article?.author && article.author.name}</p>
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
            <hr/>
          </Container>
        </Row>
        <Row>
          <Container>
            <p>Related Articles</p>
            <hr/>
          </Container>
        </Row>
      </Container>
    </>
  );
}
