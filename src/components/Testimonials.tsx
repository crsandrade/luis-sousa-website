import { Star, ChevronRight } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Rafaela Troesi',
      role: '@trolesidigital',
      image: '../public/rafaela-troesi.png',
      text: 'Que material incrível Geisi. Eu adoro uma planilha, e essa Planilha Master tá surreal! Eu não sabia que precisava até comprar e ver a real necessidade de ter todo esse controle. Tudo num lugar só facilita demais.Comprei o DOC MASTER por causa da Proposta Comercial e do Contrato e você superou todas as minhas expectativas!!! Sou grata pela sua dedicação em oferecer sempre o melhor.',
      rating: 5,
    },
    {
      name: 'Matheus Alegre',
      role: 'Gerente de Projetos',
      image: 'https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0ZWFtJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NTAyODU1OHww&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      rating: 5,
    },
    {
      name: 'Matheus Roux',
      role: 'Desenvolvedor Full Stack',
      image: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTAwOTUyOHww&ixlib=rb-4.1.0&q=80&w=1080',
      text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      rating: 5,
    },
  ];

  return (
    <section className="2xl:py-2 uw:py-4 px-4 sm:px-6 lg:px-8 mb-2 2xl:mb-2 uw:mb-8 2xl:mt-2 w-full flex items-center justify-center">
      <div className="container uw:max-w-screen-2xl 2xl:max-w-screen-2xl">
        <div className="bg-gradient-to-br from-cyan-900/40 to-cyan-800/40 border border-cyan-700 rounded-lg p-6 2xl:p-4 uw:p-6">
          {/* Header */}
          <div className="text-center mb-3 uw:mb-6">
            <h2 className="text-white">Veja o que os clientes dizem</h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-2 uw:mb-6 2xl:mb-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 uw:space-y-4 2xl:space-y-2 2xl:p-2 uw:p-4 hover:border-cyan-400 transition-colors"
              >
                {/* Profile */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400"
                  />
                  <div>
                    <h4 className="text-white text-xs 2xl:text-sm uw:text-base">{testimonial.name}</h4>
                    <p className="text-gray-400 text-xs 2xl:text-xs uw:text-sm">{testimonial.role}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 text-xs 2xl:text-xs uw:text-base">{testimonial.text}</p>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="flex justify-center 2xl:text-xs uw:text-sm">
            <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white sm:p-6 px-6 py-3 rounded-md transition-colors flex items-center gap-2">
              VER MAIS DEPOIMENTOS
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
