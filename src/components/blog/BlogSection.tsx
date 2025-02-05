import React from 'react';
import BlogCard from './BlogCard';

const posts = [
  {
    id: 1,
    title: 'O Impacto da Música em Crianças Autistas',
    excerpt: 'Descubra como a musicoterapia pode auxiliar no desenvolvimento cognitivo, emocional e social de crianças com autismo.',
    image: '/images/blog/criancas-autismo.jpg',
    date: '12 Mar 2024',
    readTime: '5 min'
  },
  {
    id: 2,
    title: 'Musicoterapia na Gerontologia',
    excerpt: 'A musicoterapia na gerontologia é uma técnica terapêutica que utiliza a música para melhorar a qualidade de vida e o bem-estar de idosos.',
    image: '/images/blog/musicoterapia-gerentologia.jpg',
    date: '10 Mar 2024',
    readTime: '7 min'
  },
  {
    id: 3,
    title: 'Musicoterapia nos Transtornos Mentais',
    excerpt: 'Entenda como a musicoterapia pode auxiliar no tratamento e na qualidade de vida de pessoas com transtornos mentais.',
    image: '/images/blog/transtornos-mentais.jpeg',
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