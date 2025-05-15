import React, { useState } from 'react';
import { Sun, Moon, Contrast, Text, Headphones } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

export function ThemeToggle() {
  const { isDark, setIsDark } = useDarkMode();
  const [showAccessibility, setShowAccessibility] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [readAloud, setReadAloud] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setShowAccessibility(!showAccessibility)}
        className="p-2 rounded-lg hover:bg-primary-light/20 dark:hover:bg-primary-dark/20 transition-colors"
        aria-label="Acessibilidade"
        aria-expanded={showAccessibility}
      >
        <Contrast className="w-5 h-5 text-primary-dark dark:text-primary-light" />
      </button>

      {showAccessibility && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50 p-2 space-y-2">
          <button
            onClick={() => setIsDark(!isDark)}
            className="flex items-center w-full p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label={`Alternar para ${isDark ? 'modo claro' : 'modo escuro'}`}
          >
            {isDark ? (
              <Sun className="w-5 h-5 mr-2 text-primary-light" />
            ) : (
              <Moon className="w-5 h-5 mr-2 text-primary-dark" />
            )}
            <span>{isDark ? 'Modo Claro' : 'Modo Escuro'}</span>
          </button>

          <button
            onClick={() => setHighContrast(!highContrast)}
            className={`flex items-center w-full p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${highContrast ? 'bg-primary-light/20 dark:bg-primary-dark/20' : ''}`}
            aria-label={`${highContrast ? 'Desativar' : 'Ativar'} alto contraste`}
          >
            <Contrast className="w-5 h-5 mr-2" />
            <span>Alto Contraste</span>
          </button>

          <button
            onClick={() => setLargeText(!largeText)}
            className={`flex items-center w-full p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${largeText ? 'bg-primary-light/20 dark:bg-primary-dark/20' : ''}`}
            aria-label={`${largeText ? 'Reduzir' : 'Aumentar'} tamanho do texto`}
          >
            <Text className="w-5 h-5 mr-2" />
            <span>Texto Grande</span>
          </button>

          <button
            onClick={() => setReadAloud(!readAloud)}
            className={`flex items-center w-full p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${readAloud ? 'bg-primary-light/20 dark:bg-primary-dark/20' : ''}`}
            aria-label={`${readAloud ? 'Parar' : 'Iniciar'} leitura em voz alta`}
          >
            <Headphones className="w-5 h-5 mr-2" />
            <span>Ler em Voz Alta</span>
          </button>
        </div>
      )}
    </div>
  );
}
