"use client";

import React, { useEffect, useState } from "react";

export default function ParallaxBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized offset from -1 to 1
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Serene Gold Glows */}
      <div
        className="absolute w-[45vw] h-[45vw] rounded-full bg-primary/8 blur-[120px] transition-transform duration-1000 ease-out"
        style={{
          top: "15%",
          left: "10%",
          transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 40}px)`,
        }}
      />
      <div
        className="absolute w-[50vw] h-[50vw] rounded-full bg-secondary/6 blur-[150px] transition-transform duration-1000 ease-out"
        style={{
          bottom: "10%",
          right: "5%",
          transform: `translate(${mousePos.x * -30}px, ${mousePos.y * -30}px)`,
        }}
      />

      {/* Ruby specific glows that add a layer of warmth */}
      <div
        className="absolute w-[35vw] h-[35vw] rounded-full bg-tertiary/6 blur-[110px] transition-transform duration-1000 ease-out opacity-40"
        style={{
          top: "40%",
          left: "50%",
          transform: `translate(${mousePos.x * -20}px, ${mousePos.y * 50}px)`,
        }}
      />
    </div>
  );
}
