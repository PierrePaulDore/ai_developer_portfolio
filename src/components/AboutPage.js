import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="py-6 px-4 md:px-8">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Pierre Paul Doré</h1>
          <div className="space-x-6">
            <a href="/" className="hover:text-blue-600">Home</a>
            <a href="/about" className="text-blue-600">About</a>
            <a href="/projects" className="hover:text-blue-600">Projects</a>
            <a href="/skills" className="hover:text-blue-600">Skills</a>
            <a href="/contact" className="hover:text-blue-600">Contact</a>
          </div>
        </nav>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-gray-600 mb-6">
            As an AI Developer and technology enthusiast, I specialize in creating innovative solutions 
            that bridge the gap between complex AI technologies and practical applications.
          </p>
          <p className="text-gray-600">
            My passion lies in exploring the intersection of AI and web development, 
            creating solutions that make a real difference in how we interact with technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;