"use client";

import Image, { StaticImageData } from "next/image";
import { Instagram } from "lucide-react";

interface BannerProps {
  personImage: StaticImageData;
}

export function Banner({ personImage }: BannerProps) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 mb-16">
      <div className="relative bg-gradient-to-r from-cyan-800 to-cyan-700 rounded-2xl overflow-hidden shadow-2xl">

        <div className="relative flex flex-col md:flex-row items-center justify-between">
          
          {/* Texto + Botão */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center 
              gap-4 sm:gap-6 md:gap-8 2xl:justify-between p-6 md:py-12 md:pl-12 flex-1">
            
            <h2 className="text-white text-lg md:text-xl 2xl:text-2xl max-w-sm leading-tight">
              Conheça minhas redes sociais!
            </h2>

            <button className="bg-white hover:bg-gray-50 transition-colors 
                px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg">
              <Instagram className="w-6 h-6 text-cyan-700" />
              <span className="text-cyan-800 text-lg">é só clicar!</span>
            </button>
          </div>

          {/* Imagem → escondida no mobile */}
          <div className="hidden md:block relative w-[260px] h-[163px]">
            <Image
              src={personImage}
              alt="Person"
              className="object-cover object-[center_-25px]"
              fill
              sizes="260px"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
