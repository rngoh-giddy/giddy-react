import React from 'react'
import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

export default function Article() {
    const [articles, setArticles] = useState([]);
    // const value = { articles, setArticles };
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        fetch(`https://api.getmegiddyapi.com/article/drupal/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                console.log(data.article.author.name);
                setArticles(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
  
  return (
    <div>Article Hardcode text</div>
  )
}
