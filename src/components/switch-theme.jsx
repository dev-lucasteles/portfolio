import { useState } from 'react';

export default function BotaoTema() {
  // 1. Criamos um estado para guardar se o modo escuro está ativo
  const [modoEscuro, setModoEscuro] = useState(false);

  // 2. Função que inverte o estado (de true para false e vice-versa)
  function atualizarTema() {
    setModoEscuro(!modoEscuro);
    
    // Se quiser aplicar uma classe no HTML inteiro para o Tailwind agir:
    // document.documentElement.classList.toggle('dark');
  }

  return (
    <label className="inline-flex items-center cursor-pointer">
        <input 
            type="checkbox" 
            className="sr-only peer" 
            checked={modoEscuro} // O checkbox reflete o nosso estado
            onChange={atualizarTema} // Preferimos onChange em checkboxes no lugar de onClick
        />
        
        {/* Sua estilização original mantida intacta */}
        <div className="relative w-9 h-5 bg-black peer-focus:outline-none 
        peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft 
        rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
        peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] 
        after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all 
        peer-checked:bg-brand"></div>
        
        <div className="switch">
            <span className="select-none ms-3 text-sm font-medium text-heading">
                {/* 3. O texto muda automaticamente baseado no estado */}
                {modoEscuro ? "Modo escuro" : "Modo claro"}
            </span>
        </div>
    </label>
  );
}