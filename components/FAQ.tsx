
import React, { useState } from 'react';

const faqs = [
  {
    q: "Preciso ser vegetariano para começar?",
    a: "Não. O Protocolo guia você na transição. Na primeira semana, você foca na limpeza, sem precisar cortar tudo de uma vez."
  },
  {
    q: "Os treinamentos são caros ou difíceis?",
    a: "Pelo contrário. Ellen White defendia a simplicidade. Ensinamos pratos com ingredientes comuns (aveia, batata, lentilha, frutas) que você acha na feira. É mais barato que comer carne."
  },
  {
    q: "Como recebo o material?",
    a: "Imediatamente após a aprovação do pagamento, você recebe um e-mail com o link para acessar seu treinamento completo em PDF."
  },
  {
    q: "O treinamento serve para quem tem diabetes ou pressão alta?",
    a: "Sim. O treinamento ensina preparos baixos em sódio e ricos em fibras, ideais para o controle dessas condições (mas sempre consulte seu médico)."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl text-center text-[#2E5C38] font-bold mb-16">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-100 last:border-0 pb-4">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left py-4 flex justify-between items-center group"
              >
                <span className="text-xl font-semibold text-gray-800 group-hover:text-[#2E5C38] transition-colors">{faq.q}</span>
                <span className={`transform transition-transform duration-300 text-[#D4AF37] ${openIndex === idx ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-40' : 'max-h-0'}`}>
                <p className="text-gray-600 pb-4 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
