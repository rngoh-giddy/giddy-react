import React from "react";
import { useEffect, useState } from "react";

import "./RelatedArticles.css";

export default function RelatedArticlesContainer({ id, title }) {
  const [related_articles, getRelatedArticles] = useState([]);

  useEffect(() => {
    fetch(`https://api.getmegiddyapi.com/search-articles`, {
      method: "POST",
      body: JSON.stringify({
        id: id,
        search: `${title}`,
        page_size: 5,
        page_number: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.articles);
        getRelatedArticles(data.articles);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  console.log("related_articles: ", related_articles);

  return (
    <div className="related-articles-container">
      {related_articles.slice(0, 4).map((article, index) => (
        <a href={article.url} key={index}>
          <div
            className="related-article-container d-flex flex-column-reverse flex-lg-row mb-4"
          >
            <img className="mx-auto mb-3 mb-lg-auto my-lg-auto" src={article?.image} alt="giddy" />
            <div className="related-article-text-container mx-auto pt-3">
              <p className="taxonomy mb-lg-2">
                {article?.taxonomy.associated.length
                  ? article?.taxonomy.associated[0]?.name
                  : article?.taxonomy.primary[0]?.name}
              </p>
              <h3>{article?.title}</h3>
              <p className="article-author py-0">By {article?.author.name}</p>
              <p className="article-deck">{article?.deck}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
