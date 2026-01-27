import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [active, setActive] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scroll Spy Logic
      // Check roughly top 30% of screen to trigger active state early enough
      const scrollPosition = window.scrollY + window.innerHeight * 0.3; 

      let currentSection = 'Home';

      // Loop through sections to find the current one
      for (const link of navLinks) {
        const sectionId = link.href.substring(1);
        const element = document.getElementById(sectionId);
        
        if (element) {
          const { offsetTop, offsetHeight } = element;
          // If scroll position is within the section bounds
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            currentSection = link.name;
          }
        }
      }

      // Edge case: reached the bottom of the page
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50
      ) {
        currentSection = 'Contact';
      }
      
      // Edge case: at the very top
      if (window.scrollY === 0) {
        currentSection = 'Home';
      }

      setActive(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 100; // Navbar height + padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className="bg-zinc-900/80 backdrop-blur-lg border border-white/10 rounded-full px-2 py-2 flex items-center shadow-2xl shadow-black/50">
        <ul className="flex items-center space-x-1">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                  active === link.name
                    ? 'bg-white text-black shadow-lg shadow-white/10'
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