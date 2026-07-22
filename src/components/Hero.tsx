import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/products';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  // Select top active products for the subtle editorial right-side showcase
  const topProducts = PRODUCTS_DATA.slice(0, 4);

  return (
    <section id="hero" className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden bg-[#07090e]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Main Editorial Text Area */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Small Eyebrow */}
            <div className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
              NT APLICAÇÕES — PRODUTOS DIGITAIS
            </div>

            {/* Headline (Max 3 lines desktop, clean break mobile) */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight leading-[1.12]">
              Criamos produtos digitais <br className="hidden sm:inline" />
              para problemas reais.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-2xl">
              Desenvolvemos e operamos plataformas próprias nas áreas de entretenimento, negócios, mobilidade, informação e inteligência.
            </p>

            {/* Dual CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 max-w-md sm:max-w-none">
              <button
                onClick={() => onNavigate('ecosystem')}
                className="px-6 py-3.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow"
              >
                <span>Conheça nossos produtos</span>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-950" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3.5 rounded-lg bg-transparent hover:bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 border border-zinc-800 font-medium text-xs uppercase tracking-wider transition-all flex items-center justify-center cursor-pointer"
              >
                <span>Fale com a NT</span>
              </button>
            </div>

          </div>

          {/* Desktop Right Side Editorial Showcase (Hidden on mobile) */}
          <div className="hidden lg:block lg:col-span-5 pl-4">
            <div className="p-6 rounded-2xl bg-[#0d1017] border border-zinc-800/80 space-y-4">
              <div className="text-[11px] font-mono tracking-widest text-zinc-400 uppercase pb-3 border-b border-zinc-800 flex items-center justify-between">
                <span>ECOSSISTEMA PRÓPRIO</span>
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              </div>

              <div className="space-y-3">
                {topProducts.map((p) => (
                  <div 
                    key={p.id}
                    onClick={() => onNavigate('ecosystem')}
                    className="p-3.5 rounded-xl bg-[#090b10] border border-zinc-800/60 hover:border-zinc-700 transition-colors cursor-pointer group flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                        {p.category}
                      </div>
                      <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors mt-0.5">
                        {p.name}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-zinc-800 bg-zinc-900/80 text-zinc-400">
                      {p.isAvailable ? 'Operacional' : 'Em Breve'}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-[11px] font-mono text-zinc-400 text-right">
                + produtos sob desenvolvimento
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
