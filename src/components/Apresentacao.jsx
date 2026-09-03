import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import FadeInSection from './FadeInSection';

export default function Apresentacao() {
  const [mostrarCargos, setMostrarCargos] = useState(false);

  return (
    // Adicionado o fundo claro (bg-gray-100) e o fundo escuro (dark:bg-gray-950)
    <section className="py-12 md:py-20 bg-gray-100 dark:bg-gray-950 transition-colors duration-300">
      <FadeInSection>
        <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-10">
          {/* Texto */}
          <div className="w-full text-center md:text-left">
            {/* Texto escuro no modo claro, branco no modo escuro */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white transition-colors duration-300">
              <TypeAnimation
                sequence={[
                  'Olá!\nMeu nome é Lucas\ne eu sou\n',
                  () => setMostrarCargos(true)
                ]}
                wrapper="span"
                speed={50}
                cursor={false}
                style={{ whiteSpace: 'pre-line', display: 'block' }}
              />
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-red-700 dark:text-red-400 min-h-[48px] sm:min-h-[60px] mt-2 transition-colors duration-300">
              {mostrarCargos && (
                <TypeAnimation
                  sequence={[
                    'Estagiário de T.I',
                    1000,
                    'Desenvolvedor',
                    1000,
                    'Suporte de T.I',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ display: 'inline-block' }}
                  repeat={Infinity}
                />
              )}
            </h1>
          </div>

          {/* Imagem de Perfil */}
          <div className="w-full flex justify-center md:justify-end items-center">
            <img
              src="/assets/perfil-lucas.jpg"
              alt="lucas-perfil"
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-full shadow-xl border-4 border-gray-950 dark:border-white transition-colors duration-300" 
            />
          </div>

        </div>
      </FadeInSection>
    </section>
  );
}