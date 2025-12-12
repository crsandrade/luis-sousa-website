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
          <div className="flex items-center gap-6 md:gap-8 p-6 md:py-12 md:pl-12 2xl:gap-20 flex-1">
            <h2 className="text-white text-base sm:text-lg md:text-xl 2xl:text-2xl max-w-sm">
              Conheça minhas redes sociais !
            </h2>
            <button className="bg-white hover:bg-gray-50 transition-colors px-3 sm:px-3 py-2 rounded-lg flex items-center gap-2 shadow-lg">
              <Instagram className="w-6 h-6 text-cyan-700" />
              <span className="text-cyan-800 text-lg p-1">é só clicar!</span>
            </button>
          </div>

          <div className="relative w-full md:w-[260px] h-[170px] md:h-[163px]">
            <Image
              src={personImage}
              alt="Person"
              className="object-cover object-[center_-25px]"
              fill
              sizes="(max-width: 768px) 100vw, 260px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
