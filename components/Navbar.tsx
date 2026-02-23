import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [active, setActive] = useState('Home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '#' },
    { name: 'More', href: '#contact' },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-2 py-2 flex items-center shadow-2xl shadow-black/50">
        <ul className="flex items-center space-x-1">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setActive(link.name)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === link.name
                    ? 'bg-white text-black'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;