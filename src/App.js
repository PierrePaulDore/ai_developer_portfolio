import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import all page components - corrected path for HomePage
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import SkillsPage from './components/SkillsPage';
import ContactPage from './components/ContactPage';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;