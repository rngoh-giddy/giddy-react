import React from "react";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ArticleHeader from "../../components/article-components/ArticleHeader";
import ArticleAuthor from "./ArticleAuthorStack";
import ArticleImage from "../../components/article-components/ArticleImage";
import ArticleText from "../../components/article-components/ArticleText";
import ArticleDeck from "../../components/article-components/ArticleDeck";

import Quiz from "../../components/quizzes/quiz-object"
import TestQuiz from '../../components/quizzes/test-quiz';

import "./MSArticle.css";

export default function MSArticle() {
  const [article, setArticle] = useState([]);
  const { author, title, body, image, deck, taxonomy } = article;
  const { id } = useParams();
  //console.log(article);

  useEffect(() => {
    fetch(`https://api.getmegiddyapi.com/article/drupal/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.article);
        setArticle(data.article);
      })
      .catch((err) => {
        //console.log(err.message);
      });
  },[]);

  return (
    <>
    <Container fluid className="msnbc-bg p-0">
      <Container>
        {/* Top Ad */}
        <Col xl={8} className="ads top-ad mx-auto">
          Ad goes here
        </Col>
        
        {/* Title */}
        <Row className="justify-content-center msa-tax-title-deck">
          <Col xs={12} xl={6}>
            <div className="taxonomy-list mb-4">
              {
                taxonomy?.primary.map((el, index) => {
                  return <a className="taxonomy-list-item font-size-18 text-slate-pro-condensed-bold" href={`https://getmegiddy.com/taxonomy/term/${el.drupal_id}`}>{el.name}</a>
                })
              }
            </div>
            <div className="Article-Title text-slate-pro-condensed-bold mb-4">
              {article?.title && <ArticleHeader title={title} />}
            </div>
            <div className="Article-Deck article-deck-above align-items-start">
              {article?.deck && <ArticleDeck deck={deck} />}
            </div>
          </Col>
        </Row>

        {/* Author and Image */}
        <Row className="justify-content-center">
          <Col xl={8} className="px-0">
            <div className="Article-Hero">
              {article?.image && <ArticleImage image={image} />}
            </div>
            <div className="Article-Deck Article-Deck--italic article-deck-below text-dark font-size-16 align-items-start my-4">
              {article?.deck && <ArticleDeck deck={deck} />}
            </div>
          </Col>
        </Row>


        {/* Body */}
        <Row xl={2} className="mt-xl-3 col-xl-8 mx-auto">
          <Col xl={8} className="px-0">
            <div className="Article-Author">
              {article?.author && (
                <ArticleAuthor author={author} published={article.published} />
                )}
            </div>

            <Quiz quizClass={'blue'} targetQuiz={TestQuiz.questions}/>

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

          <Col xl={3} className="ads side-ad">Ad goes here</Col>
        </Row>

        {/* Related Articles */}
        <Row>
          <Container>
            <p>Related Articles</p>
            <hr />
          </Container>
        </Row>
      </Container>
      </Container>
    </>
  );
}
