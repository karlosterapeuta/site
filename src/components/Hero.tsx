import React from 'react';
import { branding } from '../config/branding';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full text-center lg:text-left lg:max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {branding.tagline}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8"> 
              {branding.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://www.contate.me/musetera" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors text-center"
              >
                Comece Agora
              </a>
              <a
                href="https://musetera-app.vercel.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 transition-colors text-center"
              >
                Acessar Sistema
              </a>
            </div>
            
            <div className="mt-12 w-full max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                Conheça nosso trabalho
              </h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.youtube.com/embed/vOYRSW20PM8"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg shadow-lg"
                ></iframe>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-300 text-center">
                Assista ao nosso vídeo demonstrativo para conhecer mais sobre a Musicoterapia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
