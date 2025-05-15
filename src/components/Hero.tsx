import React from 'react';
import { branding } from '../config/branding';
import { PlayCircle, Music } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen bg-[#1034A6] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Fundo azul egípcio com animação */}
      <div className="absolute inset-0 bg-[#1034A6] z-0">
        <iframe 
          src='https://my.spline.design/nexbotrobotcharacterconcept-wTDi18L18VkhpnKvq1NArdU7/'
          frameBorder='0'
          width='100%'
          height='100%'
          className="w-full h-full object-cover opacity-70"
          aria-hidden="true"
        />
      </div>

      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-20">
        <div className="max-w-2xl">
          
          <h1 
            id="hero-heading" 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.15] tracking-[-0.02em] drop-shadow-lg"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Sistema de gestão para <span className="bg-gradient-to-r from-[#8A2BE2] to-[#00BFFF] bg-clip-text text-transparent">Musicoterapeutas</span>
          </h1>
          
          <p className="text-xl text-white/85 mb-10 max-w-2xl leading-normal tracking-wide drop-shadow-lg"
             style={{ fontFamily: "'Inter', sans-serif", fontWeight: 450 }}>
            Plataforma especializada para musicoterapeutas, com <span className="font-semibold text-white">ferramentas completas</span> de gestão clínica
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://www.youtube.com/embed/vOYRSW20PM8" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-[#00BFFF]/30 transition-all duration-300 text-lg font-semibold"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <PlayCircle className="h-5 w-5 text-white transition-transform group-hover:scale-110" />
              <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300">
                Acessar sistema
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
