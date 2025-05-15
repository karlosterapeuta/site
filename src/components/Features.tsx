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
            Solução Integrada para Musicoterapeutas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            <span className="font-semibold text-indigo-600">Sistema profissional</span> com tudo que você precisa para gestão clínica e acompanhamento terapêutico
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group relative p-8 bg-white rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                <div className="relative z-10">
                  <div className="flex items-start gap-5">
                    <div className="p-3.5 bg-white rounded-xl shadow-sm border border-gray-100 group-hover:bg-indigo-50 transition-colors">
                      <Icon className="w-7 h-7 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2.5 group-hover:text-indigo-700 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
