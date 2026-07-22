import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

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
          ? 'bg-[#07090e]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-xl' 
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-purple-500 transition-transform group-hover:scale-125" />
            <span className="font-heading font-bold text-base sm:text-lg text-white tracking-tight">
              NT Aplicações
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => handleNavClick('ecosystem')}
              className="text-xs font-medium uppercase tracking-wider text-zinc-300 hover:text-white transition-colors cursor-pointer"
            >
              Produtos
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              className="text-xs font-medium uppercase tracking-wider text-zinc-300 hover:text-white transition-colors cursor-pointer"
            >
              A empresa
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className="text-xs font-medium uppercase tracking-wider text-zinc-300 hover:text-white transition-colors cursor-pointer"
            >
              Contato
            </button>
          </nav>

          {/* Desktop Header CTA */}
          <div className="hidden md:flex items-center">
            <button 
              onClick={() => handleNavClick('contact')}
              className="text-xs font-medium text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 px-4 py-2 rounded-lg transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>Falar com a NT</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-md text-zinc-400 hover:text-white focus:outline-none"
            aria-label="Menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0c12] border-b border-zinc-800 px-4 pt-3 pb-6 mt-2 space-y-3 shadow-2xl animate-fade-in">
          <nav className="flex flex-col gap-2">
            <button 
              onClick={() => handleNavClick('ecosystem')}
              className="text-left py-2 px-3 text-sm font-medium text-zinc-200 hover:text-white hover:bg-zinc-900 rounded-md"
            >
              Produtos
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              className="text-left py-2 px-3 text-sm font-medium text-zinc-200 hover:text-white hover:bg-zinc-900 rounded-md"
            >
              A empresa
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className="text-left py-2 px-3 text-sm font-medium text-zinc-200 hover:text-white hover:bg-zinc-900 rounded-md"
            >
              Contato
            </button>
          </nav>

          <div className="pt-2 border-t border-zinc-800/80">
            <button 
              onClick={() => handleNavClick('contact')}
              className="w-full py-2.5 px-4 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 font-medium text-xs flex items-center justify-center gap-2"
            >
              <span>Falar com a NT</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
