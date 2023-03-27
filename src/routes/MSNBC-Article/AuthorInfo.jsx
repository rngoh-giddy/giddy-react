import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./style/AuthorInfo.scss";

import Image from "react-bootstrap/Image";

export default function AuthorInfo({ article }) {
  const { taxonomy } = article

  return (
    <Row>
      <Container className="author-container">
        <hr />
        <Row>
          <Col className="col-6">
            <p className="author">
              Author: <span>{article?.author && article.author.name}</span>
            </p>
            <p className="published">
              Published: <span>{article?.published && article.published}</span>
            </p>
          </Col>
        </Row>
        <Row>
          <p className="browse-by-tag">Browse by tag:</p>
          <div className="article-tags-container">
            {article?.taxonomy?.tags.map(({name, id, drupal_id}) => (
              <a className="article-tag" key={id} href={`https://getmegiddy.com/taxonomy/term/${drupal_id}`}>
              #{name}
              </a>
            )) }
          </div>
        </Row>
        <hr />
      </Container>
    </Row>
  );
}
