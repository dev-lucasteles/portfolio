import React from 'react';

export default function CardsContatos( {contato, topico, img, alt, link}) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto content-center transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 animate-fade-in-right animate-duration-200 animate-fill-mode-both"
        >
        {/* Fundo do ícone: bg-gray-200 no claro, dark:bg-gray-800 no escuro */}
        <div className="mx-auto content-center bg-gray-200 dark:bg-gray-800 transition-colors duration-300 w-15 h-15 rounded-[17vw] ">
            <img className="content-center mx-auto mt-2 w-10 h-10" src={img} alt={alt} />
        </div>
            {/* Texto principal: cinza escuro no claro, branco no escuro */}
            <p className="content-center font-sans text-gray-900 dark:text-white text-xl font-bold text-center brightness-90 transition-all duration-300 hover:brightness-130">{topico}</p>
            {/* Texto secundário: cinza médio no claro, cinza claro no escuro */}
            <p className="mx-auto content-center text-lg font-sans text-gray-600 dark:text-gray-400 transition-colors duration-300 font-bold text-center">{contato}</p>
        </a>
    );
}