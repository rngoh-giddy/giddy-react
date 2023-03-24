import React, { useState, useEffect, useCallback, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";

export default function ArticleOptions({
  title: propsTitle,
  image: propsImage,
}) {
  const [articles, setArticles] = useState([]);

  const fetchArticles = useCallback(async () => {
    try {
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
      const response = await fetch(
        "https://api.getmegiddyapi.com/search-articles",
        requestOptions
      );
      const data = await response.json();
      setArticles(data.articles);
    } catch (error) {
      console.error("Error fetching articles: ", error);
    }
  }, []);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  const slicedArticles = useMemo(() => articles.slice(0, 2), [articles]);

  return (
    <div className="article-options">
      <Col className="mx-auto article-options-bg">
        <h1 className="pb-2 pt-3 ps-3 font-size-32">MORE FROM GIDDY</h1>
        {slicedArticles.map(({ id, image, title, taxonomy }) => (
          <div
            className="col-11 col-lg-10 col-xl-5 d-inline-flex gap-2 mt-3 ms-3"
            key={id}
          >
            <img
              id="article-options-img"
              src={image || propsImage}
              alt={title || propsTitle}
            />
            <div>
              <h3 className="article-options-taxonomy font-size-14">
                {taxonomy.primary[0].name}
              </h3>
              <h3 className="article-options-title font-size-16">
                {title || propsTitle}
              </h3>
            </div>
          </div>
        ))}
      </Col>
    </div>
  );
}
