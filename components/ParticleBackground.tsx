import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    
    // Mouse state
    let mouse = {
      x: -1000,
      y: -1000,
      radius: 150 // Radius for interaction
    };

    class Particle {
      x: number;
      y: number;
      dx: number;
      dy: number;
      size: number;
      density: number;
      color: string;
      alpha: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        
        // Slower, more "floating" velocity for premium feel
        this.dx = (Math.random() - 0.5) * 0.5; 
        this.dy = (Math.random() - 0.5) * 0.5;
        
        // Slightly variable size, keeping it small and elegant
        this.size = Math.random() * 2 + 1;
        
        // Density affects how quickly they react to the mouse
        this.density = (Math.random() * 20) + 1;
        
        // Medium opacity for visibility without obstruction (0.1 to 0.5)
        this.alpha = Math.random() * 0.4 + 0.1;

        // Theme colors: Purple, Blue, and a subtle Slate for depth
        const colors = [
          { r: 168, g: 85, b: 247 }, // Purple-500
          { r: 59, g: 130, b: 246 }, // Blue-500
          { r: 148, g: 163, b: 184 } // Slate-400
        ];
        
        const color = colors[Math.floor(Math.random() * colors.length)];
        this.color = `rgba(${color.r}, ${color.g}, ${color.b}, ${this.alpha})`;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        // Floating movement
        this.x += this.dx;
        this.y += this.dy;

        // Mouse interaction (Gentle Repulsion)
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouse.radius - distance) / mouse.radius;
          
          // Smoother response
          const directionX = forceDirectionX * force * this.density * 0.6;
          const directionY = forceDirectionY * force * this.density * 0.6;

          this.x -= directionX;
          this.y -= directionY;
        }

        // Seamless wrapping around the screen
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }
    }

    const init = () => {
      particles = [];
      // Calculate particle count based on screen area for consistent density
      // Roughly 1 particle per 10000 pixels
      const particleCount = (canvas.width * canvas.height) / 10000;
      
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    // Event Listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Initial setup
    handleResize();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" style={{ background: 'transparent' }} />;
};

export default ParticleBackground;