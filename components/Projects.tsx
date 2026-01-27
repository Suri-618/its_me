import React from 'react';
import { Github, ExternalLink, Sparkles, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import RevealOnScroll from './RevealOnScroll';

// Helper to get icons for tech stack
const getTechIcon = (name: string) => {
  const map: Record<string, string> = {
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    "Express": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    "Redux": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    "Tailwind": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    "Supabase": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
    "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
  };
  return map[name];
};

const colorVariants = {
  blue: {
    bg: "group-hover:bg-blue-500/10",
    text: "text-blue-400",
    border: "group-hover:border-blue-500/50",
    glow: "from-blue-600/20 to-cyan-600/20",
    line: "bg-blue-500",
    icon: "bg-blue-500/10 text-blue-400"
  },
  pink: {
    bg: "group-hover:bg-pink-500/10",
    text: "text-pink-400",
    border: "group-hover:border-pink-500/50",
    glow: "from-pink-600/20 to-rose-600/20",
    line: "bg-pink-500",
    icon: "bg-pink-500/10 text-pink-400"
  },
  purple: {
    bg: "group-hover:bg-purple-500/10",
    text: "text-purple-400",
    border: "group-hover:border-purple-500/50",
    glow: "from-purple-600/20 to-indigo-600/20",
    line: "bg-purple-500",
    icon: "bg-purple-500/10 text-purple-400"
  },
  emerald: {
    bg: "group-hover:bg-emerald-500/10",
    text: "text-emerald-400",
    border: "group-hover:border-emerald-500/50",
    glow: "from-emerald-600/20 to-teal-600/20",
    line: "bg-emerald-500",
    icon: "bg-emerald-500/10 text-emerald-400"
  }
};

const projectsData: Project[] = [
  {
    title: "Library Seat System",
    type: "Academic Project",
    color: "blue",
    description: "An intelligent seat management solution that tracks real-time availability. This system eliminates the hassle of finding seats in crowded libraries by providing a live dashboard of seat occupancy.",
    techStack: ["TypeScript", "MongoDB", "Node.js", "Express"],
    links: { 
      github: "https://github.com/DangerRohit84/Library-Seat-Reservation-System",
      live: "#" 
    },
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: [
      "Real-time seat availability tracking",
      "Automated booking validation",
      "Admin dashboard for space management",
      "Conflict resolution algorithms"
    ]
  },
  {
    title: "Rock Paper Scissor",
    type: "Personal Project",
    color: "emerald",
    description: "A robust, interactive game engine developed in Python. Designed with a focus on code efficiency and user interaction, featuring score tracking and error handling.",
    techStack: ["Python"],
    links: { 
      github: "https://github.com/Suri-618/ROCK_PAPER_SCISSORS_GAME",
      live: "#" 
    },
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: [
      "Zero-latency interaction engine",
      "Score tracking and state persistence",
      "Robust error handling for user inputs",
      "Clean, modular code architecture"
    ]
  },
  {
    title: "High-Performance Data Pipeline",
    type: "Technical Project",
    color: "purple",
    description: "A real-time data processing system engineered to handle high-throughput scenarios, achieving 10,000 transactions per second with 99.99% system reliability.",
    techStack: ["Python", "SQL"],
    links: { 
      github: "https://github.com/Suri-618",
      live: "#" 
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: [
      "Handles 10,000+ transactions/second",
      "99.99% system uptime reliability",
      "Real-time data ingestion and processing",
      "Automated failure recovery mechanisms"
    ]
  }
];

const Projects: React.FC = () => {
  return (
    <section id="work" className="py-20 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <RevealOnScroll width="100%">
          <div className="flex flex-col items-center justify-center mb-24 text-center">
              <span className="text-zinc-500 font-mono text-sm tracking-wider uppercase mb-4">Featured Case Studies</span>
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Curated Work</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mt-6 rounded-full"></div>
          </div>
        </RevealOnScroll>

        <div className="flex flex-col gap-8">
          {projectsData.map((project, idx) => {
            const colors = colorVariants[project.color];
            // Calculate sticky top offset for stacking effect
            const stickyTop = `calc(6rem + ${idx * 3}rem)`;
            
            return (
              <div 
                key={idx} 
                className="sticky top-24 md:top-32 self-start w-full"
                style={{ top: stickyTop }}
              >
               <RevealOnScroll width="100%" delay={idx * 100}>
                <div className="relative group bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:border-white/20">
                  
                  {/* Background Gradient Effect */}
                  <div className={`absolute -inset-2 bg-gradient-to-r ${colors.glow} blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none`}></div>

                  <div className="flex flex-col lg:flex-row h-full">
                    
                    {/* Visual Side (Browser Mockup) */}
                    <div className="w-full lg:w-7/12 p-6 lg:p-10 bg-gradient-to-br from-zinc-900 to-zinc-950 relative overflow-hidden group-hover:bg-zinc-800/50 transition-colors duration-500">
                      
                      {/* Browser Frame */}
                      <div className="relative rounded-t-xl bg-zinc-800/50 border border-white/5 border-b-0 p-3 flex items-center gap-2 backdrop-blur-sm z-20">
                         <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                         <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                         <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                         <div className="ml-4 flex-1 h-6 bg-zinc-900/50 rounded-md text-[10px] text-zinc-500 flex items-center px-3 font-mono">
                           {project.links.live || project.links.github || "localhost:3000"}
                         </div>
                      </div>

                      {/* Image Container */}
                      <div className="relative z-10 rounded-b-xl overflow-hidden shadow-2xl h-[300px] lg:h-[400px] border border-white/5 group-hover:border-white/10 transition-colors">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1.0)]"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                      </div>

                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-5/12 p-8 lg:p-10 flex flex-col justify-center bg-zinc-900 relative z-20 border-l border-white/5">
                      
                      <div className="flex items-center gap-3 mb-4">
                         <div className={`h-[2px] w-6 ${colors.line}`}></div>
                         <span className={`${colors.text} font-mono text-sm font-medium tracking-wide`}>
                           {project.title}
                         </span>
                      </div>

                      <div className="mb-2">
                         <span className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">{project.type}</span>
                      </div>

                      <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-zinc-100 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-zinc-400 leading-relaxed text-sm mb-8 font-light">
                        {project.description}
                      </p>

                      <div className="space-y-3 mb-10">
                         {project.features.slice(0, 4).map((feature, fIdx) => (
                           <div key={fIdx} className="flex items-start gap-3">
                              <Sparkles size={14} className={`${colors.text} shrink-0 mt-1`} />
                              <span className="text-zinc-400 text-sm">{feature}</span>
                           </div>
                         ))}
                      </div>

                      {/* Tech Stack & Links */}
                      <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                         <div className="flex -space-x-2">
                            {project.techStack.map((tech) => (
                              <div key={tech} className="w-8 h-8 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center relative z-10 hover:z-20 hover:scale-110 transition-transform bg-zinc-900" title={tech}>
                                 <img src={getTechIcon(tech)} alt={tech} className="w-4 h-4 object-contain opacity-80" />
                              </div>
                            ))}
                         </div>
                         
                         <div className="flex gap-4">
                           <a 
                             href={project.links.github} 
                             target="_blank"
                             rel="noopener noreferrer"
                             className="text-zinc-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
                           >
                             <Github size={20} />
                           </a>
                           {project.links.live && project.links.live !== "#" && (
                            <a 
                                href={project.links.live} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-2 rounded-full ${colors.bg} ${colors.text} transition-all hover:scale-110`}
                            >
                                <ArrowUpRight size={20} />
                            </a>
                           )}
                         </div>
                      </div>

                    </div>
                  </div>
                </div>
               </RevealOnScroll>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;