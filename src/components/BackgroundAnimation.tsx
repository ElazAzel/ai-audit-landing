"use client";

import { useRef, useEffect } from "react";
import { useReducedMotion, useScroll, useTransform, motion } from "motion/react";

function GridPattern() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 2000], [0, prefersReducedMotion ? 0 : -120]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        y,
        backgroundImage: `
          linear-gradient(rgba(201, 196, 185, 0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(201, 196, 185, 0.04) 1px, transparent 1px)
        `,
        backgroundSize: "64px 64px",
        maskImage: "radial-gradient(ellipse at 50% 0%, black 40%, transparent 70%)",
        WebkitMaskImage: "radial-gradient(ellipse at 50% 0%, black 40%, transparent 70%)",
      }}
    />
  );
}

function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const scrollVal = useRef(0);

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => { scrollVal.current = v; });
    return unsub;
  }, [scrollY]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let anim: number;
    let w = window.innerWidth;
    let h = window.innerHeight;

    const resize = () => { w = window.innerWidth; h = window.innerHeight; canvas.width = w; canvas.height = h; };
    resize();
    window.addEventListener("resize", resize);

    const count = Math.min(Math.floor((w * h) / 30000), 40);
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      size: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.25 + 0.05,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const parallax = scrollVal.current * 0.12;

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        const drawY = p.y - parallax;
        if (drawY < -20 || drawY > h + 20) continue;

        ctx.beginPath();
        ctx.arc(p.x, drawY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 196, 185, ${p.alpha})`;
        ctx.fill();
      }
      anim = requestAnimationFrame(draw);
    };
    draw();

    return () => { cancelAnimationFrame(anim); window.removeEventListener("resize", resize); };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0" aria-hidden="true" />;
}

export default function BackgroundAnimation() {
  return (
    <>
      <GridPattern />
      <Particles />
    </>
  );
}
