import React, { useEffect, useState, useRef } from 'react';
import { Github, Code, Trophy, BookOpen, Terminal, Cpu } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const statsData = [
  { 
    label: "GitHub Repositories", 
    value: 5, 
    suffix: "+", 
    icon: Github, 
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20"
  },
  { 
    label: "LeetCode Problems", 
    value: 150, 
    suffix: "+", 
    icon: Code, 
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20"
  },
  { 
    label: "CodeChef Problems", 
    value: 350, 
    suffix: "+", 
    icon: Terminal, 
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20"
  },
  { 
    label: "CP Contests", 
    value: 3, 
    suffix: "", 
    icon: Trophy, 
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20"
  },
  { 
    label: "Academic Projects", 
    value: 2, 
    suffix: "", 
    icon: BookOpen, 
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20"
  },
];

const Counter = ({ end, duration = 2000 }: { end: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}</span>;
};

const Stats: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll width="100%">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {statsData.map((stat, idx) => (
              <div 
                key={idx} 
                className="group p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/10 hover:bg-zinc-900/60 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center text-center gap-4"
              >
                <div className={`p-3 rounded-xl ${stat.bg} ${stat.border} border group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon size={24} className={stat.color} />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1 font-mono">
                    <Counter end={stat.value} />{stat.suffix}
                  </div>
                  <div className="text-xs md:text-sm text-zinc-500 font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Stats;