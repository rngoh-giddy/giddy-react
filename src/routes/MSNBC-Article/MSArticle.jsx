import React from "react";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import ArticleHeader from "../Article/ArticleHeader";
// import ArticleAuthor from "./ArticleAuthorStack";
// import ArticleImage from "../Article/ArticleImage";
// import ArticleText from "../Article/ArticleText";
// import ArticleDeck from "../Article/ArticleDeck";

import ArticleHeader from "../../components/article-components/ArticleHeader";
import ArticleAuthor from "./ArticleAuthorStack";
import ArticleImage from "../../components/article-components/ArticleImage";
import ArticleText from "../../components/article-components/ArticleText";
import ArticleDeck from "../../components/article-components/ArticleDeck";

import "./MSArticle.css";

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
      <Container>
        {/* Title */}
        <Row className="justify-content-center">
          <Col xs={12} xl={6}>
            <div className="Article-Title">
              {article?.title && <ArticleHeader title={title} />}
            </div>
            <div className="Article-Deck align-items-start">
              {article?.deck && <ArticleDeck deck={deck} />}
            </div>
          </Col>
        </Row>

        {/* Author and Image */}
        <Row className="justify-content-center">
          <Col sm={8}>
            <div className="Article-Hero">
              {article?.image && <ArticleImage image={image} />}
            </div>
            <div className="Article-Deck Article-Deck--italic align-items-start mt-4">
              {article?.deck && <ArticleDeck deck={deck} />}
            </div>
          </Col>
        </Row>

        {/* Body */}
        <Row xl={2} className="mt-xl-3 col-xl-8 mx-auto">
          <Col xl={8}>
            <div className="Article-Author">
              {article?.author && (
                <ArticleAuthor author={author} published={article.published} />
              )}
            </div>
            <div className="Article-Body Article-Body--MSA Article-Body--left-align">
              {article?.body && <ArticleText body={body} />}
            </div>
            <hr />
            <div className="Article-Author">
              {article?.author && (
                <ArticleAuthor author={author} published={article.published} />
              )}
            </div>
            <Row>
              <p>Browse by tag:</p>
            </Row>
            <hr />
          </Col>

          <Col xl={3}>Ad goes here</Col>
        </Row>

        {/* Credits */}
        {/* <Row>
          <Container>
            
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
            
          </Container>
        </Row> */}

        {/* Related Articles */}
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
