import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ArticleOptions({
  title: propsTitle,
  image: propsImage,
}) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: 175,
        search: "Article Title",
        page_size: 2,
        page_number: 1,
      }),
    };
    fetch("https://api.getmegiddyapi.com/search-articles", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        // set the articles state using the data returned from the API
        setArticles(data.articles);
      })
      .catch((error) => {
        console.error("Error fetching articles: ", error);
      });
  }, []);

  return (
    <Container className="article-options">
      <Row>
        <Col sm={6} className="mx-auto article-options-bg">
          <h1 className="pb-2 pt-3 font-size-32">MORE FROM GIDDY</h1>
          {articles.slice(0, 2).map((article) => (
            <div className="col-5" key={article.id}>
              <img
                id="article-options-img"
                src={article?.image || propsImage}
                alt={article?.title || propsTitle}
              />
              <h3 className="article-options-taxonomy font-size-14">
                {article?.taxonomy.primary[0].name}
              </h3>
              <h3 className="article-options-title font-size-16">
                {article?.title || propsTitle}
              </h3>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
}
