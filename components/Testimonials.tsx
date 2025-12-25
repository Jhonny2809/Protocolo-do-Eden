
import React from 'react';

const testimonials = [
  {
    text: "Eu achava que ter azia era normal. Com apenas 3 dias aplicando o 'Intervalo Sagrado' e o treinamento do Zwieback, meu estômago parece novo. É impressionante como o simples funciona.",
    author: "Maria S., 42 anos",
    focus: "Foco na Digestão",
    image: "https://i.ibb.co/842Rjd7W/0003.jpg"
  },
  {
    text: "Minha mente vivia nublada. Depois que tirei os estimulantes e segui os treinamentos do Protocolo, sinto uma paz e uma clareza para orar e trabalhar que eu não tinha há anos.",
    author: "João P., 35 anos",
    focus: "Foco na Energia",
    image: "https://i.ibb.co/Sw6qHty0/0004.jpg"
  },
  {
    text: "Tinha medo de comida saudável ser ruim. Mas o treinamento do Assado de Nozes e do Creme de Ervilha resultam em pratos deliciosos! Minha família nem percebeu que era 'dieta'.",
    author: "Ana Clara, 29 anos",
    focus: "Foco no Sabor",
    image: "https://i.ibb.co/TMD5vZb3/0006.jpg"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="bg-[#F9F7F2] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-center text-[#2E5C38] font-bold mb-16">Pessoas que Restauraram seu Templo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-[#2E5C38]/5 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={t.image} 
                  alt={t.author} 
                  className="w-16 h-16 rounded-full border-2 border-[#D4AF37] object-cover" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${t.author}&background=F9F7F2&color=2E5C38`;
                  }}
                />
                <div>
                  <h4 className="font-bold text-[#2E5C38]">{t.author}</h4>
                  <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">{t.focus}</span>
                </div>
              </div>
              <p className="text-gray-700 italic leading-relaxed">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
