import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-zinc-500 text-sm">
          © 2024 Surendra Kumar. Crafted with <span className="text-white">Next.js</span> & <span className="text-white">Tailwind</span>.
        </div>
        <div className="flex gap-8">
          <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">Twitter</a>
          <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">LinkedIn</a>
          <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;