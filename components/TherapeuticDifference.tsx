
import React from 'react';

export const TherapeuticDifference: React.FC = () => {
  return (
    <section className="bg-white py-24 px-6 border-y border-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl text-[#2E5C38] font-bold mb-6">
            Não é Apenas um Treinamento. São Prescrições da Natureza.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed italic">
            "Qualquer um pode achar instruções de culinária na internet. Mas apenas o Protocolo do Éden te treina para saber:"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#2E5C38]/10 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl">🍞</span>
            </div>
            <h4 className="text-lg font-bold text-[#2E5C38] mb-3">Digestão Aliviada</h4>
            <p className="text-gray-600">O que consumir para acabar com o refluxo e a queimação.</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#2E5C38]/10 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl">☀️</span>
            </div>
            <h4 className="text-lg font-bold text-[#2E5C38] mb-3">Mente Serena</h4>
            <p className="text-gray-600">Como o desjejum correto elimina a ansiedade e os tremores matinais.</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#2E5C38]/10 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl">🌙</span>
            </div>
            <h4 className="text-lg font-bold text-[#2E5C38] mb-3">Sono Reparador</h4>
            <p className="text-gray-600">Qual nutrição garante um sono profundo e restaurador.</p>
          </div>
        </div>

        <div className="mt-16 p-8 bg-[#F9F7F2] rounded-3xl border border-[#D4AF37]/20 text-center italic text-lg text-gray-700">
          "Cada etapa deste treinamento foi meticulosamente selecionada não apenas pelo seu sabor excepcional, mas pelo seu poder específico de restaurar uma parte do seu corpo, seguindo rigorosamente os princípios originais de saúde defendidos por Ellen G. White."
        </div>
      </div>
    </section>
  );
};
