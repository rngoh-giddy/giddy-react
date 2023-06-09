import React from "react";
import { useEffect, useState } from "react";
import SpinningLoader from "../../components/misc/SpinningLoader";
import GiddyDailyArticleLink from "./GiddyDailyArticleLink";

import './style/RelatedArticlesContainer.scss';

export default function RelatedArticlesContainer({ id, title }) {
  const [related_articles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const fetchRelatedArticles = () => {
    console.log("fetching articles")
    setLoading(true);
    console.log('Loading is currently', loading)
    fetch(`https://api.getmegiddyapi.com/search-articles`, {
      method: "POST",
      body: JSON.stringify({
        id: id,
        search: `${title}`,
        page_size: 5,
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
        console.log('Loading is currently', loading)
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
        console.log('Loading is currently', loading)
      });
  };

  useEffect(() => {
    fetchRelatedArticles();
  }, []);

  return (
    <>      
      {loading && <SpinningLoader />}
      <div className="giddy-daily-parent d-flex flex-wrap gap-4 gap-xl-1 justify-content-between">
        {/* Uses slice to only get the first 6 elements */}
        {related_articles?.map((article, index) => (
          <GiddyDailyArticleLink
            url={article.url}
            index={index}
            length={article?.taxonomy.associated.length}
            aName={article?.taxonomy.associated[0]?.name}
            pName={article?.taxonomy.primary[0]?.name}
            title={article?.title}
          />
        ))}
      </div>
    </>
  );
}
