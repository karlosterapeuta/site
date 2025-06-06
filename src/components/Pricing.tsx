import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Sem Fidelidade',
    price: 'R$ 69,90/mês',
    description: 'Para profissionais iniciando',
    features: [
      'Pacientes ilimitados',
      'Anamnese completa',
      'Plano terapêutico avançado',
      'Agendamento completo',
      'Relatórios personalizados',
      'Suporte prioritário'
    ],
    link: 'https://www.asaas.com/c/we2dt3i0hbuaes45'
  },
  {
    name: 'Fidelidade 6 Meses',
    price: 'R$ 49,90/mês',
    description: 'Para profissionais comprometidos',
    features: [
      'Pacientes ilimitados',
      'Anamnese completa',
      'Plano terapêutico avançado',
      'Agendamento completo',
      'Relatórios personalizados',
      'Suporte prioritário'
    ],
    link: 'https://www.asaas.com/c/0kvjf7y8j14o7tqg'
  },
  {
    name: 'Fidelidade 12 Meses',
    price: 'R$ 39,90/mês',
    description: 'Para profissionais dedicados',
    features: [
      'Pacientes ilimitados',
      'Anamnese completa',
      'Plano terapêutico avançado',
      'Agendamento completo',
      'Relatórios personalizados',
      'Suporte prioritário'
    ],
    link: 'https://www.asaas.com/c/6kdt8aus266vtz3h',
    highlighted: true
  },
  
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Planos MuseTera
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Escolha o plano ideal para sua prática e comece a transformar vidas através da musicoterapia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg p-8 ${
                plan.highlighted
                  ? 'bg-white shadow-xl border-2 border-indigo-600 relative'
                  : 'bg-white shadow-md'
              }`}
            >
              {plan.highlighted && (
                <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm">
                  Mais Popular
                </span>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold text-indigo-600 mb-4">{plan.price}</div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
href={plan.link || 'https://www.contate.me/musetera'}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-full ${
                  plan.highlighted
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50'
                } transition-colors block text-center`}
              >
                Compre Agora
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
