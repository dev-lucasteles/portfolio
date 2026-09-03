import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function CardsTech( {title, img, alt}) {
    return (
        <div className="brightness-90 transition-all duration-300 hover:brightness-130 content-center bg-white dark:bg-gray-800 shadow-md dark:shadow-none w-40 h-40 border-b-4 border-t-4 border-red-600 rounded-[2vw] ease-in-out hover:-translate-y-1 hover:scale-110 animate-fade-in-right animate-duration-1000 animate-fill-mode-both">
            <p className="text-xl font-sans text-gray-900 dark:text-white transition-colors duration-300 font-bold text-center">{title}</p>
            <img className="mx-auto mt-2 w-20 h-20" src={img} alt={alt} />
        </div>
    );
}