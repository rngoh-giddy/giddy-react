import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

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
import Quiz from "../../components/quizzes/quiz-object";
import TestQuiz from "../../components/quizzes/test-quiz";
import Breadcrumbs from "../../components/article-components/breadcrumbs/Breadcrumbs";
import { Breadcrumb } from "react-bootstrap";
import Image from "react-bootstrap/Image";

export default function EsquireArticle() {
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
        renderQuiz();
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  function renderQuiz() {
    const quizDiv = ReactDOM.createRoot(
      document.getElementById("react-quiz-embed")
    );
    quizDiv.render(<Quiz quizClass={"gray"} targetQuiz={TestQuiz.questions} />);
  }

  return (
    <>
      <Container fluid className="esquire-container">
        {/* ad butler */}
        <Row fluid className="">
          <Col className="col-lg-10 mx-auto embed-responsive top-ad-banner">
            <iframe
              width="970"
              height="250"
              marginwidth="0"
              marginheight="0"
              hspace="0"
              vspace="0"
              frameborder="0"
              scrolling="no"
              src="https://servedbyadbutler.com/creative-185102-3777586/index.html?clickTag=https%3A%2F%2Fservedbyadbutler.com%2Fredirect.spark%3FMID%3D185102%26plid%3D2041549%26setID%3D598602%26channelID%3D0%26CID%3D745773%26banID%3D520960802%26PID%3D0%26textadID%3D0%26tc%3D1%26adSize%3D970x250%26mt%3D1679092735306553%26spr%3D1%26hc%3D652bd2af5dc78e6621c430edb9c7f98fc5670a1c%26location%3D&clicktag=https%3A%2F%2Fservedbyadbutler.com%2Fredirect.spark%3FMID%3D185102%26plid%3D2041549%26setID%3D598602%26channelID%3D0%26CID%3D745773%26banID%3D520960802%26PID%3D0%26textadID%3D0%26tc%3D1%26adSize%3D970x250%26mt%3D1679092735306553%26spr%3D1%26hc%3D652bd2af5dc78e6621c430edb9c7f98fc5670a1c%26location%3D&__ab_location=https%3A%2F%2Fservedbyadbutler.com%2Fredirect.spark%3FMID%3D185102%26plid%3D2041549%26setID%3D598602%26channelID%3D0%26CID%3D745773%26banID%3D520960802%26PID%3D0%26textadID%3D0%26tc%3D1%26adSize%3D970x250%26mt%3D1679092735306553%26spr%3D1%26hc%3D652bd2af5dc78e6621c430edb9c7f98fc5670a1c%26location%3D&__ab_zone_id=598602&__ab_zone_name=Zone56_D_ArticleLP_Esquire_Top_BillBoard&__ab_publisher_id=165565&__ab_publisher_name=Giddy&__ab_campaign_id=745773&__ab_campaign_name=Eddie_Evergreen&__ab_advertiser_id=193177&__ab_advertiser_name=Eddie%20by%20Giddy&__ab_banner_id=520960802&__ab_extra_data=&spr=1"
            ></iframe>
          </Col>
        </Row>

        {/* Breadcrumbs */}
        {article?.taxonomy && <Breadcrumbs taxonomy={taxonomy} />}

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
          <Col className="col-lg-8 mx-auto">
            <div className="article-author">
              {article?.author && (
                <ArticleAuthor author={author} published={article.published} />
              )}
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="col-lg-3 mx-auto"></Col>
          <Col className="col-lg-6 mx-auto">
            <div className="article-hero">
              {article?.image && <ArticleImage image={image} />}
            </div>
            <div className="article-body">
              {article?.body && <ArticleText body={body} />}
            </div>
          </Col>
          <Col className="col-lg-3 mx-auto">
            <a
              className="sticky-nav"
              href="https://servedbyadbutler.com/go2/;ID=185102;size=190x600;setID=598603"
              target="_blank"
            >
              <img
                src="https://servedbyadbutler.com/adserve/;ID=185102;size=190x600;setID=598603;type=img;click=CLICK_MACRO_PLACEHOLDER"
                width="190"
                height="600"
              />
            </a>
          </Col>
        </Row>
        <Row>
          <Col className="col-lg-10 mx-auto top-ad-banner">
            <a
              href="https://servedbyadbutler.com/go2/;ID=185102;size=970x90;setID=598605"
              target="_blank"
            >
              <Image
                fluid
                src="https://servedbyadbutler.com/adserve/;ID=185102;size=970x90;setID=598605;type=img;click=CLICK_MACRO_PLACEHOLDER"
                width="970"
                height="90"
              />
            </a>
          </Col>
        </Row>

        {/* Author, publish, etc. */}
        <AuthorInfo article={article} />

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
        <Row>
          <Col className="col-lg-10 mx-auto top-ad-banner">
            <a
              href="https://servedbyadbutler.com/go2/;ID=185102;size=970x90;setID=598605"
              target="_blank"
            >
              <Image
                fluid
                src="https://servedbyadbutler.com/adserve/;ID=185102;size=970x90;setID=598605;type=img;click=CLICK_MACRO_PLACEHOLDER"
                width="970"
                height="90"
              />
            </a>
          </Col>
        </Row>
        <Row>
          <a
            href="https://servedbyadbutler.com/go2/;ID=185102;size=320x50;setID=598604"
            target="_blank"
          >
            <img
              src="https://servedbyadbutler.com/adserve/;ID=185102;size=320x50;setID=598604;type=img;click=CLICK_MACRO_PLACEHOLDER"
              width="320"
              height="50"
            />
          </a>
        </Row>
      </Container>
    </>
  );
}
