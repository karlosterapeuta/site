import React from 'react';
import { Heart, Users, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Sobre Nós</h2>
          <p className="text-gray-600 mb-8">
            Somos apaixonados por unir tecnologia e musicoterapia para transformar vidas. Nossa missão é capacitar musicoterapeutas com ferramentas digitais que potencializam seu trabalho.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Heart className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Missão</h3>
            <p className="text-gray-600">Facilitar o trabalho dos musicoterapeutas através de tecnologia inovadora.</p>
          </div>
          <div className="text-center">
            <Target className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Visão</h3>
            <p className="text-gray-600">Ser referência em soluções digitais para musicoterapia no Brasil.</p>
          </div>
          <div className="text-center">
            <Users className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Valores</h3>
            <p className="text-gray-600">Excelência, empatia e compromisso com resultados terapêuticos.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;