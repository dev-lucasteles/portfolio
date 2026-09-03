import React from 'react';
import CardsContatos from './cards-contacts';
import FadeInSection from './FadeInSection';

const cardsContatos = [
  {
    img: "/assets/sociais/github.png",
    alt: "github",
    topico: "Github",
    contato: "dev-lucasteles",
    link: "https://github.com/dev-lucasteles"
  },
  {
    img: "/assets/sociais/email.png",
    alt: "email",
    topico: "E-mail",
    contato: "lucas.teles@gruporiomais.com.br",
    link: "mailto:lucas.teles@gruporiomais.com.br"
  },
  {
    img: "/assets/sociais/linkedin.png",
    alt: "linkedin",
    topico: "Linked-In",
    contato: "@lucas-teles-rj",
    link: "https://www.linkedin.com/in/lucas-teles-rj/"
  },
];

export default function Rodape() {
  return (
    <footer id="rodape" className="bg-gray-100 dark:bg-gray-950 py-12 md:py-20 transition-colors duration-300">
      <FadeInSection>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
              Contatos
            </h1>
          </div>

          {/* Cards de Contato */}
          <div className="flex flex-wrap justify-center items-stretch gap-6 sm:gap-8 md:gap-10">
            {cardsContatos.map((card) => (
              <CardsContatos
                key={card.topico}
                topico={card.topico}
                img={card.img}
                alt={card.alt}
                contato={card.contato}
                link={card.link}
              />
            ))}
          </div>

        </div>
      </FadeInSection>
    </footer>
  );
}