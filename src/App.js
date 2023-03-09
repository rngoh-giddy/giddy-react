import React from 'react';

import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';

import Article from './components/article-components/Article/Article';
import MSArticle from './components/article-components/MSNBC-Article/MSArticle';

import ThemeProvider from 'react-bootstrap/ThemeProvider';
import FullWidthHero from './components/article-components/FullWidthHero/FullWidthHero';
import MainNav from './components/nav-bar-components/main-nav/main-nav';
import MainFooter from './components/footer-components/main-footer/MainFooter';

function App() {
  return (
  <ThemeProvider
    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    minBreakpoint="xxs"
  >
    <MainNav />
    <Routes>
      <Route path="/article/:id" element={<Article />} />
      <Route path="/article/ms/:id" element={<MSArticle />} />
      <Route path="/article/fi/:id" element={<Article />} />
    </Routes>
    <MainFooter/>
  </ThemeProvider>
  );
}

export default App;
