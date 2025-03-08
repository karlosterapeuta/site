import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    id: 1,
    name: 'Dra. Maria Silva',
    role: 'Musicoterapeuta Clínica',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    content: 'O sistema revolucionou minha prática clínica. Agora consigo gerenciar meus pacientes com muito mais eficiência.'
  },
  {
    id: 2,
    name: 'Dr. João Santos',
    role: 'Coordenador de Clínica',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    content: 'Excelente plataforma! Facilitou muito o acompanhamento dos casos e a geração de relatórios.'
  },
  {
    id: 3,
    name: 'Dra. Ana Oliveira',
    role: 'Musicoterapeuta Pediátrica',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
    content: 'As ferramentas de avaliação e acompanhamento são fantásticas. Recomendo para todos os profissionais.'
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            O Que Dizem Nossos Usuários
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Depoimentos de profissionais que transformaram sua prática com nossa plataforma.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;