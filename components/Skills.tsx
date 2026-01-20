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
  return map[name] || "";
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
  return (
    <section className="py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll width="100%">
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-16 tracking-tight">Technical Arsenal</h2>
        </RevealOnScroll>
        
        <div className="space-y-16">
          {skillsData.map((category, idx) => (
            <RevealOnScroll key={idx} width="100%">
              <div className="relative">
                <h3 className="text-xl font-semibold text-zinc-400 mb-8 pl-4 border-l-2 border-purple-500">{category.name}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/20 hover:bg-zinc-900/60 transition-all duration-300">
                      
                      {/* Icon */}
                      <div className="w-12 h-12 mb-4 relative transition-transform duration-300 group-hover:scale-110">
                        <img 
                          src={getIconUrl(skill.name)} 
                          alt={skill.name}
                          className={`w-full h-full object-contain ${skill.name === 'GitHub' ? 'invert opacity-80' : ''}`}
                        />
                      </div>
                      
                      {/* Name */}
                      <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">{skill.name}</span>

                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-max max-w-[150px] px-3 py-2 bg-zinc-950 border border-white/10 rounded-lg text-xs text-zinc-300 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-20 text-center invisible group-hover:visible translate-y-2 group-hover:translate-y-0">
                        {skill.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;