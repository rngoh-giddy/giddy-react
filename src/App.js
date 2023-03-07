import React from 'react';

import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';

import Article from './components/article-components/Article/Article';

import ThemeProvider from 'react-bootstrap/ThemeProvider';
import FullWidthHero from './components/article-components/FullWidthHero/FullWidthHero';

function App() {
  return (
  <ThemeProvider
    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    minBreakpoint="xxs"
  >
    <Routes>
      <Route path="/article/:id" element={<Article />} />
    </Routes>
    <FullWidthHero />
  </ThemeProvider>
  );
}

export default App;
