'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from './ThemeProvider';

export default function ParticlesBackground() {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    // Track mouse position relative to the hero section container
    const mouse = {
      x: null,
      y: null,
      radius: 180, // Influence radius for drawing connections
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    // Listen to mouse movement on the parent container (Hero section)
    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove);
      parent.addEventListener('mouseleave', handleMouseLeave);
    }

    // Set particle density based on screen size
    const calculateParticleCount = (w, h) => {
      return Math.min(80, Math.max(30, Math.floor((w * h) / 18000)));
    };

    let particleCount = calculateParticleCount(width, height);
    let particles = [];

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(init = false) {
        this.x = init ? Math.random() * width : (Math.random() > 0.5 ? 0 : width);
        this.y = init ? Math.random() * height : (Math.random() > 0.5 ? 0 : height);
        this.vx = (Math.random() - 0.5) * 0.5; // slow speed for subtle effect
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce/Wrap boundaries gently
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Subtle pull towards cursor if mouse is nearby (gravitational effect)
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            // Extremely gentle attraction force
            this.x += (dx / dist) * force * 0.15;
            this.y += (dy / dist) * force * 0.15;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      
      // Re-adjust particle count slightly on resize
      const newCount = calculateParticleCount(width, height);
      if (newCount > particles.length) {
        for (let i = particles.length; i < newCount; i++) {
          particles.push(new Particle());
        }
      } else if (newCount < particles.length) {
        particles.splice(newCount);
      }
    };

    window.addEventListener('resize', handleResize);

    // Accent colors based on CSS design tokens
    const getParticleColor = () => {
      return theme === 'dark' ? 'rgba(124, 115, 255, 0.45)' : 'rgba(108, 99, 255, 0.45)';
    };

    const getLineColor = (opacity) => {
      return theme === 'dark' 
        ? `rgba(124, 115, 255, ${opacity})`
        : `rgba(108, 99, 255, ${opacity})`;
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Set node fill color
      ctx.fillStyle = getParticleColor();

      // Update and draw nodes
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      // Draw connection lines between nearby nodes (neural net effect)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Connect only if distance is close enough (e.g. 110px)
          if (dist < 110) {
            const opacity = ((110 - dist) / 110) * 0.12; // soft connections
            ctx.strokeStyle = getLineColor(opacity);
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Draw connections from nodes to mouse cursor
        if (mouse.x !== null && mouse.y !== null) {
          const p = particles[i];
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const opacity = ((mouse.radius - dist) / mouse.radius) * 0.22;
            ctx.strokeStyle = getLineColor(opacity);
            ctx.lineWidth = 1.0;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
        parent.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
