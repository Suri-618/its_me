import React from 'react';
import { Github, ExternalLink, Folder } from 'lucide-react';
import { Project } from '../types';
import RevealOnScroll from './RevealOnScroll';

const projectsData: Project[] = [
  {
    title: "Library Seat System",
    description: "An intelligent seat management solution that tracks real-time availability. Built with TypeScript and MongoDB to ensure seamless booking validation and efficient space utilization.",
    techStack: ["TypeScript", "MongoDB", "NodeJS", "Express"],
    links: { 
      github: "https://github.com/DangerRohit84/Library-Seat-Reservation-System"
    }
  },
  {
    title: "Rock Paper Scissor",
    description: "A robust, interactive game engine developed in Python. Optimized for zero-latency performance, achieving 200+ error-free user interactions in testing environments.",
    techStack: ["Python", "Game Logic", "CLI"],
    links: { 
      github: "https://github.com/Suri-618/ROCK_PAPER_SCISSORS_GAME" 
    }
  }
];

const Projects: React.FC = () => {
  return (
    <section id="work" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll width="100%">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-purple-500 font-mono text-xl">02.</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Some Things I've Built</h2>
            <div className="h-px bg-white/10 flex-grow ml-4 hidden md:block"></div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projectsData.map((project, idx) => (
            <RevealOnScroll key={idx} width="100%">
              <div className="group relative h-full bg-zinc-900 hover:bg-[#27272a] p-8 rounded-lg transition-all duration-300 hover:-translate-y-2 border border-white/5 hover:border-purple-500/30 hover:shadow-[0_10px_30px_-15px_rgba(168,85,247,0.2)] flex flex-col cursor-default">
                
                <header className="flex justify-between items-center mb-8">
                  <div className="text-purple-500 group-hover:text-purple-400 transition-colors">
                    <Folder size={40} strokeWidth={1.5} />
                  </div>
                  <div className="flex gap-4 z-10">
                    {project.links.github && (
                      <a 
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-purple-400 transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.links.live && (
                      <a 
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-purple-400 transition-colors"
                        aria-label="External Link"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </header>

                <h3 className="text-xl font-bold text-zinc-100 group-hover:text-purple-400 transition-colors mb-4">
                  <a 
                    href={project.links.live || project.links.github || '#'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="static"
                  >
                    {project.title}
                  </a>
                </h3>

                <div className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow font-light">
                   <p>{project.description}</p>
                </div>

                <footer className="mt-auto">
                  <ul className="flex flex-wrap gap-3 text-xs font-mono text-zinc-500">
                    {project.techStack.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </footer>

              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;