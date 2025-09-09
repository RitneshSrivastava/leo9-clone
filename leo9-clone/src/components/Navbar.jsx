import React from 'react';
import { Link } from 'react-scroll';
import { Menu } from 'lucide-react';

function Navbar() {
  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'Work', to: 'work' },
    { name: 'Services', to: 'about' },
    { name: 'About', to: 'about' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full p-6 px-10 md:px-20 z-50 flex justify-between items-center bg-zinc-900/30 backdrop-blur-sm">
      <Link to="home" smooth={true} duration={500} className="cursor-pointer">
        <h1 className="text-2xl font-semibold text-white">LEO9</h1>
      </Link>
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.to}
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            className="text-white hover:text-pink-500 transition-colors cursor-pointer"
            activeClass="text-pink-500"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-6">
        <Link to="contact" smooth={true} duration={500}>
            <button className="hidden md:block bg-white text-black font-semibold px-5 py-2 rounded-full hover:bg-gray-200 transition-colors">
              Let's Talk
            </button>
        </Link>
        <div className="md:hidden">
          <Menu className="text-white" size={28} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;