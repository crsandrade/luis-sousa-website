"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Banner } from "@/components/Banner";
import { Cases } from "@/components/Cases";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";
import personImage from "@/public/luis-profilephoto.png"; 
import CircuitFill from "@/components/CircuitFill";


export default function Page() {
  const [currentPage, setCurrentPage] = useState<"home" | "about">("home");

  return (
    <div className=" z-[-1] bg-[#0a0a0a]">

    <div className="min-h-screen relative z-10">


      {/* Conteúdo acima do circuito */}
      <div className="relative z-10">
        <Header currentPage={currentPage} onNavigate={setCurrentPage} />

        {currentPage === "home" ? (
          <>
            <Hero />
            <Services />
            <Banner personImage={personImage} />
            <Cases />
            <Testimonials />
          </>
        ) : (
          <About />
        )}

        <Footer />
      </div>
    </div>
          </div>
  );
}
