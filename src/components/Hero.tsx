import React, { useState } from 'react';
import { branding } from '../config/branding';
import { PlayCircle, Volume2, VolumeX } from 'lucide-react';

const Hero = () => {
  const [isMuted, setIsMuted] = useState(false);

  return (
    <section 
      id="home" 
      className="relative h-screen bg-[#1034A6] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Player de áudio do YouTube */}
      <iframe
        src={`https://www.youtube.com/embed/vOYRSW20PM8?autoplay=1&start=2&controls=0&mute=${isMuted ? 1 : 0}&loop=1&playlist=vOYRSW20PM8`}
        width="0"
        height="0"
        frameBorder="0"
        allow="autoplay"
        style={{ display: 'none' }}
        title="YouTube audio player"
      />

      {/* Restante do código permanece igual */}
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
              onClick={() => setIsMuted(!isMuted)}
              className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              aria-label={isMuted ? "Ativar áudio" : "Desativar áudio"}
            >
              {isMuted ? (
                <VolumeX className="h-5 w-5 text-white" />
              ) : (
                <Volume2 className="h-5 w-5 text-white" />
              )}
            </button>
            <a
              href="https://shre.ink/M39W"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-[#25D366]/30 transition-all duration-300 text-lg font-semibold"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300">
                WhatsApp
              </span>
            </a>
            <a 
              href="https://portal-musetera.netlify.app/login" 
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
