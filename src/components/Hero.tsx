import React from 'react';
import { PlayCircle } from 'lucide-react';
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
href="https://w.app/musetera" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors text-center"
              >
                Comece Agora
              </a>
              <button className="flex items-center justify-center gap-2 text-indigo-600 dark:text-indigo-400 px-8 py-3 rounded-full border-2 border-indigo-600 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors">
                <PlayCircle className="w-5 h-5" />
                Ver Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;