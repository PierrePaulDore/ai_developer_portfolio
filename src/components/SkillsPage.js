// SkillsPage.js
import React from 'react';

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="py-6 px-4 md:px-8">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Pierre Paul Doré</h1>
          <div className="space-x-6">
            <a href="/" className="hover:text-blue-600">Home</a>
            <a href="/about" className="hover:text-blue-600">About</a>
            <a href="/projects" className="hover:text-blue-600">Projects</a>
            <a href="/skills" className="text-blue-600">Skills</a>
            <a href="/contact" className="hover:text-blue-600">Contact</a>
          </div>
        </nav>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto py-12 px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Skills</h2>
        <p className="text-gray-600">Coming soon! This page is under construction.</p>
      </div>
    </div>
  );
};

export default SkillsPage;