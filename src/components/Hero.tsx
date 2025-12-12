import { ArrowRight } from 'lucide-react';
import CircuitFill from "@/components/CircuitFill"; // ⬅️ importe seu componente

export function Hero() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 pt-24 pb-10 xl:pt-28 xl:pb-12 2xl:pt-28 2xl:pb-10 fhd:mb-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Left Content */}
          <div className="space-y-6 wqhd:space-y-12">
            <h1 className="text-white text-xl sm:text-2xl lg:text-3xl xl:text-3xl fhd:text-6xl wqhd:text-7xl font-bold leading-tight">
              Transformando caos digital em{' '}
              <span className="text-cyan-600">soluções</span>
              <br />
              <span className="text-cyan-600">com propósito</span>
            </h1>

            <p className="text-white max-w-xl wqhd:max-w-2xl text-sm sm:text-lg wqhd:text-3xl leading-relaxed">
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
                          2xl:max-w-[420px] 2xl:max-h-[350px] /* 2xl */
                          fhd:max-w-[500px] fhd:max-h-[450px] /* fhd */
                          wqhd:w-[800px] wqhd:max-h-[600px] /* wqhd */
                        "
            />
          </div>


        </div>
      </div>
    </section>
  );
}
