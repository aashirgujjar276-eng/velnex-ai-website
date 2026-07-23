import React, { useEffect, useRef } from "react";

export default function AgentNetworkCanvas({ light = false }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width, height, dpr, nodes = [], raf;
    const LINK_DIST = 140;
    const lineColor = light ? "255,255,255" : "255,255,255";
    const dotColor = light ? "255,255,255" : "245,243,238";

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(24, Math.min(70, Math.round((width * height) / 22000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.4 + 0.8,
        pulse: Math.random() * Math.PI * 2,
        fireAt: Math.random() * 400 + 200,
        firing: 0,
      }));
    }

    function step() {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            ctx.strokeStyle = `rgba(${lineColor},${(1 - dist / LINK_DIST) * 0.3})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        if (!reduced) {
          n.x += n.vx; n.y += n.vy;
          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;
          n.pulse += 0.02;
          n.fireAt -= 1;
          if (n.fireAt <= 0) { n.firing = 1; n.fireAt = Math.random() * 500 + 300; }
          if (n.firing > 0) n.firing = Math.max(0, n.firing - 0.02);
        }
        const glow = 0.5 + Math.sin(n.pulse) * 0.2 + n.firing * 0.6;
        ctx.beginPath();
        ctx.fillStyle = `rgba(${dotColor},${0.4 + glow * 0.35})`;
        ctx.arc(n.x, n.y, n.r + n.firing * 1.8, 0, Math.PI * 2);
        ctx.fill();
        if (n.firing > 0.05) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${lineColor},${n.firing * 0.6})`;
          ctx.lineWidth = 1;
          ctx.arc(n.x, n.y, n.r + 6 + (1 - n.firing) * 14, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
      raf = requestAnimationFrame(step);
    }

    resize();
    step();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [light]);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />
  );
}
