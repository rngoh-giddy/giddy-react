import React from "react";
import { useEffect, useState } from "react";

import './RelatedArticlesContainer.scss';

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
    <div className="giddy-daily-parent d-flex flex-wrap gap-4 gap-xl-1 justify-content-between">
      {/* Uses slice to only get the first 6 elements */}
      {related_articles?.slice(0,6).map((article, index) => (
        <a className="col-md-5 col-xl-3" href={article.url} key={index}>
          <div className="giddy-daily-container flex-xl-row mb-4 justify-content-center">
            <div className="giddy-daily-text-container pt-3">
              {/* Number */}
              <h3 className="giddy-daily-number text-ivy-light-italic font-size-32">{index + 1}.</h3>

              <div className="giddy-daily-titlle-title-container">
                {/* Taxonomy */}
                <p className="taxonomy mb-lg-2 text-slate-pro-condensed text-tidal font-size-16">
                  {article?.taxonomy.associated.length
                    ? article?.taxonomy.associated[0]?.name
                    : article?.taxonomy.primary[0]?.name}
                </p>

                {/* Title */}
                <h3 className="text-slate-pro-bold font-size-16">{article?.title}</h3>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
