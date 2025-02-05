import React from 'react';

const faqs = [
  {
    question: 'Preciso instalar algum software?',
    answer: 'Não, nossa plataforma é 100% web e funciona em qualquer navegador moderno.'
  },
  {
    question: 'Os dados dos pacientes estão seguros?',
    answer: 'Sim, utilizamos criptografia de ponta a ponta e seguimos todas as normas de proteção de dados.'
  },
  {
    question: 'Posso cancelar a qualquer momento?',
    answer: 'Sim, você pode cancelar sua assinatura quando quiser, sem multa ou burocracia.'
  }
];

const FAQSection = () => {
  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold text-gray-900 mb-8">Perguntas Frequentes</h3>
      <div className="space-y-8">
        {faqs.map((faq, index) => (
          <div key={index}>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h4>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;