import React from 'react';
import BlogCard from './BlogCard';

const posts = [
  {
    id: 1,
    title: 'O Impacto da Música em Crianças Autistas',
    excerpt: 'Descubra como a musicoterapia pode auxiliar no desenvolvimento cognitivo, emocional e social de crianças com autismo.',
    image: 'https://images.unsplash.com/photo-1607962837359-5e7e89f86776?auto=format&fit=crop&w=800&q=80',
    date: '12 Mar 2024',
    readTime: '5 min'
  },
  {
    id: 2,
    title: 'Musicoterapia na Reabilitação Neurológica',
    excerpt: 'Um guia sobre como a música pode auxiliar na recuperação de pacientes com lesões neurológicas.',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80',
    date: '10 Mar 2024',
    readTime: '7 min'
  },
  {
    id: 3,
    title: 'Musicoterapia nos Transtornos Mentais',
    excerpt: 'Entenda como a musicoterapia pode auxiliar no tratamento e na qualidade de vida de pessoas com transtornos mentais.',
    image: 'https://images.unsplash.com/photo-1517242810446-cc8951b2be40?auto=format&fit=crop&w=800&q=80',
    date: '8 Mar 2024',
    readTime: '6 min'
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Blog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Artigos, dicas e novidades sobre musicoterapia e tecnologia.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map(post => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;