import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Layers, Sparkles } from 'lucide-react';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#080b11]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-black/50' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#top" 
            onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-[1px] shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
              <div className="w-full h-full bg-[#0a0e1a] rounded-[11px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/20" />
                <span className="font-heading font-black text-lg bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                  NT
                </span>
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg text-white tracking-tight flex items-center gap-1.5">
                NT Aplicações
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase -mt-1">
                Digital Products
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => handleNavClick('hero')}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Início
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Sobre
            </button>
            <button 
              onClick={() => handleNavClick('ecosystem')}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
            >
              Soluções
              <span className="text-[10px] bg-blue-500/20 text-blue-300 border border-blue-500/30 px-1.5 py-0.5 rounded-full font-mono">
                6
              </span>
            </button>
            <button 
              onClick={() => handleNavClick('areas')}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Atuação
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Contato
            </button>
          </nav>

          {/* Desktop Header CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => handleNavClick('ecosystem')}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold rounded-lg group bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all cursor-pointer"
            >
              <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-[#0a0d17] rounded-[7px] group-hover:bg-transparent flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-blue-400 group-hover:text-white transition-colors" />
                <span>Conheça nossas soluções</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0e1a]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-4 pb-6 mt-3 space-y-4 shadow-2xl animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-3">
            <button 
              onClick={() => handleNavClick('hero')}
              className="text-left py-2 px-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800/60"
            >
              Início
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              className="text-left py-2 px-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800/60"
            >
              Sobre a NT Aplicações
            </button>
            <button 
              onClick={() => handleNavClick('ecosystem')}
              className="text-left py-2 px-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800/60 flex items-center justify-between"
            >
              <span>Nossas Soluções</span>
              <span className="text-xs bg-blue-500/20 text-blue-300 border border-blue-500/30 px-2 py-0.5 rounded-full font-mono">
                6 produtos
              </span>
            </button>
            <button 
              onClick={() => handleNavClick('areas')}
              className="text-left py-2 px-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800/60"
            >
              Áreas de Atuação
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className="text-left py-2 px-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800/60"
            >
              Contato
            </button>
          </nav>

          <div className="pt-2 border-t border-slate-800/80">
            <button 
              onClick={() => handleNavClick('ecosystem')}
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-lg text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
            >
              <Sparkles className="w-4 h-4" />
              <span>Conheça nossas soluções</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
