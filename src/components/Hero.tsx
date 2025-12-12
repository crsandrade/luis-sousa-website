import { ArrowRight } from 'lucide-react';
import CircuitFill from "@/components/CircuitFill"; // ⬅️ importe seu componente

export function Hero() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 pt-24 xl:pt-28 2xl:pt-24 pb-4 xl:pb-4 uw:pb-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Left Content */}
          <div className="space-y-3 2xl:space-y-3 uw:space-y-6">
            <h1 className="text-white text-xl sm:text-2xl lg:text-3xl 2xl:text-5xl uw:text-6xl font-bold leading-tight">
              Transformando caos digital em{' '}
              <span className="text-cyan-600">soluções</span>
              <br />
              <span className="text-cyan-600">com propósito</span>
            </h1>

            <p className="max-w-xl uw:max-w-2xl text-white 2xl:text-sm uw:text-lg leading-relaxed">
              Sou Luis Sousa, engenheiro de software com duas décadas de experiência em
              tecnologia e desenvolvimento de software. Conhecido como o Mago do Código,
              ajudo empreendedores a traduzir ideias em soluções sólidas, escaláveis e humanas.
            </p>

            {/* 
            <div className="absolute inset-3 opacity-40 pointer-events-none">
              <CircuitFill speed={3} color="#3bd5ff" strokeWidth={5} />
            </div>
              
              🔵 Circuito animado no fundo */}
            <div className="flex flex-wrap gap-6 sm:gap-8">
              <button className="bg-[linear-gradient(90deg,#007A93,#0A4A57,#007A93,#0A4A57)] text-white px-6 py-2 rounded-md transition-colors flex items-center gap-2 font-semibold">
                vamos conversar
              </button>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center">
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

          <div className="flex justify-center lg:justify-end">
            <img
              src="/hero-image.png"
              alt="Três Imagens do Luis Sousa"
              className="
                          object-contain
                          w-full

                          max-w-[240px] max-h-[280px]       /* base */
                          sm:max-w-[240px] sm:max-h-[280px] /* sm */
                          md:max-w-[280px] md:max-h-[240px] /* md */
                          xl:max-w-[300px] xl:max-h-[260px] /* xl */
                          2xl:max-w-[400px] 2xl:max-h-[300px] /* 2xl */
                          uw:w-[800px] uw:max-h-[400px] /* uw */
                        "
            />
          </div>


        </div>
      </div>
    </section>
  );
}
