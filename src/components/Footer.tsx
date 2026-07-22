import React from 'react';
import { COMPANY_CONFIG } from '../data/company';
import { ArrowUp, ExternalLink, Layers, Shield } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPrivacy }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#06080e] border-t border-slate-800 text-slate-400 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-[1px]">
                <div className="w-full h-full bg-[#0a0e1a] rounded-[11px] flex items-center justify-center">
                  <span className="font-heading font-black text-sm bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    NT
                  </span>
                </div>
              </div>
              <span className="font-heading font-bold text-xl text-white">
                NT Aplicações
              </span>
            </div>

            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              "{COMPANY_CONFIG.tagline}"
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Criamos plataformas, sistemas SaaS e soluções inteligentes para negócios, cidades, entretenimento, mobilidade e gestão.
            </p>
          </div>

          {/* Product Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-blue-400" />
              <span>Produtos Destacados</span>
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://roxou.com.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1 text-slate-300"
                >
                  <span>Roxou</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a 
                  href="https://parceiro.roxou.com.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1 text-slate-300"
                >
                  <span>Partner Pro</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a 
                  href="https://contabil.ntaplicacoes.com.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1 text-slate-300"
                >
                  <span>Split Ready AI</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Institutional Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Institucional
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => onNavigate('about')} 
                  className="hover:text-white transition-colors text-slate-300 cursor-pointer"
                >
                  Sobre a NT Aplicações
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('ecosystem')} 
                  className="hover:text-white transition-colors text-slate-300 cursor-pointer"
                >
                  Soluções e Ecossistema
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="hover:text-white transition-colors text-slate-300 cursor-pointer"
                >
                  Contato e Parcerias
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenPrivacy} 
                  className="hover:text-white transition-colors text-blue-400 font-medium cursor-pointer inline-flex items-center gap-1"
                >
                  <Shield className="w-3.5 h-3.5" />
                  <span>Política de Privacidade</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {currentYear} NT Aplicações. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-4">
            <span>https://ntaplicacoes.com.br</span>
            <button 
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
              title="Voltar ao Topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
