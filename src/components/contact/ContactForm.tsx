import React from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';

const ContactForm = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
      <p className="text-gray-600 mb-8">
        Tem alguma dúvida? Estamos aqui para ajudar.
      </p>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nome
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Mensagem
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Enviar Mensagem
        </button>
      </form>
      
      <div className="mt-8 space-y-4">
        <div className="flex items-center">
          <Mail className="w-5 h-5 text-indigo-600 mr-2" />
          <span className="text-gray-600">contato@musetera.com.br</span>
        </div>
        <div className="flex items-center">
          <Phone className="w-5 h-5 text-indigo-600 mr-2" />
          <span className="text-gray-600">(81) 98695-3506</span>
        </div>
        <div className="flex items-center">
          <MessageSquare className="w-5 h-5 text-indigo-600 mr-2" />
          <a href="https://www.contate.me/musetera" className="text-gray-600 hover:text-indigo-600 transition-colors">WhatsApp</a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;