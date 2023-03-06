import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';

import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Example from './components/article-components/FullWidthHero/Example';

function App() {
  return (
  <ThemeProvider
    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    minBreakpoint="xxs"
  >
    <Example />
  </ThemeProvider>
  );
}

export default App;
