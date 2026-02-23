import React from 'react';
import { Github, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import RevealOnScroll from './RevealOnScroll';

const projectsData: Project[] = [
  {
    title: "Library Seat System",
    description: "Dynamic seat availability and booking validation using TypeScript and MongoDB integration.",
    techStack: ["TypeScript", "MongoDB", "NodeJS"],
    links: { github: "#", live: "#" }
  },
  {
    title: "Rock Paper Scissor",
    description: "Interactive Python game achieving over 200+ user interactions with zero runtime errors.",
    techStack: ["Python", "Algorithms"],
    links: { github: "#" }
  },
  {
    title: "Data Pipeline",
    description: "Real-time processing handling 10k TPS with 99.99% reliability.",
    techStack: ["Python", "Optimization"],
    links: { github: "#" }
  }
];

const Projects: React.FC = () => {
  return (
    <section id="work" className="py-32 bg-zinc-950/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll width="100%">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Selected Work</h2>
            <a href="#" className="hidden md:flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
              View all projects <ArrowUpRight size={16} />
            </a>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <RevealOnScroll key={idx} width="100%">
              <div className="group flex flex-col justify-between h-full bg-zinc-900 border border-white/5 rounded-2xl p-8 hover:shadow-2xl hover:shadow-purple-900/10 hover:border-white/10 transition-all duration-300 transform hover:-translate-y-1">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-white border border-white/5">
                      <span className="text-sm font-bold font-mono text-purple-400">0{idx + 1}</span>
                    </div>
                    <div className="flex gap-2">
                      {project.links.github && (
                        <a href={project.links.github} className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-all" title="GitHub">
                          <Github size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">{project.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-md bg-zinc-800 text-xs font-medium text-zinc-300 border border-zinc-700/50">
                      {tech}
                    </span>
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

export default Projects;