import React from 'react';
import { Menu, X, Home, Info, Music, BookOpen, DollarSign, LogIn, Play } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { branding } from '../config/branding';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md fixed w-full top-0 z-50 border-b border-gray-100/50 dark:border-gray-800/50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="relative group">
              <img 
                src="/images/blog/logo-musicoterapia.png" 
                alt="Logo Musicoterapia" 
                className="h-12 w-12 transition-all duration-300 group-hover:scale-105 group-hover:rotate-[5deg]" 
              />
              <span className="absolute -inset-1 bg-primary-light/10 dark:bg-primary-dark/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
            </div>
            <span className="text-2xl font-bold text-primary-dark dark:text-primary-light tracking-tight bg-gradient-to-r from-primary-DEFAULT to-accent-DEFAULT bg-clip-text text-transparent">
              {branding.name}
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {[
              { href: "#home", icon: Home, text: "Início" },
              { href: "#about", icon: Info, text: "Sobre" },
              { href: "#features", icon: Music, text: "Terapias" },
              { href: "#blog", icon: BookOpen, text: "Blog" },
              { href: "#pricing", icon: DollarSign, text: "Planos" }
            ].map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="group flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary-dark dark:hover:text-primary-light transition-colors"
              >
                <item.icon className="h-4 w-4 transition-transform group-hover:scale-125" />
                <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-primary-dark dark:after:bg-primary-light after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300">
                  {item.text}
                </span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <ThemeToggle />
            <a 
              href="https://portal-musetera.netlify.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-5 py-2.5 rounded-lg text-primary-dark dark:text-primary-light hover:bg-primary-light/10 dark:hover:bg-primary-dark/10 transition-all duration-300 border border-primary-light/20 dark:border-primary-dark/20 hover:border-primary-light/40 dark:hover:border-primary-dark/40 hover:shadow-sm"
            >
              <span className="flex items-center gap-2">
                <LogIn className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                <span>Entrar</span>
              </span>
            </a>
          </div>

          <button 
            className="md:hidden text-gray-700 dark:text-gray-300 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-primary-light/10 dark:hover:bg-primary-dark/10">
                <Home className="h-4 w-4" />
                <span>Início</span>
              </a>
              <a href="#about" className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-primary-light/10 dark:hover:bg-primary-dark/10">
                <Info className="h-4 w-4" />
                <span>Sobre</span>
              </a>
              <a href="#features" className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-primary-light/10 dark:hover:bg-primary-dark/10">
                <Music className="h-4 w-4" />
                <span>Terapias</span>
              </a>
              <a href="#blog" className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-primary-light/10 dark:hover:bg-primary-dark/10">
                <BookOpen className="h-4 w-4" />
                <span>Blog</span>
              </a>
              <a href="#pricing" className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-primary-light/10 dark:hover:bg-primary-dark/10">
                <DollarSign className="h-4 w-4" />
                <span>Planos</span>
              </a>
            </div>
            <div className="flex flex-col space-y-2 pt-4">
              <a 
                href="https://portal-musetera.netlify.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-primary-dark dark:text-primary-light hover:bg-primary-light/20 dark:hover:bg-primary-dark/20 transition-colors"
              >
                <LogIn className="inline mr-2 h-4 w-4" />
                Entrar
              </a>
              <div className="flex justify-center pt-2">
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
