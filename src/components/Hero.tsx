import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="px-4 sm:px-6 lg:px-8
                        pt-16 pb-10              
                        xl:pt-20 xl:pb-12
                        2xl:pt-32 2xl:pb-20       ">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Transformando caos digital em{' '}
              <span className="text-cyan-600">soluções</span>
              <br />
              <span className="text-cyan-600">com propósito</span>
            </h1>

            <p className="text-white max-w-xl text-lg leading-relaxed">
              Sous Luis Sousa, engenheiro de software com duas décadas de experiência em
              tecnologia e desenvolvimento de software. Conhecido como o Mago do Código,
              ajudo empreendedores a traduzir ideias em soluções sólidas, escaláveis e humanas.
            </p>

            <div className="flex flex-wrap gap-8">
              <button className="bg-[linear-gradient(90deg,#007A93,#0A4A57,#007A93,#0A4A57)] text-white px-8 py-3 rounded-md transition-colors flex items-center gap-2 font-semibold">
                vamos conversar
              </button>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 
                    border-t-[8px] border-t-transparent 
                    border-b-[8px] border-b-transparent 
                    border-l-[16px] border-l-cyan-600"></div>
                </div>

                <button className="text-white hover:text-cyan-400 transition-colors font-semibold flex items-center gap-2">
                  saiba mais
                </button>
              </div>
            </div>
          </div>

          {/* Right Images */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/hero-image.png"
              alt="Três Imagens do Luis Sousa"
              className="
      object-contain 
    w-full 
    max-w-[220px]          /* telas menores */
    max-h-[320px]          /* evita Hero gigante no 1080p */

    xl:max-w-[300px]       /* telas médias */
    xl:max-h-[400px]

    2xl:max-w-[420px]      /* ultrawide – mantém visual original */
    2xl:max-h-[550px]
    "
            />
          </div>


        </div>
      </div>
    </section>
  );
}
