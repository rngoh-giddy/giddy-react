import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import "../../components/article-components/Article.css";

import { Image, Col, Container, Row } from "react-bootstrap";

import ArticleOptions from "../../components/article-components/ArticleOptions";
import ArticleImage from "../../components/article-components/ArticleImage";
import "./FisherArticle.css";
import FisherArticleAuthor from "./FisherArticleAuthor";
import FisherArticleDeck from "./FisherArticleDeck";
import FisherArticleHeader from "./FisherArticleHeader";
import FisherArticleText from "./FisherArticleText";
import RelatedArticlesContainer from "../../components/article-components/related-articles/RelatedArticlesContainer";

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
      <Container fluid className="fischer-container">
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
              <div className="article-body article-body-fisher pt-xl-0">
                {article?.image && <ArticleImage image={image} />}
                {article?.body && <FisherArticleText body={body} />}
                {article?.id && <ArticleOptions id={id} />}
              </div>
            </Col>
          </Col>
        </Row>

        {/* Author, publish, etc. */}
        <Row>
          <Container className="author-container">
            <hr />
            <Row>
              <Col className="col-6">
                <p className="author">
                  Author: <span>{article?.author && article.author.name}</span>
                </p>
                <p className="published">
                  Published:{" "}
                  <span>{article?.published && article.published}</span>
                </p>
              </Col>
              <Col className="col-6">
                <p className="article-share mx-auto">Share this article</p>
                <Row className="images-row">
                  <Image
                    className="social-icons px-0"
                    src="https://getmegiddy-bucket.s3.us-east-2.amazonaws.com/facebook_article_share.png"
                    alt="facebook"
                  />
                  <Image
                    className="social-icons px-0"
                    src="https://getmegiddy-bucket.s3.us-east-2.amazonaws.com/twitter_article_share.png"
                  />
                  <Image
                    className="social-icons px-0"
                    src="https://getmegiddy-bucket.s3.us-east-2.amazonaws.com/instagram_article_share.png"
                  />
                  <Image
                    className="social-icons px-0"
                    src="https://getmegiddy-bucket.s3.us-east-2.amazonaws.com/linkdin_article_share.png"
                  />
                </Row>
              </Col>
            </Row>
            <Row>
              <p className="browse-by-tag">Browse by tag:</p>
            </Row>
            <hr />
          </Container>
        </Row>

        {/* Related Articles */}
        <Row>
          <Container className="article-container-flex">
            <Col>
              <p className="article-related-header">Related Articles</p>
              <hr />
              {article?.id && (
                <RelatedArticlesContainer id={id} title={title} />
              )}
            </Col>
          </Container>
        </Row>
      </Container>
    </>
  );
}
