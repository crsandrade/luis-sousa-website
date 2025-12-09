import { Rocket } from 'lucide-react';

export function About() {
  const timelineItems = [
    {
      year: 'Projeto Inicial',
      title: 'Undefined Technology',
      description:
        'Com o crescimento de empresas e a grande demanda para sem processos, Undefined se estabeleceu com a proposta de transformar problemas para com a tecnologia.',
      side: 'left' as const,
    },
    {
      year: 'Segundo Ano',
      title: 'Undefined Technology',
      description:
        'Com o crescimento de empresas e a grande demanda para sem processos, Undefined se estabeleceu com a proposta de transformar problemas para com a tecnologia.',
      side: 'right' as const,
    },
    {
      year: 'Terceiro Ano',
      title: 'Undefined Technology',
      description:
        'Com o crescimento de empresas e a grande demanda para sem processos, Undefined se estabeleceu com a proposta de transformar problemas para com a tecnologia.',
      side: 'left' as const,
    },
    {
      year: 'Quarto Ano',
      title: 'Undefined Technology',
      description:
        'Com o crescimento de empresas e a grande demanda para sem processos, Undefined se estabeleceu com a proposta de transformar problemas para com a tecnologia.',
      side: 'right' as const,
    },
    {
      year: 'Quinto Ano',
      title: 'Undefined Technology',
      description:
        'Com o crescimento de empresas e a grande demanda para sem processos, Undefined se estabeleceu com a proposta de transformar problemas para com a tecnologia.',
      side: 'left' as const,
    },
    {
      year: 'Presente',
      title: 'Undefined Technology',
      description:
        'Com o crescimento de empresas e a grande demanda para sem processos, Undefined se estabeleceu com a proposta de transformar problemas para com a tecnologia.',
      side: 'right' as const,
    },
  ];

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* About Header */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-white">
                <span className="text-cyan-400">Luis</span> sousa
              </h1>
              <div className="space-y-4 text-gray-400">
                <p>
                  Sou um profissional de software com mais de 22 
                  anos de experiência em tecnologia e 6 anos 
                  desenvolvendo softwares complexos, sites e APIs, 
                  sempre com foco em soluções inovadoras.
                </p>
                <p>
                  Minha trajetória começou cedo ao aprender programação 
                  e linguagens técnicas ainda jovem. Ao longo dos 
                  anos, desenvolvi habilidades em múltiplas linguagens, 
                  criando e implementando integrações e automações que 
                  realmente fazem a diferença para os negócios. Tenho 
                  grande prazer em entregar resultados tangíveis e que 
                  realmente impactam.
                </p>
                <p>
                  Hoje, além de desenvolver projetos personalizados que 
                  transformam a forma como empresas operam, também 
                  trabalho com soluções SaaS. Meu projeto é transformar 
                  ideias complexas em soluções digitais com resultados 
                  mensuráveis.
                </p>
                <p>
                  Não sou apenas um programador. Sou o seu integrador 
                  estratégico, que desenvolve soluções para integrar 
                  sistemas e automatizar processos para facilitar a 
                  gestão do seu negócio.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTAwOTUyOHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Luis Sousa"
                  className="relative rounded-lg border-2 border-cyan-400/30 grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-white mb-3">
              Linha do <span className="text-cyan-400">tempo</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Um pouco sobre minha jornada corporativa
              <br />
              desenvolvendo soluções de software
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-md transition-colors">
                AGENDE UMA REUNIÃO
              </button>
              <button className="border border-gray-600 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 px-6 py-3 rounded-md transition-colors">
                FALAR VIA ZAP
              </button>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative max-w-6xl mx-auto mt-16">
            {/* Center Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-cyan-400 to-cyan-500 transform -translate-x-1/2"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row ${
                    item.side === 'right' ? 'lg:flex-row-reverse' : ''
                  } items-center gap-8`}
                >
                  {/* Content Card */}
                  <div className="w-full lg:w-5/12">
                    {item.side === 'left' && (
                      <div className="bg-gradient-to-br from-cyan-900/40 to-cyan-800/40 border border-cyan-700 rounded-lg p-6 space-y-3 hover:scale-105 transition-transform">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
                            <Rocket size={20} className="text-white" />
                          </div>
                          <h3 className="text-white text-lg">{item.title}</h3>
                        </div>
                        <p className="text-gray-300 text-sm">{item.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Center Dot */}
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <div className="relative">
                      <div className="w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-900"></div>
                      <div className="absolute top-1/2 -translate-y-1/2 -left-20 text-gray-400 text-sm whitespace-nowrap">
                        {item.year}
                      </div>
                    </div>
                  </div>

                  {/* Content Card (Right Side) */}
                  <div className="w-full lg:w-5/12">
                    {item.side === 'right' && (
                      <div className="bg-gradient-to-br from-cyan-900/40 to-cyan-800/40 border border-cyan-700 rounded-lg p-6 space-y-3 hover:scale-105 transition-transform">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
                            <Rocket size={20} className="text-white" />
                          </div>
                          <h3 className="text-white text-lg">{item.title}</h3>
                        </div>
                        <p className="text-gray-300 text-sm">{item.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Mobile Year Label */}
                  <div className="lg:hidden text-cyan-400 text-sm">{item.year}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
