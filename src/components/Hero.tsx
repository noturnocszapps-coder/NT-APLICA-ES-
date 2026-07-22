import React from 'react';
import { ArrowRight, MessageSquare, Sparkles, MapPin, QrCode, Car, Zap, CheckCircle2 } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/products';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const topProducts = PRODUCTS_DATA.slice(0, 4);

  return (
    <section id="hero" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-[#050505]">
      
      {/* Subtle Ambient Radial Glow (Deep & Unobtrusive) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-900/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Main Editorial Area */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800/90 text-[11px] font-mono tracking-widest text-zinc-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              <span>NT APLICAÇÕES — DIGITAL PRODUCT COMPANY</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight leading-[1.10] max-w-2xl">
              Criamos produtos digitais <br className="hidden sm:inline" />
              para problemas reais.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-xl">
              Desenvolvemos e operamos plataformas próprias nas áreas de entretenimento, negócios, mobilidade, informação e inteligência.
            </p>

            {/* Dual CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 max-w-md sm:max-w-none">
              <button
                onClick={() => onNavigate('ecosystem')}
                className="px-6 py-3.5 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-lg hover:scale-[1.01]"
              >
                <span>Explorar produtos</span>
                <ArrowRight className="w-4 h-4 text-zinc-950" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 font-medium text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-zinc-400" />
                <span>Falar sobre um projeto</span>
              </button>
            </div>

            {/* Quick Metrics / Signals */}
            <div className="pt-4 border-t border-zinc-900 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <span className="block text-lg font-bold font-heading text-white">6+</span>
                <span className="text-[11px] font-mono text-zinc-400 uppercase">Plataformas</span>
              </div>
              <div>
                <span className="block text-lg font-bold font-heading text-white">100%</span>
                <span className="text-[11px] font-mono text-zinc-400 uppercase">Proprietárias</span>
              </div>
              <div>
                <span className="block text-lg font-bold font-heading text-emerald-400">Ativas</span>
                <span className="text-[11px] font-mono text-zinc-400 uppercase">Em operação</span>
              </div>
            </div>

          </div>

          {/* Desktop Right Side Asymmetric Product Layer Showcase */}
          <div className="hidden lg:block lg:col-span-5 relative pl-2">
            <div className="relative w-full aspect-[4/5] max-h-[520px] flex flex-col justify-center">
              
              {/* Product Layer 1: Roxou (Primary) */}
              <div 
                onClick={() => onNavigate('ecosystem')}
                className="absolute top-0 right-0 left-4 bg-[#09090b] border border-purple-500/30 rounded-2xl p-5 shadow-2xl shadow-black/90 cursor-pointer hover:-translate-y-1 transition-all duration-300 group z-30"
              >
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                    <span className="text-xs font-bold font-mono uppercase text-purple-300">Roxou</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/60 text-purple-300 border border-purple-800/40">
                    roxou.com.br
                  </span>
                </div>

                <div className="mt-3.5 space-y-2.5">
                  <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-white font-bold text-xs">
                        RX
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Descoberta Local & Eventos</div>
                        <div className="text-[10px] text-zinc-400 flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3 text-purple-400" /> Curadoria cultural em tempo real
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-900/40">
                      Ao vivo
                    </span>
                  </div>
                </div>
              </div>

              {/* Product Layer 2: Partner Pro (Stacked Offset) */}
              <div 
                onClick={() => onNavigate('ecosystem')}
                className="absolute top-28 left-0 right-8 bg-[#0a0a0d] border border-zinc-800 rounded-2xl p-5 shadow-2xl shadow-black/80 cursor-pointer hover:-translate-y-1 transition-all duration-300 group z-20"
              >
                <div className="flex items-center justify-between pb-2.5 border-b border-zinc-800/80">
                  <div className="flex items-center gap-2">
                    <QrCode className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-xs font-bold font-mono text-zinc-200">Partner Pro</span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400">
                    parceiro.roxou.com.br
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-between text-xs">
                  <div className="space-y-1">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">Portaria & Listas VIP</div>
                    <div className="font-semibold text-white flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Validação QR Code Ativa
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-cyan-300">
                    Gestão
                  </span>
                </div>
              </div>

              {/* Product Layer 3: Split Ready AI (Bottom Layer) */}
              <div 
                onClick={() => onNavigate('ecosystem')}
                className="absolute top-56 left-6 right-2 bg-[#09090b] border border-blue-500/20 rounded-2xl p-5 shadow-2xl shadow-black/70 cursor-pointer hover:-translate-y-1 transition-all duration-300 group z-10"
              >
                <div className="flex items-center justify-between pb-2.5 border-b border-zinc-800/80">
                  <div className="flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-blue-400" />
                    <span className="text-xs font-bold font-mono text-zinc-200">Split Ready AI</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950/40 text-blue-300 border border-blue-900/30">
                    Inteligência Aplicada
                  </span>
                </div>

                <div className="mt-3 text-xs text-zinc-400 flex items-center justify-between">
                  <span>Diagnóstico tributário & Split Payment</span>
                  <span className="font-mono text-white text-[10px] bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                    Engine Ativa
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Mobile Product Visual Stack (Horizontal Swipe / Scroll Preview) */}
        <div className="lg:hidden mt-12 pt-8 border-t border-zinc-900 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
              PRODUTOS DO ECOSSISTEMA
            </span>
            <span className="text-[10px] font-mono text-purple-400">
              Deslize para ver →
            </span>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none -mx-4 px-4">
            {topProducts.map((p) => (
              <div
                key={p.id}
                onClick={() => onNavigate('ecosystem')}
                className="shrink-0 w-[260px] snap-start p-4 rounded-xl bg-[#09090b] border border-zinc-800 space-y-3 cursor-pointer"
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                  <span className="uppercase text-purple-400">{p.badge || 'Produto'}</span>
                  <span>Operacional</span>
                </div>

                <div>
                  <h3 className="text-base font-bold font-heading text-white">{p.name}</h3>
                  <p className="text-xs text-zinc-400 line-clamp-2 mt-1">{p.description}</p>
                </div>

                <div className="pt-2 border-t border-zinc-800/60 flex items-center justify-between text-[11px] font-mono text-zinc-300">
                  <span>Ver produto</span>
                  <ArrowRight className="w-3 h-3 text-purple-400" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

