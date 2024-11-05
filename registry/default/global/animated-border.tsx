'use client'
import React, { useEffect, useState, useRef } from "react";

const AnimatedBorder: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const separatorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (separatorRef.current) {
        const rect = separatorRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const start = windowHeight;
        const end = rect.height + windowHeight / 1.5;
        const scrollProgress = Math.min(
          Math.max((windowHeight - rect.top) / (end - start), 0),
          1,
        );

        setProgress(scrollProgress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={separatorRef}
      className="isolate contain-style"
      style={{ "--progress": progress } as React.CSSProperties}
    >
      <div
        className="pointer-events-none select-none relative z-[-1] w-full h-[600x] mb-[-600px] after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:to-[var(--color-bg-primary)] after:opacity-70"
        style={{
          background: `conic-gradient(from 90deg at ${76.54861 - 76.54861 * progress}% 0%, rgba(97,106,115,.12), transparent 180deg) 0% 0% / 50% 100% no-repeat, conic-gradient(from 270deg at ${23.45139 + 76.54861 * progress}% 0%, transparent 180deg, rgba(97,106,115,.12)) 100% 0% / 50% 100% no-repeat`,
          opacity: 0.808628 + 0.191372 * progress,
        }}
      ></div>
    </div>
  );
};

export default AnimatedBorder;
