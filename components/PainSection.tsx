
import React from 'react';

export const PainSection: React.FC = () => {
  return (
    <section className="bg-[#F9F7F2] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl text-[#2E5C38] mb-8 font-bold">
          Por que nos sentimos tão cansados, mesmo comendo tanto?
        </h2>
        <div className="space-y-6 text-lg md:text-xl leading-relaxed text-[#333333] font-light italic">
          <p>
            Você sente que seu corpo está sempre pesado? Que a digestão é lenta, a ansiedade é constante e a clareza mental desapareceu?
          </p>
          <p>
            A culpa não é sua. O mundo moderno nos afastou do <span className="font-semibold text-[#2E5C38]">Plano Original</span>. Enchemos nosso "templo" com estimulantes, processados e excessos que inflamam não apenas nossas células, mas confundem nosso espírito.
          </p>
          <p className="font-semibold text-2xl pt-4">
            A verdadeira cura não está na farmácia. Ela está no retorno à simplicidade.
          </p>
        </div>
      </div>
    </section>
  );
};
