import React from 'react';
import { ArrowRight } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Background Gradient Blurs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[150px] mix-blend-screen"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        <RevealOnScroll>
          <div className="flex justify-center">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 hover:bg-white/10 transition-colors cursor-default">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-medium text-zinc-400 uppercase tracking-wide">Available for work</span>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-6 leading-tight">
            Surendra <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Kumar</span>
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={400}>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            A passionate AI/ML enthusiast and frontend engineer crafting digital experiences that blend performance with accessibility.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={600}>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <a 
              href="#work" 
              className="group relative px-8 py-3.5 bg-white text-black rounded-full font-semibold transition-all hover:bg-zinc-200 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3.5 rounded-full font-medium text-zinc-300 border border-white/10 hover:bg-white/5 hover:text-white transition-all"
            >
              Contact Me
            </a>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={800}>
          <div className="mt-12 flex items-center justify-center gap-6 text-sm text-zinc-500">
            <span>Based in India</span>
            <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
            <a href="mailto:suri86438@gmail.com" className="hover:text-zinc-300 transition-colors">suri86438@gmail.com</a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Hero;