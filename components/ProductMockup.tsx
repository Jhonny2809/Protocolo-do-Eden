
import React, { useState, useEffect } from 'react';

const internalImages = [
  "https://i.ibb.co/WvW7mt5Y/1.jpg",
  "https://i.ibb.co/cckXCQQR/2.jpg",
  "https://i.ibb.co/tPh12NMM/3.jpg",
  "https://i.ibb.co/fGHzxwX1/4.jpg",
  "https://i.ibb.co/LhtNFZ6j/5.jpg",
  "https://i.ibb.co/cSPrjvBq/6.jpg"
];

export const ProductMockup: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    if (!isLightboxOpen) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % internalImages.length);
      }, 3500);
      return () => clearInterval(timer);
    }
  }, [isLightboxOpen]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => setIsLightboxOpen(false);

  const nextLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % internalImages.length);
  };

  const prevLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + internalImages.length) % internalImages.length);
  };

  return (
    <section className="bg-[#F9F7F2] py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-5xl text-[#2E5C38] font-bold mb-6">
            O Seu Novo Material de Treinamento
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Receba acesso imediato ao treinamento digital com <strong>30 Módulos Terapêuticos</strong>. Veja como o material é organizado para facilitar sua jornada de restauração. 
          </p>
          <div className="flex items-center gap-6 text-[#D4AF37] font-bold uppercase tracking-widest text-xs">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
              Material Digital
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              Acesso Instantâneo
            </span>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative flex justify-center">
          {/* Image Container with Elegant Frame */}
          <div 
            className="relative z-10 w-full max-w-[400px] aspect-[3/4.2] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-gold/20 p-2 sm:p-4 cursor-zoom-in group"
            onClick={() => openLightbox(currentIndex)}
          >
            {/* Carousel Images */}
            {internalImages.map((img, idx) => (
              <div 
                key={idx}
                className={`absolute inset-2 sm:inset-4 transition-opacity duration-1000 ease-in-out ${idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              >
                <img 
                  src={img} 
                  className="w-full h-full object-contain bg-white"
                  alt={`Treinamento por dentro ${idx + 1}`}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800";
                  }}
                />
              </div>
            ))}

            {/* Hint Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-20 flex items-center justify-center">
              <span className="bg-white/90 text-[#2E5C38] px-4 py-2 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity shadow-lg scale-90 group-hover:scale-100 transform duration-300">
                CLIQUE PARA AMPLIAR
              </span>
            </div>

            {/* Carousel Indicators (Dots) */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-30">
              {internalImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-[#2E5C38] w-4' : 'bg-gray-200'}`}
                  aria-label={`Ir para imagem ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Decorative Backdrops */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#D4AF37]/5 rounded-full z-0 blur-3xl"></div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-10 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110]"
            onClick={closeLightbox}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>

          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors hidden sm:block"
            onClick={prevLightboxImage}
          >
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>

          <img 
            src={internalImages[lightboxIndex]} 
            className="max-w-full max-h-full object-contain shadow-2xl rounded-lg animate-in zoom-in-95 duration-300"
            alt="Página do treinamento ampliada"
            onClick={(e) => e.stopPropagation()}
          />

          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors hidden sm:block"
            onClick={nextLightboxImage}
          >
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>

          <div className="absolute bottom-10 text-white/60 font-medium tracking-widest text-sm">
            PÁGINA {lightboxIndex + 1} DE {internalImages.length}
          </div>
        </div>
      )}
    </section>
  );
};
