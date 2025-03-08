import React, { useState } from 'react';
import { Clock } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, image, date, readTime }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error('Erro ao carregar imagem:', image);
    setImageError(true);
    // Tentar carregar com caminho absoluto
    const absolutePath = `${window.location.origin}${image}`;
    console.log('Tentando caminho absoluto:', absolutePath);
    e.currentTarget.src = absolutePath;
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex items-center text-sm text-gray-500">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{readTime}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;