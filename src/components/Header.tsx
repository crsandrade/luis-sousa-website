"use client";
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentPage: 'home' | 'about';
  onNavigate: (page: 'home' | 'about') => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', page: 'home' as const },
    { label: 'Sobre', page: 'about' as const },
    { label: 'Serviços', page: 'home' as const },
    { label: 'Portfólio', page: 'home' as const },
    { label: 'Depoimentos', page: 'home' as const },
    { label: 'Contatos', page: 'home' as const },
  ];

  return (
    <header className="fixed top-0 w-full bg-[#0a0a0a]/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <img src="/logo.png" alt="Logo" className="h-8 lg:h-10" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
  {menuItems.map((item) => {
    const isActive = currentPage === item.page;
    const isSpecial = item.label === "Contatos"; // 🔥 Botão especial

    return (
      <button
        key={item.label}
        onClick={() => onNavigate(item.page)}
        className={
          `
          text-sm transition-colors px-4 py-2 font-semibold text-white
          ${isSpecial 
            ? 'px-6 py-2 border border-cyan-400 text-white font-semibold rounded-full shadow-[0_0_15px_rgba(0,255,255,0.2)] transition-all'
            : isActive
              ? 'text-gray-300' 
              : 'text-gray-300 hover:text-cyan-400'
          }
          `
        }
      >
        {item.label}
      </button>
    );
  })}
</nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-cyan-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-800">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  onNavigate(item.page);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 text-sm transition-colors ${currentPage === item.page
                    ? 'text-cyan-400 bg-cyan-400/10'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
