import React from 'react';
import { SkillCategory } from '../types';
import RevealOnScroll from './RevealOnScroll';

const getIconUrl = (name: string) => {
  const map: Record<string, string> = {
    "C": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "NodeJS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    "Oracle": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg",
    "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    "Linux": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
    "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  };
  return map[name] || "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg";
};

const skillsData: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { name: "C", description: "Foundational systems programming" },
      { name: "C++", description: "High-performance OOP" },
      { name: "Python", description: "AI, ML, and scripting" },
      { name: "Java", description: "Enterprise applications" }
    ]
  },
  {
    name: "Frontend",
    skills: [
      { name: "HTML", description: "Web structure" },
      { name: "CSS", description: "Web styling" },
      { name: "TypeScript", description: "Type-safe JavaScript" },
      { name: "React", description: "UI Library" }
    ]
  },
  {
    name: "Backend",
    skills: [
      { name: "NodeJS", description: "Server-side JS" },
      { name: "Oracle", description: "RDBMS" },
      { name: "SQL", description: "Database querying" },
      { name: "MongoDB", description: "NoSQL Database" }
    ]
  },
  {
    name: "Tools",
    skills: [
      { name: "Git", description: "Version Control" },
      { name: "GitHub", description: "Collaboration" },
      { name: "Linux", description: "OS Administration" },
      { name: "VS Code", description: "Code Editor" }
    ]
  }
];

const Skills: React.FC = () => {
  // Flatten skills for the unified pill layout
  const allSkills = skillsData.flatMap(category => category.skills);

  return (
    <section className="py-24 relative overflow-hidden bg-black" id="skills">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Visuals */}
        <RevealOnScroll width="100%">
          <div className="flex flex-col items-center justify-center mb-16 relative">
            
            {/* Abstract Shape Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-500/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

            {/* Main Visual Image (Static Crystal 3D Shape) */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 mb-2 group flex items-center justify-center">
                 <img 
                   src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" 
                   alt="Skills Crystal Holographic"
                   className="w-full h-full object-contain opacity-90 transition-transform duration-700 group-hover:scale-105"
                 />
                 
                 {/* Overlay Text */}
                 <div className="absolute inset-0 flex items-center justify-center pt-8">
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter drop-shadow-[0_0_25px_rgba(0,0,0,0.8)] z-20">
                      Skills
                    </h2>
                 </div>
            </div>
            
            <div className="flex items-center gap-3 -mt-6 relative z-30">
              <div className="h-[2px] w-8 md:w-16 bg-gradient-to-r from-transparent to-purple-600 rounded-full"></div>
              <span className="text-zinc-400 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase whitespace-nowrap">I Constantly Try To Improve</span>
              <div className="h-[2px] w-8 md:w-16 bg-gradient-to-l from-transparent to-purple-600 rounded-full"></div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Skills List */}
        <RevealOnScroll width="100%" delay={200}>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
            {allSkills.map((skill, idx) => (
              <div 
                key={idx}
                className="group relative flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-zinc-900/80 border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10 cursor-default"
              >
                {/* Icon */}
                <div className="w-5 h-5 md:w-6 md:h-6 relative grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100">
                  <img 
                    src={getIconUrl(skill.name)} 
                    alt={skill.name}
                    className={`w-full h-full object-contain ${skill.name === 'GitHub' || skill.name === 'VS Code' ? 'invert' : ''}`}
                  />
                </div>
                
                {/* Text */}
                <span className="text-zinc-400 font-medium text-sm md:text-base group-hover:text-white transition-colors">
                  {skill.name}
                </span>

                {/* Subtle Glow */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 group-hover:ring-purple-500/30 transition-all duration-300"></div>
                
                {/* Tooltip on Hover */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-[200px] px-3 py-1.5 bg-zinc-950 border border-white/10 rounded-lg text-xs text-zinc-300 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none translate-y-2 group-hover:translate-y-0 z-30">
                  {skill.description}
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
        
      </div>
    </section>
  );
};

export default Skills;