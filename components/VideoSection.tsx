import React, { useEffect, useRef, useState } from 'react';

export const VideoSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldPlay, setShouldPlay] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Trigger when 40% of the video container is visible
        if (entry.isIntersecting) {
          setShouldPlay(true);
          observer.disconnect(); // Play only once
        }
      },
      { threshold: 0.4 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Base URL for Vimeo player. Removed 'controls=0' to allow user interaction if autoplay is blocked.
  const baseUrl = "https://player.vimeo.com/video/1163642759?badge=0&autopause=0&player_id=0&app_id=58479";
  
  // Try to autoplay with sound (muted=0). Note: Browsers may still block audio autoplay.
  const videoSrc = shouldPlay ? `${baseUrl}&autoplay=1&muted=0` : baseUrl;

  return (
    <section className="bg-white py-12 md:py-20 px-0 md:px-6 border-b border-[#F9F7F2]">
      <div className="max-w-4xl mx-auto text-center mb-8 md:mb-10 px-6">
        <h2 className="text-2xl md:text-4xl text-[#2E5C38] font-bold mb-4 font-serif leading-tight">
          Um princípio simples para cada dia do ano
        </h2>
        <p className="text-base md:text-lg text-gray-600 font-light max-w-2xl mx-auto">
          Entenda como o Calendário do Éden organiza esses princípios na prática.
        </p>
      </div>

      <div ref={containerRef} className="max-w-4xl mx-auto w-full">
        {/* 
          Mobile: Aspect Square (1:1) to make it larger vertically.
          Desktop (md): Aspect Video (16:9) for standard presentation.
        */}
        <div className="relative w-full aspect-square md:aspect-video md:rounded-xl overflow-hidden md:shadow-2xl md:border-4 md:border-[#F9F7F2]">
          <iframe 
            src={videoSrc}
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0" 
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            title="Calendario do edem"
          ></iframe>
        </div>
      </div>
    </section>
  );
};