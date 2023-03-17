import React from "react";
import { useEffect, useState } from "react";
import LoadMorePosts from "./load-more-button/LoadMorePosts";

import "./RelatedArticles.css";

export default function RelatedArticlesContainer({ id, title }) {
  const [related_articles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const fetchRelatedArticles = () => {
    console.log("fetching articles")
    setLoading(true);
    fetch(`https://api.getmegiddyapi.com/search-articles`, {
      method: "POST",
      body: JSON.stringify({
        id: id,
        search: `${title}`,
        page_size: 3,
        page_number: pageNumber,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const prevArticles = related_articles;
        const articleResults = pageNumber === 1 ? data?.articles : data?.articles.slice(1, 4);
        setRelatedArticles([...prevArticles, ...articleResults]);
        setPageNumber(pageNumber + 1);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchRelatedArticles();
  }, []);

  return (
    <div className="related-articles-container">
      {related_articles?.map((article, index) => (
        <a href={article.url} key={index}>
          <div className="related-article-container d-flex flex-column-reverse flex-lg-row mb-4">
            <img
              className="mx-auto mb-3 mb-lg-auto my-lg-auto"
              src={article?.image}
              alt="giddy"
            />
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
      <LoadMorePosts loading={loading} loadMore={fetchRelatedArticles} />
    </div>
  );
}
