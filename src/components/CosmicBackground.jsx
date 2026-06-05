import { useEffect, useRef } from 'react';

export default function CosmicBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle system
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 1000;
        this.size = Math.random() * 2;
        this.opacity = Math.random() * 0.5 + 0.5;
        this.vz = Math.random() * 2 + 1;
        this.twinkleSpeed = Math.random() * 0.02 + 0.01;
        this.twinkleValue = Math.random();
      }

      update() {
        this.z -= this.vz;
        this.twinkleValue += this.twinkleSpeed;

        if (this.z <= 0) {
          this.z = 1000;
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }
      }

      draw() {
        const perspective = canvas.width / (2 * Math.atan(Math.PI / 6));
        const x = (this.x - canvas.width / 2) * (perspective / this.z) + canvas.width / 2;
        const y = (this.y - canvas.height / 2) * (perspective / this.z) + canvas.height / 2;
        const scale = perspective / this.z;

        const twinkle = Math.abs(Math.sin(this.twinkleValue)) * this.opacity;

        ctx.fillStyle = `rgba(255, 255, 255, ${twinkle})`;
        ctx.shadowColor = `rgba(100, 200, 255, ${twinkle * 0.5})`;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(x, y, this.size * scale, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    const particles = [];
    for (let i = 0; i < 500; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    let animationId;
    const animate = () => {
      // Background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#0a0e27');
      gradient.addColorStop(0.5, '#1a0a3e');
      gradient.addColorStop(1, '#0f0a2e');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: 'linear-gradient(180deg, #0a0e27 0%, #1a0a3e 50%, #0f0a2e 100%)' }}
    />
  );
}