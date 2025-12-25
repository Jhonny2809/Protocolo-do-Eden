
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2E5C38] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="mb-8 flex flex-col items-center">
          <div className="text-3xl font-bold font-serif mb-2 tracking-widest text-[#D4AF37]">PROTOCOLO DO ÉDEN</div>
          <div className="h-0.5 w-24 bg-[#D4AF37]/50 mb-6"></div>
        </div>
        
        <p className="text-sm text-center text-gray-300 mb-8 max-w-lg leading-relaxed">
          Este produto não substitui o parecer médico profissional. Sempre consulte seu médico antes de iniciar qualquer mudança drástica em sua dieta.
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm uppercase tracking-widest font-semibold text-[#D4AF37]">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Contato</a>
        </div>
        
        <div className="text-xs text-gray-400">
          Copyright © 2024 - Protocolo do Éden. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};
