
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Imagem de Fundo com Sobreposição Escura e Vinheta */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://i.ibb.co/2fFjmhR/fundo.png')`,
        }}
      >
        {/* Camada de Sobreposição Escura (Overlay) */}
        <div className="absolute inset-0 bg-black/65 z-10"></div>
        
        {/* Efeito de Vinheta (Radial Gradient) */}
        <div 
          className="absolute inset-0 z-20"
          style={{
            background: 'radial-gradient(circle, transparent 20%, rgba(0,0,0,0.8) 100%)'
          }}
        ></div>
      </div>

      {/* Conteúdo Centralizado */}
      <div className="relative z-30 max-w-5xl mx-auto px-6 text-center text-white pt-20 pb-16">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
          Restaure o Altar do Seu Corpo com a Sabedoria do Design Original
        </h1>
        <p className="text-lg md:text-2xl font-light mb-10 max-w-3xl mx-auto leading-relaxed text-gray-100 drop-shadow-lg">
          Não é apenas comida. É uma reforma. Desinflame seu organismo, clareie sua mente e blinde sua saúde usando os princípios que Ellen G. White escreveu há mais de 100 anos — agora confirmados pela ciência.
        </p>
        <button 
          onClick={() => document.getElementById('offers')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-[#D4AF37] hover:bg-[#c19e32] text-white px-8 py-4 rounded-full text-lg md:text-xl font-semibold transition-all transform hover:scale-105 shadow-2xl animate-pulse-soft"
        >
          QUERO CONHECER O PROTOCOLO
        </button>
      </div>
    </header>
  );
};
