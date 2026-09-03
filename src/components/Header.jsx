import React, { useState, useEffect } from 'react'; 

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const alternarTema = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
            <div className="max-w-7xl px-4 py-4 flex justify-between items-center">
                
                {/* Logo / Toggle de Tema */}
                <label className="inline-flex items-center cursor-pointer">
                    <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={isDarkMode}
                        onChange={alternarTema} 
                    />
                    <div className="relative w-9 h-5 bg-black peer-focus:outline-none 
                    peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 
                    rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
                    peer-checked:after:border-gray-300 after:content-[''] after:absolute after:top-[2px] 
                    after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all 
                    peer-checked:bg-blue-600"></div>
                    
                    <div className="switch">
                        <span className="select-none ms-3 text-sm font-medium text-heading dark:text-gray-200">
                            {isDarkMode ? 'Modo escuro' : 'Modo claro'}
                        </span>
                    </div>
                </label>

                {/* Botão Mobile */}
                <button
                    className="md:hidden p-2 text-gray-600 dark:text-gray-300 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* Menu Desktop */}
                <nav className="hidden md:flex space-x-20 px-16">
                    <a href="#sobre-mim" className="text-xl border-b-4 border-transparent transition-colors duration-300 hover:border-[#7d0000] font-medium hover:text-[#7d0000] transition-colors">Sobre</a>
                    <a href="#tecnologias" className="text-xl border-b-4 border-transparent transition-colors duration-300 hover:border-[#7d0000] font-medium hover:text-[#7d0000] transition-colors">Tecnologias</a>
                    <a href="#projetos" className="text-xl border-b-4 border-transparent transition-colors duration-300 hover:border-[#7d0000] font-medium hover:text-[#7d0000] transition-colors">Projetos</a>
                    <a href="#experiencias" className="text-xl border-b-4 border-transparent transition-colors duration-300 hover:border-[#7d0000] font-medium hover:text-[#7d0000] transition-colors">Experiências</a>
                    <a href="#rodape" className="text-xl border-b-4 border-transparent transition-colors duration-300 hover:border-[#7d0000] font-medium hover:text-[#7d0000] transition-colors">Contatos</a>
                </nav>
            </div>

            {/* Menu Mobile Expandido */}
            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-800 border-t dark:border-gray-700 flex flex-col px-4 py-4 space-y-4 shadow-inner">
                    <a href="#sobre-mim" onClick={() => setIsMenuOpen(false)} className="hover:text-red-600 dark:text-gray-200 dark:hover:text-red-400">Sobre</a>
                    <a href="#tecnologias" onClick={() => setIsMenuOpen(false)} className="hover:text-red-600 dark:text-gray-200 dark:hover:text-red-400">Tecnologias</a>
                    <a href="#projetos" onClick={() => setIsMenuOpen(false)} className="hover:text-red-600 dark:text-gray-200 dark:hover:text-red-400">Projetos</a>
                    <a href="#experiencias" onClick={() => setIsMenuOpen(false)} className="hover:text-red-600 dark:text-gray-200 dark:hover:text-red-400">Experiências</a>
                    <a href="#rodape" onClick={() => setIsMenuOpen(false)} className="hover:text-red-600 dark:text-gray-200 dark:hover:text-red-400">Contatos</a>
                </div>
            )}
        </header>
    );
}