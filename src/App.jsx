import React from 'react';
import Header from './components/Header';
import Apresentacao from './components/Apresentacao';
import Sobre from './components/Sobre';
import Tecnologias from './components/Tecnologias';
import Projetos from './components/Projetos';
import Rodape from './components/Rodape';
import Experiencias from './components/Experiencias';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 transition-colors duration-300">
      <div className="selection:bg-gray-300 selection:text-black font-sans text-xl text-gray-800 dark:text-gray-200">
        <Header />
        <Apresentacao />
        <Sobre />
        <Tecnologias />
        <Projetos />
        <Experiencias />
        <Rodape />
      </div>
      
    </div>
  );
}