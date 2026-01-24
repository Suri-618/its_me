import React from 'react';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <RevealOnScroll>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">Let's work together</h2>
        </RevealOnScroll>
        
        <RevealOnScroll>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto font-light">
            Have a project in mind? I'm always looking for new opportunities to build meaningful digital products.
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <a href="mailto:suri86438@gmail.com" className="flex items-center gap-3 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors">
              <Mail size={20} />
              suri86438@gmail.com
            </a>
            
            <a 
              href="https://www.linkedin.com/in/surendra-kumar-202b76337/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 text-zinc-300 hover:bg-white/5 hover:text-white hover:border-blue-500/50 transition-all"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>

            <a 
              href="https://github.com/Suri-618" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 text-zinc-300 hover:bg-white/5 hover:text-white hover:border-purple-500/50 transition-all"
            >
              <Github size={20} />
              GitHub
            </a>

            <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 text-zinc-300 bg-zinc-900/50 cursor-default">
              <MapPin size={20} />
              Vijayawada, India
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll width="100%">
          <div className="p-8 rounded-3xl bg-zinc-900/30 border border-white/5 backdrop-blur-sm max-w-2xl mx-auto">
            <form className="space-y-4 text-left">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors placeholder:text-zinc-600" />
                <input type="email" placeholder="Email" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors placeholder:text-zinc-600" />
              </div>
              <textarea rows={4} placeholder="Your message..." className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none placeholder:text-zinc-600"></textarea>
              <button className="w-full py-3 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-500 transition-colors">Send Message</button>
            </form>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Contact;