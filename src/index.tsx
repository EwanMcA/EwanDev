import React from 'react';

import { createRoot } from 'react-dom/client';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Landing from './landing';
import Projects from './projects';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  </Router>
);

const index = document.getElementById('index');
if (index) {
  const root = createRoot(index);
  root.render(<App />);
}
