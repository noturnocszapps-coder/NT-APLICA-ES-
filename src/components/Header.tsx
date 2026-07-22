import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  onNavigateRoute?: (route: string) => void;
  currentPath?: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, onNavigateRoute, currentPath = '/' }) => {
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

  const handleRouteClick = (route: string) => {
    setMobileMenuOpen(false);
    if (onNavigateRoute) {
      onNavigateRoute(route);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#050505]/90 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-2xl' 
          : 'bg-[#050505]/40 backdrop-blur-sm border-b border-zinc-800/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="/" 
            onClick={(e) => { 
              e.preventDefault(); 
              if (currentPath === '/') {
                handleNavClick('hero'); 
              } else {
                handleRouteClick('/');
              }
            }}
            className="flex items-center gap-3 group focus:outline-none cursor-pointer"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-purple-500 transition-transform group-hover:scale-125" />
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-base sm:text-lg text-white tracking-tight">
                NT Aplicações
              </span>
              <span className="hidden sm:inline-block text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                PRODUCT STUDIO
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            <button 
              onClick={() => handleNavClick('ecosystem')}
              className="text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              Produtos
            </button>
            <button 
              onClick={() => handleRouteClick('/desenvolvimento-com-inteligencia-artificial')}
              className={`text-xs font-mono uppercase tracking-widest transition-colors cursor-pointer flex items-center gap-1.5 ${
                currentPath === '/desenvolvimento-com-inteligencia-artificial' 
                  ? 'text-purple-400 font-bold' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span>Inteligência Artificial</span>
              <span className="text-[9px] px-1 py-0.2 rounded bg-purple-950/80 text-purple-300 border border-purple-800/40 font-mono">
                IA
              </span>
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              className="text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              A empresa
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className="text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              Contato
            </button>
          </nav>

          {/* Desktop Header CTA */}
          <div className="hidden md:flex items-center">
            <button 
              onClick={() => handleNavClick('contact')}
              className="text-xs font-mono uppercase tracking-wider text-zinc-200 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 px-4 py-2 rounded-lg transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>Falar com a NT</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-white focus:outline-none"
            aria-label="Menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#09090b] border-b border-zinc-800 px-4 pt-4 pb-6 mt-2 space-y-4 shadow-2xl animate-fade-in">
          <nav className="flex flex-col gap-1.5">
            <button 
              onClick={() => handleNavClick('ecosystem')}
              className="text-left py-2.5 px-3 text-sm font-medium text-zinc-200 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
            >
              Produtos
            </button>
            <button 
              onClick={() => handleRouteClick('/desenvolvimento-com-inteligencia-artificial')}
              className="text-left py-2.5 px-3 text-sm font-medium text-purple-300 hover:text-white hover:bg-zinc-900 rounded-lg flex items-center justify-between transition-colors"
            >
              <span>Inteligência Artificial</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800/40">NOVO</span>
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              className="text-left py-2.5 px-3 text-sm font-medium text-zinc-200 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
            >
              A empresa
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className="text-left py-2.5 px-3 text-sm font-medium text-zinc-200 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
            >
              Contato
            </button>
          </nav>

          <div className="pt-3 border-t border-zinc-800/80">
            <button 
              onClick={() => handleNavClick('contact')}
              className="w-full py-3 px-4 rounded-lg bg-zinc-100 text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer hover:bg-white transition-colors"
            >
              <span>Falar com a NT</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-950" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

