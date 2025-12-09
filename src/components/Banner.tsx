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
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-6 md:gap-8 p-6 md:py-12 md:pl-12 flex-1">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl max-w-xs">
              Conheça minhas redes sociais !
            </h2>
            <button className="bg-white hover:bg-gray-50 transition-colors px-5 sm:px-6 py-3 rounded-lg flex items-center gap-2 shadow-lg">
              <Instagram className="w-5 h-5 text-teal-700" />
              <span className="text-gray-800">é só clicar!</span>
            </button>
          </div>
          <div className="relative w-full md:w-[280px] h-[200px] md:h-[180px]">
            <Image
              src={personImage}
              alt="Person"
              className="object-cover object-[center_-25px]"
              fill
              sizes="(max-width: 768px) 100vw, 280px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
