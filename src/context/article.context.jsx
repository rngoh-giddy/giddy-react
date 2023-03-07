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


return <ArticleContext.Provider value={value}>{children} </ArticleContext.Provider>;
  };