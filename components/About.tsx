import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const About: React.FC = () => {
  const stats = [
    { label: "GitHub Repos", value: "5+" },
    { label: "LeetCode Problems", value: "150+" },
    { label: "CodeChef Problems", value: "350+" },
    { label: "CP Contests", value: "3" }
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Visual Section - Aurora Image */}
          <div className="w-full md:w-2/5 relative">
            <RevealOnScroll width="100%">
              <div className="relative group">
                {/* Decorative Glow */}
                <div className="absolute -inset-1 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500"></div>
                
                <div className="relative h-[500px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900">
                    <img 
                        src="https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                        alt="Aurora Borealis" 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    {/* Overlay Gradient for integration */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
          
          {/* Content Section */}
          <div className="w-full md:w-3/5 space-y-8">
            <RevealOnScroll delay={200}>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight flex items-center gap-3">
                About <span className="text-zinc-500">Me</span>
              </h2>
            </RevealOnScroll>
            
            <div className="space-y-6 text-lg text-zinc-400 leading-relaxed font-light">
              <RevealOnScroll delay={400}>
                <p>
                  I am currently pursuing my B.Tech in Artificial Intelligence and Machine Learning at Aditya University. 
                  My journey involves architecting foundational data structures and optimizing algorithms to improve runtime efficiency.
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={600}>
                <p>
                  I have experience administering Linux-based operating systems and Oracle DBMS, managing complex system configurations. 
                  Beyond academics, I actively contribute to open-source projects, utilizing advanced Git version control practices to maintain code quality.
                </p>
              </RevealOnScroll>
            </div>

            <RevealOnScroll width="100%" delay={800}>
              <div className="grid grid-cols-2 gap-4 pt-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-purple-500/30 hover:bg-white/5 transition-all duration-300 group">
                    <div className="text-3xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">{stat.value}</div>
                    <div className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">{stat.label}</div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;