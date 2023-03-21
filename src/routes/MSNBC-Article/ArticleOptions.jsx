import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import './style/ArticleOptions.scss';

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
    <div className="more-from-giddy">
      <Col className="more-from-giddy-bg">
        <h2 className="col-11 mx-auto text-slate-pro-condensed-medium font-size-32">MORE FROM GIDDY</h2>
        {articles.slice(0, 2).map((article) => (
          <div className="col-7" key={article.id}>
            <img
              id="more-from-giddy-img"
              src={article?.image || propsImage}
              alt={article?.title || propsTitle}
            />
            <h3 className="more-from-giddy-taxonomy font-size-14">
              {article?.taxonomy.primary[0].name}
            </h3>
            <h3 className="more-from-giddy-title font-size-16">
              {article?.title || propsTitle}
            </h3>
          </div>
        ))}
      </Col>
    </div>
  );
}
