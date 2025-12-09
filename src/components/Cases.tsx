import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';

export function Cases() {
  const [currentCase, setCurrentCase] = useState(0);

  const cases = [
    {
      title: 'Projeto UniSales',
      description:
        'Como desenvolver um site e um produto e transforma-lo em um SaaS de sucesso. Neste projeto você irá descobrir como criar e gerenciar todos os processos desde a criação ao lançamento de um produto completo.',
      image: 'https://images.unsplash.com/photo-1763162410742-1d0097cea556?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxhcHRvcCUyMG1vZGVybnxlbnwxfHx8fDE3NjUwMjg1NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      additionalInfo:
        'Processo de criação de um produto SaaS, passando pela criação do site de vendas ao lançamento do produto completo.',
    },
    {
      title: 'Sistema de Gestão Empresarial',
      description:
        'Desenvolvimento completo de um sistema de gestão integrado para empresas de médio porte, incluindo módulos de vendas, estoque, financeiro e relatórios em tempo real.',
      image: 'https://images.unsplash.com/photo-1763162410742-1d0097cea556?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxhcHRvcCUyMG1vZGVybnxlbnwxfHx8fDE3NjUwMjg1NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      additionalInfo:
        'Sistema completo com integrações de APIs e automações que aumentaram a eficiência em 40%.',
    },
    {
      title: 'Plataforma de E-learning',
      description:
        'Criação de uma plataforma moderna de ensino online com recursos de transmissão ao vivo, gestão de cursos, certificados automáticos e dashboard analytics.',
      image: 'https://images.unsplash.com/photo-1763162410742-1d0097cea556?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxhcHRvcCUyMG1vZGVybnxlbnwxfHx8fDE3NjUwMjg1NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      additionalInfo:
        'Plataforma escalável que atende mais de 10.000 usuários simultâneos.',
    },
  ];

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % cases.length);
  };

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + cases.length) % cases.length);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-white mb-3">
            Cases de <span className="text-cyan-400">sucesso</span>
          </h2>
          <p className="text-gray-400">Conheça alguns dos projetos desenvolvidos</p>
        </div>

        {/* Case Display */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="relative">
              <button
                onClick={prevCase}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-cyan-500/80 hover:bg-cyan-600 text-white p-2 rounded-full z-10 transition-colors"
                aria-label="Previous case"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="relative rounded-lg overflow-hidden border-2 border-gray-700">
                <img
                  src={cases[currentCase].image}
                  alt={cases[currentCase].title}
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
              <button
                onClick={nextCase}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-cyan-500/80 hover:bg-cyan-600 text-white p-2 rounded-full z-10 transition-colors"
                aria-label="Next case"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <h3 className="text-white">{cases[currentCase].title}</h3>
              <p className="text-gray-400">{cases[currentCase].description}</p>
              <p className="text-gray-500 text-sm">{cases[currentCase].additionalInfo}</p>
              <div className="flex flex-wrap gap-3 pt-4">
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2.5 rounded-md transition-colors flex items-center gap-2">
                  VER MAIS
                  <ExternalLink size={16} />
                </button>
                <button className="border border-gray-600 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 px-5 py-2.5 rounded-md transition-colors flex items-center gap-2">
                  GITHUB PROJETO
                  <Github size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {cases.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCase(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentCase
                    ? 'w-8 bg-cyan-400'
                    : 'w-2 bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to case ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
