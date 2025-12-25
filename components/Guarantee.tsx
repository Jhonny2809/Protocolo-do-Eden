
import React from 'react';

export const Guarantee: React.FC = () => {
  return (
    <section className="bg-[#F9F7F2] py-24 px-6 border-t border-[#D4AF37]/20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block bg-[#D4AF37]/10 p-6 rounded-full mb-8">
          <svg className="w-20 h-20 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
        <h2 className="text-3xl md:text-5xl text-[#2E5C38] mb-8 font-bold">
          Sua Saúde Protegida ou Seu Dinheiro de Volta
        </h2>
        <div className="text-lg md:text-xl text-gray-700 leading-relaxed space-y-6">
          <p>Eu confio tanto nos princípios originais que assumo o risco.</p>
          <p>
            Adquira o <span className="font-bold text-[#2E5C38]">Treinamento Completo</span>, aplique os ensinamentos e siga o plano por <span className="font-bold">7 dias</span>.
          </p>
          <p>
            Se você não sentir seu corpo desinchar e sua energia aumentar, basta me enviar um único e-mail e eu devolvo 100% do seu valor. Sem perguntas, sem letras miúdas.
          </p>
          <p className="font-semibold text-[#D4AF37] italic">Você não tem nada a perder, apenas saúde a ganhar.</p>
        </div>
      </div>
    </section>
  );
};
