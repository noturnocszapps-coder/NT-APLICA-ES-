import React from 'react';
import { ExternalLink, Sparkles, QrCode, Car, ArrowRight } from 'lucide-react';
import { ProductScreenshot } from './ProductScreenshot';
import { PRODUCTS_DATA } from '../data/products';

export const RoxouEcosystemSection: React.FC = () => {
  const roxou = PRODUCTS_DATA.find(p => p.id === 'roxou')!;
  const partnerPro = PRODUCTS_DATA.find(p => p.id === 'roxou-partner-pro')!;
  const transporte = PRODUCTS_DATA.find(p => p.id === 'roxou-transporte')!;

  return (
    <section className="py-24 sm:py-32 relative bg-[#09090b] border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/50 text-purple-300 text-[11px] font-mono tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            <span>ECOSSISTEMA CONECTADO</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight leading-tight mb-4">
            Ecossistema Roxou
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Uma suíte integrada de produtos focados em descoberta cultural, gestão de acessos para estabelecimentos e ferramentas operacionais para mobilidade urbana.
          </p>
        </div>

        {/* Connected Ecosystem Canvas Block */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#050505] border border-purple-500/30 relative overflow-hidden space-y-10">
          
          {/* Subtle Ambient Background Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900/10 blur-3xl pointer-events-none rounded-full" />

          {/* Top Suite Descriptor */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-800/80 text-xs font-mono">
            <div className="text-zinc-400">
              TRÊS PLATAFORMAS • UMA ARQUITETURA CONECTADA
            </div>
            <div className="flex items-center gap-4 text-purple-300">
              <span>Descoberta</span>
              <span className="text-zinc-700">→</span>
              <span>Gestão VIP</span>
              <span className="text-zinc-700">→</span>
              <span>Mobilidade</span>
            </div>
          </div>

          {/* Integrated 3-Product Architecture Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* 1. Main Hub: Roxou App (5 columns) */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#0c0c10] border border-purple-500/30 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800/40">
                    HUB PRINCIPAL
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400">roxou.com.br</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-heading text-white">{roxou.name}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{roxou.description}</p>
                </div>

                <ProductScreenshot 
                  productId={roxou.id}
                  productName={roxou.name}
                  category={roxou.category}
                  screenshotUrl={roxou.screenshotUrl}
                />
              </div>

              <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400">Entretenimento & Eventos</span>
                <a
                  href={roxou.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Acessar Roxou</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* 2. Partner Pro (3.5 columns) */}
            <div className="lg:col-span-3.5 p-6 rounded-2xl bg-[#0a0a0e] border border-zinc-800 hover:border-cyan-500/40 transition-colors flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <QrCode className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-[10px] font-mono uppercase text-zinc-400">GESTÃO</span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-300">parceiro.roxou.com.br</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-heading text-white">{partnerPro.name}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{partnerPro.description}</p>
                </div>

                <ProductScreenshot 
                  productId={partnerPro.id}
                  productName={partnerPro.name}
                  category={partnerPro.category}
                  screenshotUrl={partnerPro.screenshotUrl}
                />
              </div>

              <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400">Portaria & Listas</span>
                <a
                  href={partnerPro.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 font-medium text-xs transition-colors inline-flex items-center gap-1"
                >
                  <span>Partner Pro</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* 3. Roxou Transporte (3.5 columns) */}
            <div className="lg:col-span-3.5 p-6 rounded-2xl bg-[#0a0a0e] border border-zinc-800 hover:border-amber-500/40 transition-colors flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-[10px] font-mono uppercase text-zinc-400">MOBILIDADE</span>
                  </div>
                  <span className="text-[10px] font-mono text-amber-300">transporte.roxou.com.br</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-heading text-white">{transporte.name}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{transporte.description}</p>
                </div>

                <ProductScreenshot 
                  productId={transporte.id}
                  productName={transporte.name}
                  category={transporte.category}
                  screenshotUrl={transporte.screenshotUrl}
                />
              </div>

              <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400">Lucro Real</span>
                <a
                  href={transporte.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 font-medium text-xs transition-colors inline-flex items-center gap-1"
                >
                  <span>Transporte</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
