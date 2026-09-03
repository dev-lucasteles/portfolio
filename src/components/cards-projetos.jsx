import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function CardsProjetos({ img, alt, title, subtitle, onClick }) {
    return (
        <div
            onClick={onClick}
            className="w-80 h-60 group relative flex cursor-pointer flex-col overflow-hidden rounded-xl border-b-4 border-red-500 bg-gray-200 dark:bg-gray-700 transition-colors duration-300 shadow-lg hover:-translate-y-1"
        >
            <img
                src={img}
                alt={alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 p-6 opacity-100 transition-opacity duration-300 group-hover:bg-black/50">
                <h3 className="text-center text-2xl font-bold text-white shadow-black drop-shadow-md">
                    {title}
                </h3>
                <p className="mt-4 text-center text-sm font-medium text-gray-300 opacity-90 drop-shadow-md">
                    {subtitle}
                </p>
            </div>
        </div>
    );
}