"use client";

import React from "react";

const LiquidBlob = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-[#080a0f] rounded-[40px] overflow-hidden border border-white/10 shadow-[0_30px_60px_-10px_rgba(0,0,0,0.8),inset_0_0_0_1px_rgba(255,255,255,0.1)]">
      {/* 1. The SVG Filter (Hidden) 
          High blur + High contrast = Liquid "Snap" effect 
      */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="natural-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -10"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* 2. The Liquid Container */}
      <div
        className="absolute inset-0 w-full h-full flex items-center justify-center opacity-90"
        style={{ filter: 'url(#natural-goo)' }}
      >
        {/* Main Center Mass - Flat 2D Deep Blue */}
        <div className="blob-center absolute rounded-full bg-[#0066CC] shadow-[inset_0_0_30px_rgba(0,0,0,0.4)]" />

        {/* The "Outward" forces - pushing the shape apart */}
        <div className="blob-1 absolute rounded-full bg-[#0066CC] shadow-[inset_0_0_30px_rgba(0,0,0,0.4)]" />
        <div className="blob-2 absolute rounded-full bg-[#0066CC] shadow-[inset_0_0_30px_rgba(0,0,0,0.4)]" />
        <div className="blob-3 absolute rounded-full bg-[#0066CC] shadow-[inset_0_0_30px_rgba(0,0,0,0.4)]" />
        <div className="blob-4 absolute rounded-full bg-[#0066CC] shadow-[inset_0_0_30px_rgba(0,0,0,0.4)]" />
      </div>

      {/* 3. Glass Reflections (The "Wet" look) */}
      <div className="absolute top-[20px] left-[20px] w-[80px] h-[40px] rounded-full bg-white/5 -rotate-[20deg] blur-[10px] pointer-events-none z-[5]" />

      {/* 4. Text Overlay / Glass Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center bg-white/[0.01] backdrop-blur-[3px] border-t border-white/[0.08] pointer-events-none">
        {/* Text removed per slide design */}
      </div>

      {/* 5. Animations */}
      <style jsx>{`
        /* Center blob - Large Anchor */
        .blob-center {
          width: 140px; height: 140px;
          animation: breathe 6s ease-in-out infinite;
        }

        /* Blob 1: Morphing Top-Right */
        .blob-1 {
          width: 100px; height: 100px;
          animation: morph-tr 7s ease-in-out infinite;
        }

        /* Blob 2: Morphing Bottom-Left */
        .blob-2 {
          width: 110px; height: 110px;
          animation: morph-bl 8s ease-in-out infinite;
          animation-delay: 1s;
        }

        /* Blob 3: Inner roaming mass */
        .blob-3 {
          width: 80px; height: 80px;
          animation: inner-orbit 10s linear infinite;
        }
        
        /* Blob 4: Top distorter */
        .blob-4 {
          width: 90px; height: 90px;
          animation: morph-top 6s ease-in-out infinite;
        }

        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }

        /* Reduced translation distances to keep everything merged */
        @keyframes morph-tr {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -25px) scale(0.9); }
        }

        @keyframes morph-bl {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-30px, 25px) scale(0.95); }
        }

        @keyframes morph-top {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(10px, -35px) scale(1.05); }
        }

        /* Tighter orbit to stay inside the mass */
        @keyframes inner-orbit {
          0% { transform: rotate(0deg) translateX(30px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(30px) rotate(-360deg); }
        }
      `}</style>
    </div>
  );
};

export default LiquidBlob;
