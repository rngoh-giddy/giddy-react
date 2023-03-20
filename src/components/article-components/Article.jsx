import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import "./Article.css";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import ArticleAuthor from "./ArticleAuthor";
import ArticleDeck from "./ArticleDeck";
import ArticleHeader from "./ArticleHeader";
import ArticleImage from "./ArticleImage";
import ArticleText from "./ArticleText";
import AuthorInfo from "./author-info/AuthorInfo";
import RelatedArticlesContainer from "./related-articles/RelatedArticlesContainer";
import Breadcrumbs from "./breadcrumbs/Breadcrumbs";

export default function Article() {
  const [article, setArticle] = useState([]);
  const { author, title, body, image, deck, taxonomy } = article;
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

  // console.log("id: ", id, "title: ", title);
  
  return (
    <>
      <Container fluid className="article-container">
        {/* ad butler */}
        <Row>
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

        {/* Breadcrumbs */}
        {article?.taxonomy && ( <Breadcrumbs taxonomy={taxonomy} /> )}

        {/* Article Header */}
        <Row>
          <Col className="col-lg-7 mx-auto">
            <div className="article-title">
              {article?.title && <ArticleHeader title={title} />}
            </div>
            <div className="article-deck">
              {article?.deck && <ArticleDeck deck={deck} />}
            </div>
          </Col>
        </Row>

        {/* Article Body */}
        <Row>
          <Col className="col-lg-7 mx-auto">
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
        </Row>

        {/* Author Information */}
        <AuthorInfo article={article}/>

        {/* Related Articles */}
        <Row>
          <Container className="article-container-flex">
            <Col>
              <p className="article-related-header">Related Articles</p>
              <hr />
              {article?.id && <RelatedArticlesContainer id={id} title={title} />}
            </Col>
          </Container>
        </Row>
      </Container>
    </>
  );
}
