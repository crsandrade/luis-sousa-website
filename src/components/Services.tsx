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
    <section className="pb-10 fhd:pb-10 wqhd:mb-16 px-6 lg:px-8 relative fhd:mb-10 wqhd:pb-16">
      <div className="max-w-7xl mx-auto">

        {/* GRID DE SERVIÇOS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-xl border ${service.borderColor} bg-gradient-to-br from-[#0e0e0e] to-[#151515] p-8 shadow-lg shadow-black/20
              hover:-translate-y-1 hover:shadow-xl hover:border-cyan-400 transition-all duration-300
              flex flex-col h-full`}  // ⭐ MANTÉM O BOTÃO FIXO NO FUNDO
            >

              {/* 🔹 SUBTÍTULO */}
              <p className="text-center text-cyan-600 text-base font-medium mb-2 tracking-wide">
                {service.label}
              </p>

              <h3 className="text-2xl wqhd:text-2xl font-semibold text-white text-center mb-6">
                {service.title}
              </h3>

              <ul className="wqhd:space-y-5 2xl:space-y-2 flex-grow mb-6">  {/* ⭐ EMPURRA O BOTÃO */}
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm wqhd:text-lg leading-relaxed">
                    <CheckCircle size={18} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button
                className="mt-auto w-full py-3 rounded-md bg-cyan-600 hover:bg-cyan-500 transition-all text-white font-medium flex items-center justify-center gap-2"
              >
                Ver detalhes
                <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
