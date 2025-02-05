import React from 'react';
import { ClipboardList, Brain, FileText, Users, Calendar, BarChart } from 'lucide-react';

const features = [
  {
    icon: ClipboardList,
    title: 'Anamnese Digital',
    description: 'Crie e gerencie fichas de anamnese completas para cada paciente.'
  },
  {
    icon: Brain,
    title: 'Avaliação Personalizada',
    description: 'Ferramentas específicas para avaliação musicoterapêutica.'
  },
  {
    icon: FileText,
    title: 'Plano Terapêutico',
    description: 'Desenvolva e acompanhe planos terapêuticos individualizados.'
  },
  {
    icon: Users,
    title: 'Gestão de Pacientes',
    description: 'Organize seus pacientes e histórico de atendimentos.'
  },
  {
    icon: Calendar,
    title: 'Agendamento',
    description: 'Sistema integrado de agendamento de sessões.'
  },
  {
    icon: BarChart,
    title: 'Relatórios e Evolução',
    description: 'Gere relatórios detalhados e acompanhe a evolução dos pacientes.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Funcionalidades Completas para sua Prática
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nossa plataforma oferece todas as ferramentas necessárias para uma gestão eficiente da sua prática musicoterapêutica.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Icon className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;