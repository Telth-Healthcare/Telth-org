// HeroQuantum.tsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type WavePoint = {
  x: number;
  y: number;
  phase: number;
  frequency: number;
  amplitude: number;
};

export default function HeroQuantum(): JSX.Element {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const quantumCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const subRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  // ---------- Quantum Wave Interference Animation ----------
  useEffect(() => {
    const quantumCanvas = quantumCanvasRef.current!;
    const particlesCanvas = particlesCanvasRef.current!;
    if (!quantumCanvas || !particlesCanvas) return;

    const ctxQuantum = quantumCanvas.getContext("2d")!;
    const ctxParticles = particlesCanvas.getContext("2d")!;

    let raf = 0;
    const DPR = Math.max(1, window.devicePixelRatio || 1);

    const resize = () => {
      const w = rootRef.current?.clientWidth || window.innerWidth;
      const h = rootRef.current?.clientHeight || window.innerHeight;

      [quantumCanvas, particlesCanvas].forEach((c) => {
        c.width = Math.floor(w * DPR);
        c.height = Math.floor(h * DPR);
        c.style.width = `${w}px`;
        c.style.height = `${h}px`;
      });

      ctxQuantum.setTransform(DPR, 0, 0, DPR, 0, 0);
      ctxParticles.setTransform(DPR, 0, 0, DPR, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // Quantum wave state
    let time = 0;
    const wavePoints: WavePoint[] = [];
    const WAVE_COUNT = 8;
    const POINTS_PER_WAVE = 120;

    // Initialize wave sources
    for (let i = 0; i < WAVE_COUNT; i++) {
      const angle = (i / WAVE_COUNT) * Math.PI * 2;
      const radius = Math.min(quantumCanvas.width, quantumCanvas.height) * 0.3;
      const centerX = quantumCanvas.width / 2 / DPR;
      const centerY = quantumCanvas.height / 2 / DPR;
      
      for (let j = 0; j < POINTS_PER_WAVE; j++) {
        const progress = j / POINTS_PER_WAVE;
        const waveAngle = angle + progress * Math.PI * 2;
        wavePoints.push({
          x: centerX + Math.cos(angle) * radius * 0.3,
          y: centerY + Math.sin(angle) * radius * 0.3,
          phase: progress * Math.PI * 2,
          frequency: 0.5 + Math.random() * 1.5,
          amplitude: 15 + Math.random() * 25
        });
      }
    }

    // Quantum particles
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
      hue: number;
    }> = [];

    function drawQuantumField() {
      const w = quantumCanvas.width / DPR;
      const h = quantumCanvas.height / DPR;
      
      // Clear with subtle fade for trail effect
      ctxQuantum.fillStyle = "rgba(5, 4, 7, 0.05)";
      ctxQuantum.fillRect(0, 0, w, h);

      time += 0.02;

      // Draw interference patterns
      const centerX = w / 2;
      const centerY = h / 2;

      for (let x = 0; x < w; x += 4) {
        for (let y = 0; y < h; y += 4) {
          let intensity = 0;
          
          // Calculate wave interference from multiple sources
          wavePoints.forEach((point, index) => {
            if (index % 20 === 0) { // Sample points for performance
              const dx = x - point.x;
              const dy = y - point.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              const wave = Math.sin(distance * 0.1 - time * point.frequency + point.phase) * point.amplitude;
              intensity += wave / 100;
            }
          });

          intensity = Math.abs(intensity);
          
          if (intensity > 0.1) {
            const alpha = Math.min(0.8, intensity * 0.3);
            const hue = 45 + Math.sin(time * 0.5 + intensity) * 10; // Gold to amber
            ctxQuantum.fillStyle = `hsla(${hue}, 70%, 60%, ${alpha})`;
            ctxQuantum.fillRect(x, y, 2, 2);
          }
        }
      }

      // Draw wave sources and connections
      ctxQuantum.strokeStyle = "rgba(212, 165, 84, 0.1)";
      ctxQuantum.lineWidth = 1;
      
      wavePoints.forEach((point, i) => {
        if (i % 10 === 0) {
          const nextPoint = wavePoints[(i + 1) % wavePoints.length];
          ctxQuantum.beginPath();
          ctxQuantum.moveTo(point.x, point.y);
          ctxQuantum.lineTo(nextPoint.x, nextPoint.y);
          ctxQuantum.stroke();
        }

        // Pulsing source points
        const pulse = Math.sin(time * point.frequency + point.phase) * 3;
        ctxQuantum.fillStyle = `rgba(212, 165, 84, ${0.3 + Math.sin(time) * 0.2})`;
        ctxQuantum.beginPath();
        ctxQuantum.arc(point.x, point.y, 2 + pulse, 0, Math.PI * 2);
        ctxQuantum.fill();
      });

      // Create new particles at wave peaks
      if (time % 0.5 < 0.1) {
        for (let i = 0; i < 3; i++) {
          const angle = Math.random() * Math.PI * 2;
          const distance = 100 + Math.random() * 200;
          particles.push({
            x: centerX + Math.cos(angle) * distance,
            y: centerY + Math.sin(angle) * distance,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            life: 0,
            maxLife: 60 + Math.random() * 60,
            size: 1 + Math.random() * 3,
            hue: 40 + Math.random() * 20
          });
        }
      }
    }

    function drawParticles() {
      const w = particlesCanvas.width / DPR;
      const h = particlesCanvas.height / DPR;
      
      // Clear with fade for trail
      ctxParticles.fillStyle = "rgba(5, 4, 7, 0.1)";
      ctxParticles.fillRect(0, 0, w, h);

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        p.vx *= 0.98;
        p.vy *= 0.98;

        const lifeRatio = p.life / p.maxLife;
        const alpha = (1 - lifeRatio) * 0.8;

        // Glow effect
        const gradient = ctxParticles.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
        gradient.addColorStop(0, `hsla(${p.hue}, 80%, 70%, ${alpha})`);
        gradient.addColorStop(1, `hsla(${p.hue}, 80%, 50%, 0)`);
        
        ctxParticles.fillStyle = gradient;
        ctxParticles.beginPath();
        ctxParticles.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
        ctxParticles.fill();

        // Core particle
        ctxParticles.fillStyle = `hsla(${p.hue}, 100%, 80%, ${alpha})`;
        ctxParticles.beginPath();
        ctxParticles.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctxParticles.fill();

        // Remove dead particles
        if (p.life > p.maxLife) {
          particles.splice(i, 1);
        }
      }
    }

    function loop() {
      drawQuantumField();
      drawParticles();
      raf = requestAnimationFrame(loop);
    }

    raf = requestAnimationFrame(loop);

    // Mouse interaction for wave disturbance
    let mouseX = -1000;
    let mouseY = -1000;
    
    const onMouseMove = (e: MouseEvent) => {
      const rect = rootRef.current!.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  // ---------- GSAP entrance & scroll/parallax ----------
  useEffect(() => {
    const heading = headingRef.current;
    const sub = subRef.current;
    const cta = ctaRef.current;
    if (!heading || !sub || !cta) return;

    // initial staging
    gsap.set([heading, sub, cta], { y: 30, opacity: 0, willChange: "transform,opacity" });

    const tl = gsap.timeline();
    tl.to(heading, { y: 0, opacity: 1, duration: 0.9, ease: "expo.out" })
      .to(sub, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }, "-=0.45")
      .to(cta, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.45");

    // subtle scroll parallax for heading (move slightly upward on scroll)
    const st = ScrollTrigger.create({
      trigger: heading,
      start: "top center",
      end: "bottom top",
      scrub: true,
      onUpdate(self) {
        const progress = self.progress;
        gsap.to(heading, { y: -progress * 60, duration: 0.3, ease: "power1.out" });
      },
    });

    // CTA hover micro animations
    const links = cta.querySelectorAll("a");
    links.forEach((l) => {
      l.addEventListener("mouseenter", () => gsap.to(l, { scale: 1.03, boxShadow: "0 20px 50px rgba(212,165,84,0.08)", duration: 0.25 }));
      l.addEventListener("mouseleave", () => gsap.to(l, { scale: 1, boxShadow: "none", duration: 0.25 }));
    });

    return () => {
      tl.kill();
      st.kill();
      links.forEach((l) => {
        l.removeEventListener("mouseenter", () => {});
        l.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  // ---------- Render ----------
  return (
    <div ref={rootRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050407]">
      {/* Canvas layers */}
      <canvas
        ref={quantumCanvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        aria-hidden
      />
      <canvas
        ref={particlesCanvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-20"
        aria-hidden
      />

      {/* Subtle gradient overlay for depth */}
      <div
        aria-hidden
        className="absolute inset-0 z-30 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(212, 165, 84, 0.03) 0%, transparent 40%),
            radial-gradient(ellipse at 80% 70%, rgba(100, 65, 164, 0.02) 0%, transparent 40%),
            radial-gradient(ellipse at 40% 80%, rgba(5, 4, 7, 0.8) 0%, transparent 50%)
          `,
          mixBlendMode: "overlay",
        }}
      />

      {/* Content */}
      <div className="relative z-40 w-full max-w-6xl px-6 py-28 text-center">
        <h1
          ref={headingRef}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-white tracking-tight"
          style={{
            textShadow: "0 8px 30px rgba(0,0,0,0.6)",
          }}
        >
          <span className="block text-[#ECE6D6]">TELTH NETWORK</span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#D4A554] via-[#FFD966] to-[#FFE9B3]">
            THE FUTURE OF QUANTUM-AI HEALTHCARE
          </span>
        </h1>

        <p
          ref={subRef}
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          Transforming global healthcare with quantum-aware AI, IoMT, and preventive intelligence — secure, predictive, human-centered.
        </p>

        <div ref={ctaRef} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/network"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#b8892b] to-[#ffd966] text-black font-semibold px-6 py-3 rounded-xl shadow-xl transform transition"
            aria-label="Explore our ecosystem"
          >
            <span>Explore Our Ecosystem</span>
            <ArrowRight size={18} />
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 border border-[#D4A554]/30 text-[#F7F3EE] px-6 py-3 rounded-xl backdrop-blur-sm transition hover:bg-white/6"
            aria-label="Get in touch"
          >
            <span>Get In Touch</span>
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* subtle scroll indicator */}
        <div className="mt-14 flex justify-center">
          <div className="w-8 h-14 rounded-xl border-2 border-[#D4A554]/40 flex items-start justify-center p-2">
            <div className="w-2 h-2 bg-[#D4A554] rounded-full animate-bounce" />
          </div>
        </div>
      </div>

      {/* bottom glow */}
      <div className="absolute inset-x-0 bottom-0 h-40 pointer-events-none z-0" style={{ background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.6))" }} />
    </div>
  );
}