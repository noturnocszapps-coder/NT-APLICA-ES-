import React, { useState } from 'react';
import { PRODUCTS_DATA } from '../data/products';
import { Product } from '../types';
import { ProductScreenshot } from './ProductScreenshot';
import { ProductModal } from './ProductModal';
import { ExternalLink, Info, CheckCircle2, ArrowRight, Zap, Sparkles } from 'lucide-react';

interface EcosystemProps {
  onNavigateRoute?: (route: string) => void;
}

export const Ecosystem: React.FC<EcosystemProps> = ({ onNavigateRoute }) => {
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  const roxouProduct = PRODUCTS_DATA.find(p => p.id === 'roxou') || PRODUCTS_DATA[0];
  const partnerProProduct = PRODUCTS_DATA.find(p => p.id === 'roxou-partner-pro') || PRODUCTS_DATA[1];
  const transporteProduct = PRODUCTS_DATA.find(p => p.id === 'roxou-transporte') || PRODUCTS_DATA[2];
  const splitReadyProduct = PRODUCTS_DATA.find(p => p.id === 'split-ready-ai') || PRODUCTS_DATA[3];
  const melhoraPrudente = PRODUCTS_DATA.find(p => p.id === 'melhora-prudente') || PRODUCTS_DATA[4];
  const prudenteEmFoco = PRODUCTS_DATA.find(p => p.id === 'prudente-em-foco') || PRODUCTS_DATA[5];

  return (
    <section id="ecosystem" className="py-24 sm:py-32 relative bg-[#050505] border-t border-zinc-800/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs font-mono tracking-widest text-zinc-400 uppercase mb-3">
            PORTFÓLIO DE TECNOLOGIA
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight mb-4">
            Produtos que já estão no mundo.
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Plataformas digitais desenhadas, construídas e operadas para atender necessidades reais.
          </p>
        </div>

        {/* 1. PRODUTO 01 — ROXOU (Large Horizontal Hero Row: Text Left, UI Right) */}
        <article className="mb-12 sm:mb-16 p-6 sm:p-10 rounded-3xl bg-[#09090b] border border-zinc-800/90 hover:border-zinc-700 transition-colors relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Text */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-purple-950/60 text-purple-300 border border-purple-800/50">
                  {roxouProduct.category}
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-900/40">
                  Operacional
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold font-heading text-white">
                {roxouProduct.name}
              </h3>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {roxouProduct.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {roxouProduct.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                {roxouProduct.url && (
                  <a
                    href={roxouProduct.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                  >
                    <span>{roxouProduct.ctaText || 'Conhecer a Roxou'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                <button
                  onClick={() => setActiveModalProduct(roxouProduct)}
                  className="px-4 py-2.5 rounded-xl border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-zinc-200 text-xs font-medium uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                  aria-label={`Ver detalhes de ${roxouProduct.name}`}
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Detalhes do produto</span>
                </button>
              </div>
            </div>

            {/* Right UI Preview */}
            <div className="lg:col-span-6">
              <ProductScreenshot 
                productId={roxouProduct.id}
                productName={roxouProduct.name}
                category={roxouProduct.category}
                screenshotUrl={roxouProduct.screenshotUrl}
              />
            </div>

          </div>

        </article>

        {/* 2. PRODUTO 02 — PARTNER PRO (Alternating Row: UI Left, Text Right) */}
        <article className="mb-12 sm:mb-16 p-6 sm:p-10 rounded-3xl bg-[#09090b] border border-zinc-800/90 hover:border-zinc-700 transition-colors relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left UI Preview (Desktop) */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <ProductScreenshot 
                productId={partnerProProduct.id}
                productName={partnerProProduct.name}
                category={partnerProProduct.category}
                screenshotUrl={partnerProProduct.screenshotUrl}
              />
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-5 text-left">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800/50">
                  {partnerProProduct.category}
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-900/40">
                  Operacional
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold font-heading text-white">
                {partnerProProduct.name}
              </h3>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {partnerProProduct.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {partnerProProduct.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                {partnerProProduct.url && (
                  <a
                    href={partnerProProduct.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                  >
                    <span>{partnerProProduct.ctaText || 'Acessar o Partner Pro'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                <button
                  onClick={() => setActiveModalProduct(partnerProProduct)}
                  className="px-4 py-2.5 rounded-xl border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-zinc-200 text-xs font-medium uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                  aria-label={`Ver detalhes de ${partnerProProduct.name}`}
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Detalhes</span>
                </button>
              </div>
            </div>

          </div>

        </article>

        {/* 3. PRODUTO 03 — ROXOU TRANSPORTE (Wide Horizontal Layout) */}
        <article className="mb-12 sm:mb-16 p-6 sm:p-10 rounded-3xl bg-[#09090b] border border-zinc-800/90 hover:border-zinc-700 transition-colors relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4 text-left">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-amber-950/60 text-amber-300 border border-amber-800/50">
                  {transporteProduct.category}
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-900/40">
                  Em Operação
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                {transporteProduct.name}
              </h3>

              <p className="text-zinc-300 text-sm leading-relaxed">
                {transporteProduct.description}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                {transporteProduct.url && (
                  <a
                    href={transporteProduct.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{transporteProduct.ctaText}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  onClick={() => setActiveModalProduct(transporteProduct)}
                  className="px-3.5 py-2 rounded-lg border border-zinc-800 text-zinc-400 hover:text-white text-xs font-medium uppercase tracking-wider transition-colors inline-flex items-center gap-1 cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Detalhes</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <ProductScreenshot 
                productId={transporteProduct.id}
                productName={transporteProduct.name}
                category={transporteProduct.category}
                screenshotUrl={transporteProduct.screenshotUrl}
              />
            </div>

          </div>
        </article>

        {/* 4. PRODUTO 04 — SPLIT READY AI (Specific Highlight Card as Applied AI Product) */}
        <article className="mb-12 sm:mb-16 p-8 sm:p-12 rounded-3xl bg-[#090b12] border border-blue-500/30 hover:border-blue-500/50 transition-colors relative overflow-hidden space-y-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/50 text-blue-300 text-[10px] font-mono tracking-widest uppercase">
                <Sparkles className="w-3 h-3 text-blue-400" />
                <span>INTELIGÊNCIA EMPRESARIAL APLICADA</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
                {splitReadyProduct.name}
              </h3>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {splitReadyProduct.description}
              </p>

              {splitReadyProduct.disclaimer && (
                <p className="text-xs text-zinc-400 font-mono italic">
                  {splitReadyProduct.disclaimer}
                </p>
              )}

              <div className="pt-2 flex flex-wrap items-center gap-4">
                {splitReadyProduct.url && (
                  <a
                    href={splitReadyProduct.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-lg shadow-blue-950"
                  >
                    <span>{splitReadyProduct.ctaText || 'Acessar Split Ready AI'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {/* Editorial Link to AI Page */}
                <a
                  href="/desenvolvimento-com-inteligencia-artificial"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigateRoute) {
                      onNavigateRoute('/desenvolvimento-com-inteligencia-artificial');
                    }
                  }}
                  className="text-xs font-mono text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center gap-1.5 cursor-pointer py-2"
                >
                  <span>Conheça nosso trabalho com Inteligência Artificial</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ProductScreenshot 
                productId={splitReadyProduct.id}
                productName={splitReadyProduct.name}
                category={splitReadyProduct.category}
                screenshotUrl={splitReadyProduct.screenshotUrl}
              />
            </div>

          </div>

        </article>

        {/* 5 & 6. SIDE-BY-SIDE CARDS: Melhora Prudente & Prudente em Foco */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Melhora Prudente */}
          <article className="p-6 sm:p-8 rounded-3xl bg-[#09090b] border border-zinc-800/90 hover:border-zinc-700 transition-colors flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-sky-400 bg-sky-950/40 px-2.5 py-0.5 rounded border border-sky-900/40">
                  {melhoraPrudente.category}
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-900/40">
                  Disponível
                </span>
              </div>

              <h3 className="text-2xl font-bold font-heading text-white">
                {melhoraPrudente.name}
              </h3>

              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                {melhoraPrudente.description}
              </p>

              <ProductScreenshot 
                productId={melhoraPrudente.id}
                productName={melhoraPrudente.name}
                category={melhoraPrudente.category}
                screenshotUrl={melhoraPrudente.screenshotUrl}
              />
            </div>

            <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between gap-2">
              <button
                onClick={() => setActiveModalProduct(melhoraPrudente)}
                className="text-xs font-mono text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-1 cursor-pointer"
              >
                <Info className="w-3.5 h-3.5" />
                <span>Detalhes</span>
              </button>

              {melhoraPrudente.url && (
                <a
                  href={melhoraPrudente.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Acessar</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </article>

          {/* Prudente em Foco */}
          <article className="p-6 sm:p-8 rounded-3xl bg-[#09090b] border border-zinc-800/90 hover:border-zinc-700 transition-colors flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-yellow-400 bg-yellow-950/40 px-2.5 py-0.5 rounded border border-yellow-900/40">
                  {prudenteEmFoco.category}
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-900/40">
                  Disponível
                </span>
              </div>

              <h3 className="text-2xl font-bold font-heading text-white">
                {prudenteEmFoco.name}
              </h3>

              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                {prudenteEmFoco.description}
              </p>

              <ProductScreenshot 
                productId={prudenteEmFoco.id}
                productName={prudenteEmFoco.name}
                category={prudenteEmFoco.category}
                screenshotUrl={prudenteEmFoco.screenshotUrl}
              />
            </div>

            <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between gap-2">
              <button
                onClick={() => setActiveModalProduct(prudenteEmFoco)}
                className="text-xs font-mono text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-1 cursor-pointer"
              >
                <Info className="w-3.5 h-3.5" />
                <span>Detalhes</span>
              </button>

              {prudenteEmFoco.url && (
                <a
                  href={prudenteEmFoco.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Acessar</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </article>

        </div>

      </div>

      {/* Product Modal */}
      <ProductModal 
        product={activeModalProduct} 
        onClose={() => setActiveModalProduct(null)} 
      />
    </section>
  );
};

