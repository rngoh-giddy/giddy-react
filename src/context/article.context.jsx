import { createContext, useState, useEffect } from "react";

// actual value you want to access
export const ArticleContext = createContext({
    currentArticle: null,
    setCurrentArticle: () => null,
});

// provider: the actual functional component
// its return must wrap around any components that need access to the values inside

export const ArticlesProvider = ({ children }) => {
    const [articles, setArticles] = useState([]);
    const value = { articles, setArticles };

    useEffect(() => {
        fetch('https://api.getmegiddyapi.com/article/drupal/4347')
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




return <ArticleContext.Provider value={value}>{children} </ArticleContext.Provider>;
  };