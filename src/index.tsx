import React from 'react';

import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import About from './about';
import Home from './home';
import Projects from './projects';

import './index.scss';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  </Router>
);

const index = document.getElementById('index');
if (index) {
  const root = createRoot(index);
  root.render(<App />);
}
