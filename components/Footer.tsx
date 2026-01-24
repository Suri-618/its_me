import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Surendra Kumar All Rights Reserved.
        </div>
        <div className="flex gap-8">
          <a 
            href="https://www.linkedin.com/in/surendra-kumar-202b76337/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-zinc-500 hover:text-white transition-colors text-sm"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/Suri-618" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-zinc-500 hover:text-white transition-colors text-sm"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;