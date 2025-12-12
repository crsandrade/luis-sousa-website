"use client";

import { useState } from "react";
import { Rocket } from "lucide-react";

export function About() {
  const timelineItems = [
    {
      id: 1,
      year: "Projeto Inicial",
      title: "Undefined Technology",
      description:
        "Com o crescimento de empresas e a grande demanda para sem processos, Undefined se estabeleceu com a proposta de transformar problemas para com a tecnologia.",
      category: "entrepreneurship",
    },
    {
      id: 2,
      year: "Segundo Ano",
      title: "Undefined Technology",
      description:
        "Com o crescimento de empresas e a grande demanda para sem processos, Undefined se estabeleceu com a proposta de transformar problemas para com a tecnologia.",
      category: "career",
    },
    {
      id: 3,
      year: "Terceiro Ano",
      title: "Undefined Technology",
      description:
        "Com o crescimento de empresas e a grande demanda para sem processos, Undefined se estabeleceu com a proposta de transformar problemas para com a tecnologia.",
      category: "entrepreneurship",
    },
    {
      id: 4,
      year: "Quarto Ano",
      title: "Undefined Technology",
      description:
        "Com o crescimento de empresas e a grande demanda para sem processos, Undefined se estabeleceu com a proposta de transformar problemas para com a tecnologia.",
      category: "career",
    },
    {
      id: 5,
      year: "Quinto Ano",
      title: "Undefined Technology",
      description:
        "Com o crescimento de empresas e a grande demanda para sem processos, Undefined se estabeleceu com a proposta de transformar problemas para com a tecnologia.",
      category: "entrepreneurship",
    },
    {
      id: 6,
      year: "Presente",
      title: "Undefined Technology",
      description:
        "Com o crescimento de empresas e a grande demanda para sem processos, Undefined se estabeleceu com a proposta de transformar problemas para com a tecnologia.",
      category: "career",
    },
  ];

  const [highlightedCategory, setHighlightedCategory] = useState<string | null>(
    null
  );

  const handleFilter = (category: string) => {
    setHighlightedCategory((prev) => (prev === category ? null : category));
  };

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="container mx-auto">
        {/* ABOUT SECTION */}
        <section className="mb-20 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-white font-bold text-4xl">
                <img src="/luis-title.png" alt="" />
              </h1>

              <div className="space-y-4 text-gray-400">
                <p>
                  Sou engenheiro de software com mais de 22 anos de experiência em tecnologia e 16 dedicados ao desenvolvimento de sistemas.
 Minha trajetória começou ainda na adolescência, quando montei uma Lan House com meu pai e aprendi na prática que tecnologia vai muito além do código: é sobre visão, estratégia e impacto real.
Hoje, atuo como consultor, mentor e desenvolvedor estratégico, alguém que conecta o mundo dos negócios ao plano digital. Traduzo ideias complexas em soluções claras, escaláveis e humanas, ajudando empreendedores e empresas a transformarem seus projetos em realidades vivas.

Não sou apenas um programador. Sou o Mago do Código, um facilitador entre o caos e a solução, entre o invisível e o palpável. Minha missão é transformar dores digitais em resultados concretos, com sabedoria, autenticidade e propósito.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl"></div>
                <img
                  src="/luis-about.png"
                  alt="Luis Sousa"
                  className="relative rounded-lg border-cyan-400/30 grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* TIMELINE HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-white text-3xl mb-3 font-semibold">
            Linha do <span className="text-cyan-400">tempo</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Um pouco sobre minha jornada corporativa desenvolvendo soluções de
            software
          </p>
        </div>

        {/* FILTER BUTTONS */}
        <div className="flex justify-center gap-6 mb-16">
          <button
            onClick={() => handleFilter("entrepreneurship")}
            className={`px-6 py-2 rounded border uppercase tracking-wider transition-all duration-300 text-sm
              ${
                highlightedCategory === "entrepreneurship"
                  ? "bg-cyan-500 border-cyan-500 text-white shadow-lg shadow-cyan-500/40 scale-105"
                  : "border-gray-600 text-gray-400 hover:border-gray-400"
              }`}
          >
            Empreendedorismo
          </button>

          <button
            onClick={() => handleFilter("career")}
            className={`px-6 py-2 rounded border uppercase tracking-wider transition-all duration-300 text-sm
              ${
                highlightedCategory === "career"
                  ? "bg-cyan-500 border-cyan-500 text-white shadow-lg shadow-cyan-500/40 scale-105"
                  : "border-gray-600 text-gray-400 hover:border-gray-400"
              }`}
          >
            Carreira Tech
          </button>
        </div>

        {/* TIMELINE STRUCTURE */}
        <div className="relative max-w-6xl mx-auto">
          {/* LINE PRINCIPAL */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent lg:-translate-x-1/2 overflow-hidden">
            {/* Pulso descendo */}
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-flow-down opacity-80"></div>
          </div>

          {/* TIMELINE ITEMS */}
          <div className="space-y-20 mt-10">
            {timelineItems.map((item, index) => {
              const isLeft = index % 2 === 0;

              const isActive = highlightedCategory === item.category;
              const isDim =
                highlightedCategory !== null &&
                highlightedCategory !== item.category;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isLeft ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* ============================ */}
                  {/* CARD */}
                  {/* ============================ */}
                  <div
                    className={`
                      w-full lg:w-1/2 p-6 rounded-lg border transition-all duration-500
                      ${
                        isActive
                          ? "bg-[#004b57] border-cyan-500 shadow-[0_0_30px_-5px_rgba(0,200,255,0.4)]"
                          : "bg-[#0c1115] border-gray-800 hover:border-gray-600"
                      }
                      ${isDim ? "opacity-30 blur-[1px]" : "opacity-100"}
                      ${isLeft ? "lg:ml-40" : "lg:mr-40"}
                    `}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
                        <Rocket size={20} className="text-white" />
                      </div>
                      <h3 className="text-white text-lg font-semibold">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>

                  {/* ============================ */}
                  {/* DOT CENTRAL */}
                  {/* ============================ */}
                  <div className="absolute left-4 lg:left-1/2 lg:-translate-x-1/2 lg:static my-4">
                    <div className="relative flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-cyan-500 border-4 border-gray-900 shadow-lg"></div>

                      <span className="text-gray-400 text-sm absolute -bottom-6 whitespace-nowrap">
                        {item.year}
                      </span>
                    </div>
                  </div>

                  {/* ============================ */}
                  {/* RAMO DO CIRCUITO + PULSO */}
                  {/* ============================ */}
                  <div
                    className={`
                      absolute top-1/2 h-[3px] bg-cyan-400/70 shadow-[0_0_12px_#00eaff]
                      overflow-hidden
                      ${
                        isLeft
                          ? "right-1/2 translate-x-[28px] w-32"
                          : "left-1/2 -translate-x-[28px] w-32"
                      }
                    `}
                  >
                    {/* Pulso no ramo */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-flow-right"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ANIMAÇÕES PERSONALIZADAS */}
      <style>{`
        @keyframes flow-down {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .animate-flow-down {
          animation: flow-down 3s linear infinite;
        }

        @keyframes flow-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-flow-right {
          animation: flow-right 2.5s linear infinite;
        }
      `}</style>
    </div>
  );
}
