import React, { useEffect, useState, useRef } from "react";
import "./style.css";

const Saperator: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const separatorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (separatorRef.current) {
        const rect = separatorRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const start = windowHeight;
        const end = rect.height + windowHeight / 1.5;
        const scrollProgress = Math.min(Math.max((windowHeight - rect.top) / (end - start), 0), 1);

        setProgress(scrollProgress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  console.log(progress)

  return (
    <div ref={separatorRef} className="isolate contain-style" style={{ "--progress": progress } as React.CSSProperties}>
      <div
        className="Conic_conic__HBaxC"
        style={{
          background: `conic-gradient(from 90deg at ${76.54861 - 76.54861 * progress}% 0%, var(--top), var(--bottom) 180deg) 0% 0% / 50% 100% no-repeat, conic-gradient(from 270deg at ${23.45139 + 76.54861 * progress}% 0%, var(--bottom) 180deg, var(--top)) 100% 0% / 50% 100% no-repeat`,
          opacity: 0.808628 + 0.191372 * progress,
        }}
      ></div>
    </div>
  );
};

export default Saperator;