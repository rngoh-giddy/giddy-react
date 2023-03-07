import React from 'react';

import { useState, useEffect } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';

import ThemeProvider from 'react-bootstrap/ThemeProvider';
import FullWidthHero from './components/article-components/FullWidthHero/FullWidthHero';

function App() {
  return (
  <ThemeProvider
    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    minBreakpoint="xxs"
  >
    <FullWidthHero />
  </ThemeProvider>
  );
}

export default App;
