import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <div className="w-full md:w-1/2 relative">
            <RevealOnScroll width="100%">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/50">
                <img 
                  src="https://picsum.photos/800/1000?grayscale" 
                  alt="Surendra Kumar" 
                  className="w-full h-auto object-cover opacity-80 hover:opacity-100 transition-opacity duration-500 transform hover:scale-105"
                />
              </div>
            </RevealOnScroll>
          </div>
          
          <div className="w-full md:w-1/2 space-y-8">
            <RevealOnScroll>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Developer <span className="text-zinc-600">x</span> Dreamer
              </h2>
            </RevealOnScroll>
            
            <div className="space-y-6 text-lg text-zinc-400 leading-relaxed font-light">
              <RevealOnScroll>
                <p>
                  I am currently pursuing my B.Tech in Artificial Intelligence and Machine Learning at Aditya University. 
                  My journey involves architecting foundational data structures and optimizing algorithms to improve runtime efficiency.
                </p>
              </RevealOnScroll>
              <RevealOnScroll>
                <p>
                  I have experience administering Linux-based operating systems and Oracle DBMS, managing complex system configurations. 
                  Beyond academics, I actively contribute to open-source projects, utilizing advanced Git version control practices to maintain code quality.
                </p>
              </RevealOnScroll>
            </div>
            
            <RevealOnScroll>
              <div className="flex gap-12 pt-8 border-t border-white/10">
                <div>
                  <h4 className="text-4xl font-bold text-white mb-1">5+</h4>
                  <p className="text-sm text-zinc-500 uppercase tracking-wider">Open Source</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-white mb-1">350+</h4>
                  <p className="text-sm text-zinc-500 uppercase tracking-wider">Problems Solved</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;