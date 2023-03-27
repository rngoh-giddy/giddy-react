import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SpinningLoader from "../../components/misc/SpinningLoader";

import './style/ArticleOptions.scss';

export default function ArticleOptions({
  title: propsTitle,
  image: propsImage,
}) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
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
        setLoading(false);
        setArticles(data.articles);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching articles: ", error);
      });
  }, []);

  return (
    <>
      
      <div className="more-from-giddy bg-c-white">
        <Col className="more-from-giddy-bg px-3">
          <h2 className="more-from-giddy-title text-slate-pro-condensed-medium font-size-32">MORE FROM GIDDY</h2>
          <div className="more-from-giddy-article-container d-flex flex-column flex-lg-row">
            

            {loading && <div className="d-flex justify-content-center w-100"><SpinningLoader /></div>}

            {articles.slice(0, 2).map((article) => (
              <div className="col d-flex gap-2" key={article.id}>
                <img
                  class="more-from-giddy-img col-5"
                  src={article?.image || propsImage}
                  alt={article?.title || propsTitle}
                />

                <div>
                  <h3 className="more-from-giddy-taxonomy text-slate-pro-condensed-bold text-uppercase font-size-14 text-tidal">
                    {article?.taxonomy.primary[0].name}
                  </h3>
                  <h3 className="more-from-giddy-article font-size-16 text-slate-pro-medium">
                    {article?.title || propsTitle}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </Col>
      </div>
    </>
  );
}
