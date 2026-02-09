import React from 'react';

export const Offers: React.FC = () => {
  /**
   * Função para processar a compra e garantir que os parâmetros de URL (UTMs) 
   * sejam repassados para a página de checkout.
   * Adicionado e.stopPropagation() para evitar erros de referência circular com pixels de rastreamento.
   */
  const handlePurchase = (e: React.MouseEvent, baseUrl: string) => {
    e.stopPropagation();
    
    // Captura os parâmetros atuais da URL (ex: ?utm_source=facebook&utm_medium=cpc...)
    const currentSearchParams = window.location.search;
    
    let finalUrl = baseUrl;

    if (currentSearchParams) {
      // Remove o '?' inicial se existir para evitar duplicação
      const cleanParams = currentSearchParams.startsWith('?') 
        ? currentSearchParams.substring(1) 
        : currentSearchParams;
      
      // Verifica se a URL base já contém parâmetros
      const separator = baseUrl.includes('?') ? '&' : '?';
      
      finalUrl = `${baseUrl}${separator}${cleanParams}`;
    }

    // Abre a URL final em uma nova aba
    window.open(finalUrl, '_blank');
  };

  return (
    <section id="offers" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl text-[#2E5C38] font-bold mb-4">Escolha Como Começar Sua Reforma</h2>
        <p className="text-gray-500 font-light max-w-2xl mx-auto">
          Tenha em mãos o treinamento que restaura o templo do Espírito através da culinária ancestral.
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">
        {/* Package 1: PACOTE DEGUSTAÇÃO */}
        <div className="bg-white border-2 border-gray-100 p-8 rounded-3xl shadow-sm flex flex-col h-full opacity-90 transition-all hover:border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold tracking-widest text-gray-500 uppercase mb-2">Pacote Degustação</h3>
            <p className="text-gray-400 font-light mb-4">Para Iniciantes</p>
            <div className="text-gray-400 line-through text-lg">R$ 29,90</div>
            <div className="text-3xl font-bold text-gray-700">R$ 10,90</div>
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
            onClick={(e) => handlePurchase(e, 'https://pay.cakto.com.br/ffnny9p')}
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
            <p className="text-[#2E5C38]/70 font-light mb-4">Ideal para quem deseja aplicar os princípios com clareza, segurança e simplicidade no dia a dia.</p>
            <div className="text-[#2E5C38]/40 line-through text-lg">R$ 97,90</div>
            <div className="text-4xl font-bold text-[#2E5C38]">R$ 18,90</div>
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
            onClick={(e) => handlePurchase(e, 'https://pay.cakto.com.br/yhbzejf_699133')}
            className="w-full bg-[#2E5C38] hover:bg-[#1f3f26] text-white py-5 rounded-xl text-xl font-bold shadow-xl animate-pulse-soft transition-all"
          >
            QUERO O TREINAMENTO COMPLETO
          </button>
          <p className="text-center text-xs text-gray-500 mt-4 italic">
            Menos de R$ 0,63 centavos por treinamento terapêutico.
          </p>
        </div>
      </div>

      {/* NOVA SEÇÃO: Detalhamento do Treinamento Completo */}
      <div className="max-w-4xl mx-auto pt-12 border-t border-gray-100">
        <div className="text-center mb-12">
          <h3 className="text-3xl text-[#2E5C38] font-bold mb-2">
            O Que Você Recebe no Treinamento Completo
          </h3>
          <p className="text-[#2E5C38] font-medium mb-6">
            Disponível exclusivamente no Treinamento Completo.
          </p>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light">
            O Treinamento Completo é para quem não quer apenas conhecer os princípios,
            mas saber exatamente como aplicá-los no dia a dia, com clareza, orientação
            e segurança, mesmo em meio à rotina moderna.
          </p>
        </div>

        <div className="space-y-8 max-w-3xl mx-auto">
          {/* 1. Guia Prático de Aplicação */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 mt-1 text-[#2E5C38]">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-[#2E5C38]">Guia Prático de Aplicação</h4>
              <p className="text-gray-600 font-light mt-1">Um passo a passo simples para saber por onde começar, o que priorizar e como adaptar os princípios à rotina atual.</p>
            </div>
          </div>

          {/* 2. Plano de 7 Dias */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 mt-1 text-[#2E5C38]">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-[#2E5C38]">Plano de 7 Dias de Retorno à Simplicidade</h4>
              <p className="text-gray-600 font-light mt-1">Um plano leve, sem restrições agressivas, para colocar os princípios em prática desde a primeira semana.</p>
            </div>
          </div>

          {/* 3. Checklist de Cozinha */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 mt-1 text-[#2E5C38]">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-[#2E5C38]">Checklist de Cozinha e Despensa Natural</h4>
              <p className="text-gray-600 font-light mt-1">Uma lista clara do que manter em casa, do que reduzir aos poucos e de substituições simples no dia a dia.</p>
            </div>
          </div>

          {/* 4. Material Principal */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 mt-1 text-[#2E5C38]">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-[#2E5C38]">Material principal com os princípios alimentares ensinados por Ellen G. White</h4>
            </div>
          </div>

          {/* 5. Atualizações Futuras */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 mt-1 text-[#2E5C38]">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-[#2E5C38]">Atualizações Futuras Incluídas</h4>
              <p className="text-gray-600 font-light mt-1">Sempre que novos materiais forem adicionados ao treinamento, o aluno recebe automaticamente, sem custo adicional.</p>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-500 mt-12 italic font-light">
          Essa opção é indicada para quem deseja seguir os princípios com orientação prática, sem precisar descobrir tudo sozinho.
        </p>
      </div>
    </section>
  );
};