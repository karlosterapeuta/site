import React from 'react';
import { Clock } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
}

const BlogCard = ({ title, excerpt, image, date, readTime }: BlogCardProps) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {readTime}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <button className="text-indigo-600 font-medium hover:text-indigo-700">
          Ler mais →
        </button>
      </div>
    </article>
  );
};

export default BlogCard;