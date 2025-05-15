import React, { useEffect } from 'react';
import { branding } from '../config/branding';
import { PlayCircle, Music, Volume2 } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    // Criar iframe do YouTube para tocar o áudio automaticamente
    const audioPlayer = document.createElement('iframe');
    audioPlayer.src = 'https://www.youtube.com/embed/vOYRSW20PM8?autoplay=1&start=2&controls=0&showinfo=0&mute=0&loop=1';
    audioPlayer.width = '0';
    audioPlayer.height = '0';
    audioPlayer.style.display = 'none';
    audioPlayer.allow = 'autoplay; encrypted-media';
    document.body.appendChild(audioPlayer);

    return () => {
      document.body.removeChild(audioPlayer);
    };
  }, []);
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
        <div className="max-w-2xl px-4 sm:px-6">
          
          <h1 
            id="hero-heading" 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight sm:leading-[1.15] tracking-tight sm:tracking-[-0.02em] drop-shadow-lg"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Sistema de gestão para <span className="bg-gradient-to-r from-[#8A2BE2] to-[#00BFFF] bg-clip-text text-transparent">Musicoterapeutas</span>
          </h1>
          
          <p className="text-base sm:text-xl text-white/85 mb-6 sm:mb-10 max-w-2xl leading-relaxed sm:leading-normal tracking-normal sm:tracking-wide drop-shadow-lg"
             style={{ fontFamily: "'Inter', sans-serif", fontWeight: 450 }}>
            Plataforma especializada para musicoterapeutas, com <span className="font-semibold text-white">ferramentas completas</span> de gestão clínica
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <button 
              onClick={() => {
                const audioPlayer = document.querySelector('iframe[src*="youtube"]') as HTMLIFrameElement;
                if (audioPlayer && audioPlayer.src) {
                  const isMuted = audioPlayer.src.includes('mute=1');
                  audioPlayer.src = audioPlayer.src.replace(
                    isMuted ? 'mute=1' : 'mute=0',
                    isMuted ? 'mute=0' : 'mute=1'
                  );
                }
              }}
              className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              aria-label="Ativar/desativar áudio"
            >
              <Volume2 className="h-5 w-5 text-white" />
            </button>
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
