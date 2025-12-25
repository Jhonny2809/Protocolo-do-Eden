
import React from 'react';

export const Offers: React.FC = () => {
  const handlePurchase = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="offers" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl text-[#2E5C38] font-bold mb-4">Escolha Como Começar Sua Reforma</h2>
        <p className="text-gray-500 font-light max-w-2xl mx-auto">
          Tenha em mãos o treinamento que restaura o templo do Espírito através da culinária ancestral.
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Package 1: PACOTE DEGUSTAÇÃO */}
        <div className="bg-white border-2 border-gray-100 p-8 rounded-3xl shadow-sm flex flex-col h-full opacity-90 transition-all hover:border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold tracking-widest text-gray-500 uppercase mb-2">Pacote Degustação</h3>
            <p className="text-gray-400 font-light mb-4">Para Iniciantes</p>
            <div className="text-gray-400 line-through text-lg">R$ 29,90</div>
            <div className="text-3xl font-bold text-gray-700">R$ 17,90</div>
          </div>
          
          <ul className="space-y-4 mb-10 flex-grow text-left">
            <li className="flex items-center gap-3">
              <span className="text-green-500">✅</span>
              <span className="text-gray-600 font-medium">Os 10 Treinamentos Essenciais</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-500">✅</span>
              <span className="text-gray-600">O kit básico para começar agora</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-500">✅</span>
              <span className="text-gray-600">Guia de Preparo em PDF</span>
            </li>
            <li className="flex items-center gap-3 opacity-30">
              <span className="text-red-400">❌</span>
              <span className="text-gray-400">Sem Treinamento Terapêutico Completo</span>
            </li>
            <li className="flex items-center gap-3 opacity-30">
              <span className="text-red-400">❌</span>
              <span className="text-gray-400">Sem Atualizações Vitalícias</span>
            </li>
          </ul>
          
          <button 
            onClick={() => handlePurchase('https://pay.cakto.com.br/ffnny9p')}
            className="w-full bg-gray-700 hover:bg-gray-800 text-white py-4 rounded-xl font-bold transition-all shadow-md"
          >
            QUERO OS 10 TREINAMENTOS BÁSICOS
          </button>
        </div>

        {/* Package 2: O TREINAMENTO COMPLETO */}
        <div className="bg-[#F9F7F2] border-2 border-[#2E5C38] p-8 rounded-3xl shadow-2xl relative transform md:scale-105 z-20 mt-8 md:mt-0">
          <div className="absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-white px-4 py-1.5 md:px-6 md:py-2 rounded-full font-bold shadow-lg flex items-center gap-2 whitespace-nowrap text-[10px] sm:text-xs md:text-sm tracking-tighter sm:tracking-normal">
            👑 RECOMENDADO / MAIS COMPLETO
          </div>
          
          <div className="text-center mt-6 mb-8">
            <h3 className="text-2xl font-bold tracking-widest text-[#2E5C38] uppercase mb-2">O Treinamento Completo</h3>
            <p className="text-[#2E5C38]/70 font-light mb-4">A Sabedoria Terapêutica na Sua Cozinha</p>
            <div className="text-[#2E5C38]/40 line-through text-lg">R$ 97,90</div>
            <div className="text-4xl font-bold text-[#2E5C38]">R$ 37,90</div>
            <p className="text-[#2E5C38]/60 text-sm mt-1">(Pagamento Único)</p>
          </div>
          
          <ul className="space-y-5 mb-10 text-left text-gray-700">
            <li className="flex items-start gap-3">
              <span className="mt-1">✅</span>
              <span><strong>Acervo Completo:</strong> 30 Treinamentos Terapêuticos (Variedade total para sua saúde).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1">✅</span>
              <span><strong>O Guia "Para Que Serve":</strong> Explicação do benefício de cada treinamento (Digestão, Sono, Energia).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1">✅</span>
              <span><strong>Manual de Substituições:</strong> Como adaptar ingredientes conforme sua região.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1">✅</span>
              <span><strong>Acesso Vitalício:</strong> Inclui todas as atualizações e novos módulos futuros.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1">✅</span>
              <span><strong>Qualidade HD:</strong> Material pronto para impressão ou leitura digital.</span>
            </li>
          </ul>
          
          <button 
            onClick={() => handlePurchase('https://pay.cakto.com.br/yhbzejf_699133')}
            className="w-full bg-[#2E5C38] hover:bg-[#1f3f26] text-white py-5 rounded-xl text-xl font-bold shadow-xl animate-pulse-soft transition-all"
          >
            QUERO O TREINAMENTO COMPLETO
          </button>
          <p className="text-center text-xs text-gray-500 mt-4 italic">
            Menos de R$ 0,15 centavos por treinamento terapêutico.
          </p>
        </div>
      </div>
    </section>
  );
};
