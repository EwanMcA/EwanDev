import React from 'react';

import { createRoot } from 'react-dom/client';

import About from './about';
import Contact from './contact';
import Header from './header';
import Home from './home';
import Projects from './projects';

import './index.scss';

const App = () => (
  <>
    <Header />
    <Home />
    <About />
    <Projects />
    <Contact />
  </>
);

const index = document.getElementById('index');
if (index) {
  const root = createRoot(index);
  root.render(<App />);
}
