import React from 'react';
import { Link } from 'react-router-dom';

function Start() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <h1 className="text-3xl font-bold">Nexin</h1>
        <nav>
          {/*<ul className="flex space-x-4">
            <li><a href="#features" className="hover:text-gray-400">Features</a></li>
            <li><a href="#about" className="hover:text-gray-400">About</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
          </ul>*/}
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center py-20">
        <h2 className="text-5xl font-extrabold mb-4">Welcome to Our Nexin Chat</h2>
        <p className="text-lg mb-8">Discover the amazing features and benefits of our product.</p>
        <Link to='/register' className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Started
        </Link>
      </main>

      {/* Footer */}
      <footer className="text-center py-6">
        <p className="text-gray-500">&copy; 2025 Nexin. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Start;
