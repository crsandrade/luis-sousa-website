"use client";

import Image, { StaticImageData } from "next/image";
import { Instagram } from "lucide-react";

interface BannerProps {
  personImage: StaticImageData; // Next.js tipagem correta para imagens
}

export function Banner({ personImage }: BannerProps) {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="relative bg-gradient-to-r from-cyan-800 to-cyan-700 rounded-2xl overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between">
          
          {/* TEXTOS + BOTÃO */}
          <div className="flex items-center gap-8 py-12 pl-12 flex-1">
            <h2 className="text-white text-4xl max-w-xs">
              Conheça minhas redes sociais !
            </h2>
            
            <button className="bg-white hover:bg-gray-50 transition-colors px-6 py-3 rounded-lg flex items-center gap-2 shadow-lg">
              <Instagram className="w-5 h-5 text-teal-700" />
              <span className="text-gray-800">é só clicar!</span>
            </button>
          </div>

          {/* IMAGEM DA PESSOA */}
          <div className="relative h-[180px] w-[280px] flex-shrink-0">
            <Image
              src={personImage}
              alt="Person"
              className="object-cover object-[center_-25px]"
              fill
              sizes="280px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
