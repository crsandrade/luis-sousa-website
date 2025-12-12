import { Instagram, Linkedin, Github, FileText } from 'lucide-react';

export function Footer() {
  const infoBlocks = [
    {
      icon: FileText,
      title: 'Informações Importantes',
      text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.',
    },
    {
      icon: FileText,
      title: 'Política de Privacidade',
      text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.',
    },
    {
      icon: FileText,
      title: 'Termos de Uso',
      text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.',
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-transparent to-gray-900 border-t border-gray-800 pt-2 mt-8">
      {/* Info Blocks */}

      {/* Bottom Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center fhd:py-3 wqhd:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {/* Logo and Brand */}
          <div className="w-full max-w-lg mx-auto">
            <img src="/luis-sousa-software-eng.png" alt="Luis Sousa Software Engineer" />
            <p className="text-gray-400 text-left mt-4">Não importa o quanto você bate, mas o quanto aguenta apanhar.  A vida é simples desde que aceitemos os desafios e desequilíbrios. Porém, só o tempo amadurece e proporciona essa sabedoria de existência – e isso dói.</p>
          </div>

          {/* Social Links */}
          <div className="gap-2 inline-flex items-center">
            <div className="flex flex-col items-center font-bold">
            <p className="text-gray-400 text-sm mb-2">CONTATOS</p>
            <div className="flex items-center justify-center gap-2">
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 hover:bg-cyan-500 rounded-full flex items-center justify-center transition-colors"
              aria-label="WhatsApp"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 hover:bg-cyan-500 rounded-full flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} className="text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 hover:bg-cyan-500 rounded-full flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 hover:bg-cyan-500 rounded-full flex items-center justify-center transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} className="text-white" />
            </a>
            </div>
          </div>
          </div>
        </div>

        {/* Copyright 
          <div className="text-center mt-8 pt-6 border-t border-gray-800">
            <p className="text-gray-500 text-xs">
              © 2025 Luis Sousa. Todos os direitos reservados.
            </p>
          </div>
        */}
      </div>
    </footer>
  );
}
