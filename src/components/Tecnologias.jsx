import React from 'react';
import CardsTech from './card-tecnologias';
import FadeInSection from './FadeInSection';

const cardsTech = [
  {
    img: "/assets/tecnologias/html5.png",
    alt: "html5",
    title: "HTML5",
  },
  {
    img: "/assets/tecnologias/css3.png",
    alt: "css3",
    title: "CSS3",
  },
  {
    img: "/assets/tecnologias/javascript.png",
    alt: "javascript",
    title: "JavaScript",
  },
  {
    img: "/assets/tecnologias/java.png",
    alt: "java",
    title: "Java",
  },
  {
    img: "/assets/tecnologias/Python.png",
    alt: "python",
    title: "Python",
  }
];

export default function Tecnologias() {
  return (
    <section id="tecnologias" className="bg-gray-100 dark:bg-gray-950 py-12 md:py-20 transition-colors duration-300">
      <FadeInSection>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Cabeçalho */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
              Tecnologias
            </h1>
            <h2 className="text-base sm:text-lg text-red-700 dark:text-red-400 font-medium px-2 transition-colors duration-300">
              Essas são as tecnologias que eu tenho conhecimento:
            </h2>
          </div>

          {/* Grid/Flex dos Cards */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-12">
            {cardsTech.map((card) => (
              <CardsTech
                key={card.title}
                title={card.title}
                img={card.img}
                alt={card.alt}
              />
            ))}
          </div>

        </div>
      </FadeInSection>
    </section>
  );
}