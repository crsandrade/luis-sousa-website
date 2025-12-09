import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-28 pb-4 sm:pb-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Transformando caos digital em{' '}
              <span className="text-cyan-600">soluções</span>
              <br />
              <span className="text-cyan-600">com propósito</span>
            </h1>

            <p className="text-white max-w-2xl text-lg md:text-xl leading-relaxed">
              Sous Luis Sousa, engenheiro de software com duas décadas de experiência em
              tecnologia e desenvolvimento de software. Conhecido como o Mago do Código,
              ajudo empreendedores a traduzir ideias em soluções sólidas, escaláveis e humanas.
            </p>

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
              className="object-contain w-full max-w-[240px] sm:max-w-[300px] md:max-w-[360px] xl:max-w-[420px] 2xl:max-w-[520px] max-h-[320px] sm:max-h-[380px] md:max-h-[440px] xl:max-h-[520px] 2xl:max-h-[640px]"
            />
          </div>


        </div>
      </div>
    </section>
  );
}
