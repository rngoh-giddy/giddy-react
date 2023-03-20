import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import "../../components/article-components/Article.css";
import "./EsquireArticle.css";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import ArticleAuthor from "../../components/article-components/ArticleAuthor";
import ArticleDeck from "../../components/article-components/ArticleDeck";
import ArticleHeader from "../../components/article-components/ArticleHeader";
import ArticleImage from "../../components/article-components/ArticleImage";
import ArticleText from "../../components/article-components/ArticleText";
import RelatedArticlesContainer from "../../components/article-components/related-articles/RelatedArticlesContainer";
import AuthorInfo from "../../components/article-components/author-info/AuthorInfo";

export default function EsquireArticle() {
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
      <Container fluid className="esquire-container">

        {/* ad butler */}
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

        {/* Title and Deck */}
        <Row className="esquire-title-and-deck-row">
          <Col className="mx-auto">
            <div className="article-title">
              {article?.title && <ArticleHeader title={title} />}
            </div>
            <div className="article-deck">
              {article?.deck && <ArticleDeck deck={deck} />}
            </div>
          </Col>
        </Row>

        {/* Article Image and Body */}
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

        {/* Author, publish, etc. */}
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
