
import React from 'react';

export const AuthoritySection: React.FC = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative group">
            {/* Moldura decorativa sutil */}
            <div className="absolute inset-0 bg-[#D4AF37]/20 rounded-lg -rotate-3 transition-transform group-hover:rotate-0"></div>
            <img 
              src="https://i.ibb.co/3yYG8Bwt/Gemini-Generated-Image-z0l63sz0l63sz0l6.png" 
              alt="Ellen G. White" 
              className="relative z-10 w-full max-w-sm rounded-lg shadow-2xl contrast-110 sepia-[0.2]"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-5xl text-[#2E5C38] mb-6 font-bold leading-tight">
            Uma Visão 100 Anos à Frente do Seu Tempo
          </h2>
          <div className="space-y-4 text-lg text-[#333333] leading-relaxed">
            <p>
              No século 19, Ellen G. White escreveu extensivamente sobre a relação entre o que comemos e como pensamos. Ela falou sobre os perigos do açúcar, a importância da água pura e o poder da dieta baseada em plantas.
            </p>
            <p>
              Hoje, a ciência moderna e os estudos das <span className="text-[#2E5C38] font-bold">Blue Zones</span> (os lugares onde as pessoas vivem mais) confirmam: <span className="italic font-serif">"Ela estava certa."</span>
            </p>
            <p>
              Não se trata de religião. Trata-se de biologia divina. Nós organizamos esse conhecimento vasto em um método simples para você aplicar na sua cozinha hoje.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
