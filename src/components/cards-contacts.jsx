import React from 'react';
import { TypeAnimation } from 'react-type-animation';


export default function CardsContatos( {contato, topico, img, alt, link}) {

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto content-center transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 animate-fade-in-right animate-duration-200 animate-fill-mode-both"
        >
        <div className="mx-auto content-center bg-gray-800 w-15 h-15 rounded-[17vw] ">
            <img className="content-center mx-auto mt-2 w-10 h-10" src={img} alt={alt} />
        </div>
            <p className="content-center text-lg font-sans text-white text-xl font-bold text-center brightness-90 transition duration-300 hover:brightness-130">{topico}</p>
            <p className="mx-auto content-center text-lg font-sans text-gray-400 font-bold text-center">{contato}</p>
        </a>
    );
}
