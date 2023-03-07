import React from 'react'
import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import ArticleHeader from './ArticleHeader';
import ArticleAuthor from './ArticleAuthor';
import ArticleImage from './ArticleImage';

export default function Article() {
    const [article, setArticle] = useState([]);
    const { author, title, body, image  } = article;
    const { id } = useParams();
    // console.log(article);

    useEffect(() => {
        fetch(`https://api.getmegiddyapi.com/article/drupal/${id}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.article);
                setArticle(data.article);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
  
  return (
    <>
      <div>Article Hardcode text</div>
      {article?.title && <ArticleHeader title={title} />}
      {article?.author && <ArticleAuthor author={author} />}
      {article?.image && <ArticleImage image={image} />}
    </>
  )
}
