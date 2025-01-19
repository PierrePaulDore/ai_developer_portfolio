import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="py-6 px-4 md:px-8">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Pierre Paul Doré</h1>
          <div className="space-x-6">
            <a href="/about" className="hover:text-blue-600">About</a>
            <a href="/projects" className="hover:text-blue-600">Projects</a>
            <a href="/skills" className="hover:text-blue-600">Skills</a>
            <a href="/contact" className="hover:text-blue-600">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-12 px-4">
        <h2 className="text-4xl font-bold mb-4">AI Developer & Tech Enthusiast</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Building the future with AI and modern web technologies. Passionate about
          creating innovative solutions that make a difference.
        </p>
      </section>

      {/* Welcome Section */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Welcome</h2>
        <p className="text-gray-600 text-lg text-center">
          I'm dedicated to exploring the intersection of AI and web development,
          creating solutions that bridge the gap between complex technology and practical applications.
        </p>
      </section>

      {/* Powers Section */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">The Four Powers</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Column 1 */}
          <div className="flex flex-col gap-8">
            {/* Power to Build */}
            <div className="bg-white p-6 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-bold mb-4">Power to Build</h3>
              <p className="text-gray-600">
                Creating software and tools that solve real-world problems using AI-assisted development.
              </p>
            </div>

            {/* Power to Automate */}
            <div className="bg-white p-6 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-bold mb-4">Power to Automate</h3>
              <p className="text-gray-600">
                Leveraging AI agents and workflow automation to increase efficiency and productivity.
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-8">
            {/* Power to Create */}
            <div className="bg-white p-6 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-bold mb-4">Power to Create</h3>
              <p className="text-gray-600">
                Generating professional-grade content and designs using AI-powered tools.
              </p>
            </div>

            {/* Power to Connect */}
            <div className="bg-white p-6 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-bold mb-4">Power to Connect</h3>
              <p className="text-gray-600">
                Building influence and audience through AI-enhanced communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="max-w-4xl mx-auto py-12 px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com" className="text-gray-600 hover:text-blue-600">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" className="text-gray-600 hover:text-blue-600">
            <Linkedin size={24} />
          </a>
          <a href="mailto:contact@example.com" className="text-gray-600 hover:text-blue-600">
            <Mail size={24} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;