import React from "react";
import { useEffect, useState } from "react";
 
import { useParams } from "react-router-dom";

export default function RelatedArticlesContainer(title) {
    const [related_articles, getRelatedArticles] = useState([]);

    useEffect(() => {
        fetch(`https://api.getmegiddyapi.com/article/drupal/${id}`)
          .then((res) => res.json())
          .then((data) => {
            // console.log(data.article);
            getRelatedArticles(data.article);
          })
          .catch((err) => {
            console.log(err.message);
          });
      }, []);

    return ( 
        <>
        </>
    );
}