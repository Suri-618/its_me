import React, { useEffect, useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
}

const RevealOnScroll: React.FC<Props> = ({ children, width = "fit-content", delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div 
      ref={ref} 
      style={{ width, transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] transform ${
        isVisible 
          ? 'opacity-100 translate-y-0 filter blur-0 scale-100' 
          : 'opacity-0 translate-y-8 filter blur-sm scale-95'
      }`}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;