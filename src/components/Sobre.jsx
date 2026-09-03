import React from 'react';
import FadeInSection from './FadeInSection';

export default function Sobre() {
  return (
    <section id="sobre-mim" className="bg-gray-100 dark:bg-gray-950 py-12 md:py-20 transition-colors duration-300">
      <FadeInSection>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Sobre mim</h1>
            <h2 className="text-base sm:text-lg text-red-700 dark:text-red-400 font-medium transition-colors duration-300">Desenvolvedor web iniciante</h2>
          </div>

          {/* Conteúdo de Texto */}
          <div className="space-y-4 text-gray-700 dark:text-gray-300 font-sans text-base sm:text-lg md:text-xl leading-relaxed text-center sm:text-left transition-colors duration-300">
            <p>
              Sou estudante de Engenharia de Software e atuo na área de Suporte de TI.
            </p>
            <p>
              Possuo experiência prática com infraestrutura, redes e troubleshooting, combinada a conhecimentos em programação com Java, Python, HTML, CSS, JavaScript e MySQL.
            </p>
            <p>
              Sou focado na resolução de problemas e busco aplicar minha base operacional para evoluir no desenvolvimento de software.
            </p>
          </div>

        </div>
      </FadeInSection>
    </section>
  );
}