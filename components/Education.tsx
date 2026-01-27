import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { EducationItem } from '../types';
import RevealOnScroll from './RevealOnScroll';

const educationData: EducationItem[] = [
  {
    degree: "B.Tech in Artificial Intelligence & ML",
    institution: "Aditya University",
    period: "2024–2028",
    details: "Focused on advanced algorithms, data structures, and machine learning architectures. Maintaining a strong academic record with a GPA of 7.5/10."
  },
  {
    degree: "Intermediate (MPC)",
    institution: "APRJC",
    period: "2022–2024",
    details: "Specialized in Mathematics, Physics, and Chemistry. Completed with 70.7% aggregate, building a solid foundation in analytical problem solving."
  }
];

const certifications = [
    "Microsoft Excel Certification",
    "Cisco C Programming",
    "LeetCode 150+ Problems Solved"
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-32 bg-zinc-950/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Education Section */}
        <div className="mb-24">
            <RevealOnScroll>
              <div className="flex items-center gap-4 mb-12">
                  <div className="p-3.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      <GraduationCap size={28} />
                  </div>
                  <h2 className="text-4xl font-bold text-white tracking-tight">Education</h2>
              </div>
            </RevealOnScroll>
            
            <div className="space-y-12 pl-4 md:pl-8 border-l border-white/10 ml-4 md:ml-6">
              {educationData.map((edu, idx) => (
                <RevealOnScroll key={idx} width="100%" delay={idx * 200}>
                  <div className="relative pl-8 group">
                    {/* Timeline Dot */}
                    <div className="absolute left-[-37px] md:left-[-39px] top-2 w-4 h-4 rounded-full bg-zinc-900 border-2 border-zinc-700 group-hover:border-purple-500 group-hover:bg-purple-500 transition-all duration-300 shadow-[0_0_0_4px_rgba(0,0,0,1)]"></div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                          {edu.degree}
                      </h3>
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-400 whitespace-nowrap">
                          {edu.period}
                      </span>
                    </div>
                    
                    <div className="text-lg font-medium text-zinc-300 mb-4">
                      {edu.institution}
                    </div>
                    
                    <p className="text-zinc-400 leading-relaxed text-base max-w-2xl">
                      {edu.details}
                    </p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
        </div>

        {/* Certifications Section */}
        <div>
            <RevealOnScroll>
             <div className="flex items-center gap-4 mb-12">
                <div className="p-3.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <Award size={28} />
                </div>
                <h2 className="text-4xl font-bold text-white tracking-tight">Certifications</h2>
            </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, idx) => (
                <RevealOnScroll key={idx} width="100%" delay={idx * 150}>
                  <div className="group p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:bg-zinc-900/80 hover:border-white/20 transition-all duration-300 flex items-center gap-5 hover:-translate-y-1">
                    <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.6)] group-hover:scale-125 transition-transform shrink-0"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-zinc-200 group-hover:text-white transition-colors">
                          {cert}
                      </h4>
                      <p className="text-sm text-zinc-500 mt-1">Professional Credential</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Education;