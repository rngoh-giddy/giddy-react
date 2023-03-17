import React from "react";

import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import Article from "./components/article-components/Article";

import ThemeProvider from "react-bootstrap/ThemeProvider";
import MainNav from "./components/nav-bar-components/main-nav/MainNav";
import MainFooter from "./components/footer-components/main-footer/MainFooter";
import FisherArticle from "./routes/Fisher-Article/FisherArticle";
import ChatPrompts from "./routes/Chat-Prompts/ChatPrompts";

function App() {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <MainNav />
      <Routes>
        <Route path="/article/:id" element={<Article />} />
        <Route path="/article/ms/:id" element={<Article />} />
        <Route path="/article/fi/:id" element={<FisherArticle />} />
        <Route path="/prompt" element={<ChatPrompts />} />
      </Routes>

      <MainFooter />
    </ThemeProvider>
  );
}

export default App;
