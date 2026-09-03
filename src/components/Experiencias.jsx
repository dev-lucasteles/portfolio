import React from 'react';
import CardsExp from './cards-experiencias';
import FadeInSection from './FadeInSection';

const cardsExp = [
  {
    cargo: "Monitor de entretenimento",
    empresa: "Búzios Beach Resort",
    tempo: "Novembro 2022 - atualmente",
    descrição: "Experiência em organização de operações e suporte técnico \nMontagem e operação de equipamentos de som e iluminação \n Suporte técnico em eventos e atividades diversas"
  },
  {
    cargo: "Estagiário de suporte N1 de T.I",
    empresa: "Grupo RioMais",
    tempo: "Junho 2026 - atualmente",
    descrição: "Triagem inicial de chamados (tickets), resolvendo problemas simples e padronizados usando scripts e manuais, e encaminhando demandas complexas para os níveis superiores (N2 ou N3)"
  },
];

export default function Experiencias() {
  return (
    <section id="experiencias" className="bg-gray-100 dark:bg-gray-950 py-12 md:py-20 transition-colors duration-300">
      <FadeInSection>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Cabeçalho */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
              Experiências
            </h1>
          </div>

          {/* Cards de Experiência */}
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-stretch gap-6 sm:gap-8 md:gap-10">
            {cardsExp.map((card) => (
              <CardsExp
                key={card.cargo}
                cargo={card.cargo}
                empresa={card.empresa}
                tempo={card.tempo}
                descrição={card.descrição}
              />
            ))}
          </div>

        </div>
      </FadeInSection>
    </section>
  );
}