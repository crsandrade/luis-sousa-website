import { CheckCircle, ArrowRight } from 'lucide-react';

export function Services() {
  const services = [
    {
      label: 'Empreendedorismo',
      title: 'Estratégia & Consultoria',
      borderColor: 'border-blue-600',
      items: [
        'Desenvolvimento de projetos digitais ágeis',
        'Criação de Workflows empresariais',
        'Consultoria de metodologia ágil',
        'Implementação de sistemas com eficiência',
        'Prototipação de projetos complexos',
        'Assessoria online de métricas de inteligência',
      ],
    },
    {
      label: 'Engenharia de Software',
      title: 'Soluções digitais',
      borderColor: 'border-gray-500',
      items: [
        'Criação de soluções digitais',
        'Interfaces modernas de soluções Web',
        'Integração de APIs e automações',
        'Desenvolvimentos SaaS',
        'Gestão de infraestrutura Cloud',
      ],
    },
    {
      label: 'Automação e performance',
      title: 'Integrações e IA',
      borderColor: 'border-teal-600',
      items: [
        'Assistentes virtuais inteligentes',
        'IA para chatbot de atendimento',
        'Automações de processos com IA digital',
        'Eng. Prompts: Assistentes para negócios',
      ],
    },
  ];

  return (
    <section className="pb-4 2xl:pb-4 uw:pb-6 uw:mb-6 px-6 lg:px-8 relative  ">
      <div className="max-w-7xl mx-auto">

        {/* GRID DE SERVIÇOS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-xl border ${service.borderColor} bg-gradient-to-br from-[#0e0e0e] to-[#151515] uw:p-12 2xl:p-4 shadow-lg shadow-black/20
              hover:-translate-y-1 hover:shadow-xl hover:border-cyan-400 transition-all duration-300
              flex flex-col h-full`}  // ⭐ MANTÉM O BOTÃO FIXO NO FUNDO
            >

              {/* 🔹 SUBTÍTULO */}
              <p className="text-center text-cyan-600 text-base font-medium uw:mb-2 tracking-wide">
                {service.label}
              </p>

              <h3 className="text-xl uw:text-2xl font-semibold text-white text-center mb-6">
                {service.title}
              </h3>

              <ul className="uw:space-y-4 2xl:space-y-2 flex-grow uw:mb-6 2xl:mb-4">  {/* ⭐ EMPURRA O BOTÃO */}
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm 2xl:text-xs uw:text-base leading-relaxed">
                    <CheckCircle size={18} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button
                className="mt-auto w-full py-2 rounded-md bg-cyan-600 hover:bg-cyan-500 transition-all text-white font-medium flex items-center justify-center gap-2"
              >
                Ver detalhes
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
