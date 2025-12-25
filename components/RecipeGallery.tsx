
import React from 'react';

const trainingItems = [
  {
    name: "O Pão Zwieback",
    benefit: "Cura a azia e melhora a digestão",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "O 'Assado' do Éden",
    benefit: "Proteína que sacia sem pesar",
    image: "https://i.ibb.co/LD4ZWwFQ/Gemini-Generated-Image-13ieyu13ieyu13ie.png"
  },
  {
    name: "Creme Dourado",
    benefit: "Conforto para o estômago e foco mental",
    image: "https://i.ibb.co/ZzG0yYDP/Gemini-Generated-Image-8wi7ut8wi7ut8wi7.png"
  },
  {
    name: "Granola da Manhã",
    benefit: "Energia estável para o dia todo",
    image: "https://i.ibb.co/7xQJWbb2/Gemini-Generated-Image-b5yl3pb5yl3pb5yl-1.png"
  }
];

export const RecipeGallery: React.FC = () => {
  return (
    <section className="bg-[#F9F7F2] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl text-[#2E5C38] font-bold mb-4">
          Sim, Comida que Cura Pode Ser Deliciosa
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-16 font-light">
          Esqueça a ideia de comida de hospital. Veja o que você vai aprender neste treinamento:
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainingItems.map((item, idx) => (
            <div key={idx} className="group flex flex-col items-center">
              <div className="relative overflow-hidden rounded-2xl mb-4 shadow-lg w-full aspect-square">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback para uma imagem genérica de comida caso ocorra erro de carregamento
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-sm italic">{item.benefit}</p>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#2E5C38] mb-1">{item.name}</h3>
              <p className="text-sm text-[#D4AF37] font-semibold uppercase tracking-wider">{item.benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
