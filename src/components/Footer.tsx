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
    <footer className="bg-gradient-to-b from-transparent to-gray-900 border-t border-gray-800 mt-20">
      {/* Info Blocks */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {infoBlocks.map((block, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-cyan-500/20 border border-cyan-500 rounded-lg flex items-center justify-center">
                  <block.icon size={20} className="text-cyan-400" />
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-white text-sm">{block.title}</h4>
                <p className="text-gray-400 text-xs">{block.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo and Brand */}
            <div className="flex items-center gap-3">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
                <path
                  d="M20 8L28 14V26L20 32L12 26V14L20 8Z"
                  stroke="#0ea5e9"
                  strokeWidth="2"
                  fill="none"
                />
                <path d="M20 14L24 17V23L20 26L16 23V17L20 14Z" fill="#0ea5e9" />
              </svg>
              <div>
                <div className="text-white">Luis Sousa</div>
                <div className="text-gray-400 text-xs">Soluções Digitais</div>
              </div>
            </div>

            {/* Contact */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm mb-2">CONTATO:</p>
              <p className="text-gray-300 text-sm">contato@luissousa.dev</p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
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

          {/* Copyright */}
          <div className="text-center mt-8 pt-6 border-t border-gray-800">
            <p className="text-gray-500 text-xs">
              © 2025 Luis Sousa. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
