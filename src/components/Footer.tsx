import React from 'react';
import { COMPANY_CONFIG } from '../data/company';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onNavigateRoute?: (route: string) => void;
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onNavigateRoute, onOpenPrivacy }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#05070a] border-t border-zinc-800/80 text-zinc-400 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 pb-10 border-b border-zinc-800/60">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="font-heading font-bold text-lg text-white tracking-tight">
              NT Aplicações
            </div>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Criamos e operamos produtos digitais próprios para demandas do mundo real.
            </p>
            <div className="pt-2 text-xs space-y-1 text-zinc-400">
              <p>
                E-mail:{' '}
                <a
                  href={`mailto:${COMPANY_CONFIG.contactEmail}`}
                  className="text-zinc-300 hover:text-white transition-colors underline decoration-zinc-700"
                >
                  {COMPANY_CONFIG.contactEmail}
                </a>
              </p>
              <p>
                WhatsApp:{' '}
                <a
                  href={COMPANY_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors underline decoration-emerald-900"
                >
                  {COMPANY_CONFIG.whatsappDisplay}
                </a>
              </p>
            </div>
          </div>


          {/* Product Links */}
          <div className="md:col-span-4 space-y-2.5">
            <div className="text-xs font-mono uppercase tracking-wider text-white">
              Produtos & Ecossistema
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
              <li>
                <a 
                  href="https://roxou.com.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-zinc-300"
                >
                  Roxou
                </a>
              </li>
              <li>
                <a 
                  href="https://parceiro.roxou.com.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-zinc-300"
                >
                  Partner Pro
                </a>
              </li>
              <li>
                <a 
                  href="https://transporte.roxou.com.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-zinc-300"
                >
                  Roxou Transporte
                </a>
              </li>
              <li>
                <a 
                  href="https://contabil.ntaplicacoes.com.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-zinc-300"
                >
                  Split Ready AI
                </a>
              </li>
              <li>
                <a 
                  href="https://prudenteemfoco.com.br/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-zinc-300"
                >
                  Prudente em Foco
                </a>
              </li>
              <li>
                <a 
                  href="https://www.melhoraprudente.com.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-zinc-300"
                >
                  Melhora Prudente
                </a>
              </li>
            </ul>
          </div>

          {/* Institutional Links */}
          <div className="md:col-span-3 space-y-2.5">
            <div className="text-xs font-mono uppercase tracking-wider text-white">
              Institucional
            </div>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a
                  href="/desenvolvimento-com-inteligencia-artificial"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigateRoute) {
                      onNavigateRoute('/desenvolvimento-com-inteligencia-artificial');
                    }
                  }}
                  className="hover:text-purple-300 transition-colors text-zinc-300 cursor-pointer font-medium"
                >
                  Desenvolvimento com IA
                </a>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about')} 
                  className="hover:text-white transition-colors text-zinc-300 cursor-pointer"
                >
                  A empresa
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="hover:text-white transition-colors text-zinc-300 cursor-pointer"
                >
                  Contato
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenPrivacy} 
                  className="hover:text-white transition-colors text-zinc-300 cursor-pointer"
                >
                  Privacidade
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="text-xs font-mono text-zinc-500">
          © {currentYear} NT Aplicações.
        </div>

      </div>
    </footer>
  );
};
