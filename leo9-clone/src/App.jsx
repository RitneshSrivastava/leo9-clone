import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Clients from './components/Clients.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <Clients />
    </div>
  );
}

export default App;