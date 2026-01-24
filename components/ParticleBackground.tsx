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
      radius: 150 // Increased radius for smoother interaction
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
        
        // Slower, more "floating" velocity
        this.dx = (Math.random() - 0.5) * 0.2;
        this.dy = (Math.random() - 0.5) * 0.2;
        
        // Slightly varied sizes, but generally small
        this.size = Math.random() * 2 + 0.5;
        
        // Density for interaction mass
        this.density = (Math.random() * 20) + 1;
        
        // Low opacity for subtle effect (0.05 to 0.3)
        this.alpha = Math.random() * 0.25 + 0.05;

        // Theme colors: Purple, Blue, White - using rgb for alpha injection
        const colors = [
          { r: 168, g: 85, b: 247 }, // Purple-500
          { r: 59, g: 130, b: 246 }, // Blue-500
          { r: 255, g: 255, b: 255 }  // White
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
          const maxDistance = mouse.radius;
          const force = (maxDistance - distance) / maxDistance;
          
          // Smoother, dampened response
          const directionX = forceDirectionX * force * this.density * 0.6;
          const directionY = forceDirectionY * force * this.density * 0.6;

          this.x -= directionX;
          this.y -= directionY;
        }

        // Screen wrapping with buffer to avoid popping
        if (this.x < -10) this.x = canvas.width + 10;
        if (this.x > canvas.width + 10) this.x = -10;
        if (this.y < -10) this.y = canvas.height + 10;
        if (this.y > canvas.height + 10) this.y = -10;
      }
    }

    const init = () => {
      particles = [];
      // Adjust density: fewer particles for a cleaner look
      const particleCount = (canvas.width * canvas.height) / 15000;
      
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