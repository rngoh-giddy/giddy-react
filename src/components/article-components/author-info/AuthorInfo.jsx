import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./AuthorInfo.css";

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
          <Col className="col-6">
            <p className="article-share mx-auto">Share this article</p>
            <div className="images-row">
              <a href="https://www.facebook.com/getmegiddy">
                <Image
                  className="social-icons px-0"
                  src="https://getmegiddy-bucket.s3.us-east-2.amazonaws.com/facebook_article_share.png"
                  alt="facebook"
                />
              </a>
              <a href="https://twitter.com/GetMeGiddy">
                <Image
                  className="social-icons px-0"
                  src="https://getmegiddy-bucket.s3.us-east-2.amazonaws.com/twitter_article_share.png"
                />
              </a>
              <a href="https://www.instagram.com/getmegiddy/">
                <Image
                  className="social-icons px-0"
                  src="https://getmegiddy-bucket.s3.us-east-2.amazonaws.com/instagram_article_share.png"
                />
              </a>
              <a href="https://www.linkedin.com/company/giddytechnologies/">
                <Image
                  className="social-icons px-0"
                  src="https://getmegiddy-bucket.s3.us-east-2.amazonaws.com/linkdin_article_share.png"
                />
              </a>
            </div>
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
