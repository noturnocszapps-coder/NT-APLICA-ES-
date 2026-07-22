import React, { useState } from 'react';
import { PRODUCTS_DATA } from '../data/products';
import { Product } from '../types';
import { ProductScreenshot } from './ProductScreenshot';
import { ProductModal } from './ProductModal';
import { ExternalLink, Info, CheckCircle2 } from 'lucide-react';

export const Ecosystem: React.FC = () => {
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  // Find products by id for explicit editorial placement
  const roxouProduct = PRODUCTS_DATA.find(p => p.id === 'roxou') || PRODUCTS_DATA[0];
  const partnerProProduct = PRODUCTS_DATA.find(p => p.id === 'roxou-partner-pro') || PRODUCTS_DATA[1];
  const splitReadyProduct = PRODUCTS_DATA.find(p => p.id === 'split-ready-ai') || PRODUCTS_DATA[3];
  
  const otherProducts = PRODUCTS_DATA.filter(p => 
    p.id !== 'roxou' && p.id !== 'roxou-partner-pro' && p.id !== 'split-ready-ai'
  );

  return (
    <section id="ecosystem" className="py-24 sm:py-32 relative bg-[#07090e]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs font-mono tracking-widest text-zinc-400 uppercase mb-3">
            ECOSSISTEMA DE PRODUTOS
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight mb-4">
            Produtos que já estão no mundo.
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Um ecossistema construído a partir de necessidades reais.
          </p>
        </div>

        {/* 1. PRODUTO EM DESTAQUE - Roxou (Bloco Horizontal) */}
        <article className="mb-12 sm:mb-16 p-6 sm:p-10 rounded-2xl bg-[#0d1017] border border-zinc-800/90 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Info Area */}
            <div className="lg:col-span-6 space-y-5 text-left">
              
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-purple-950/60 text-purple-300 border border-purple-800/50">
                  ECOSSISTEMA ROXOU — PRODUTO EM DESTAQUE
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold font-heading text-white">
                {roxouProduct.name}
              </h3>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {roxouProduct.description}
              </p>

              {/* Key Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {roxouProduct.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                {roxouProduct.url && (
                  <a
                    href={roxouProduct.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                  >
                    <span>{roxouProduct.ctaText || 'Conhecer a Roxou'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                <button
                  onClick={() => setActiveModalProduct(roxouProduct)}
                  className="px-4 py-2.5 rounded-lg border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-zinc-200 text-xs font-medium uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                  aria-label={`Ver detalhes do produto ${roxouProduct.name}`}
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Detalhes do produto</span>
                </button>
              </div>

            </div>

            {/* Right Screenshot Area */}
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

        {/* 2. DOIS PRODUTOS LADO A LADO: Partner Pro & Split Ready AI */}
        <div className="mb-12 sm:mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Partner Pro */}
          <article className="p-6 sm:p-8 rounded-2xl bg-[#0d1017] border border-zinc-800/90 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400 bg-purple-950/40 px-2 py-0.5 rounded border border-purple-900/40">
                  Ecossistema Roxou
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-zinc-800 text-emerald-400 bg-emerald-950/20">
                  Operacional
                </span>
              </div>

              <h3 className="text-2xl font-bold font-heading text-white">
                {partnerProProduct.name}
              </h3>

              <p className="text-zinc-300 text-sm leading-relaxed">
                {partnerProProduct.description}
              </p>

              <ProductScreenshot 
                productId={partnerProProduct.id}
                productName={partnerProProduct.name}
                category={partnerProProduct.category}
                screenshotUrl={partnerProProduct.screenshotUrl}
              />
            </div>

            <div className="pt-2 flex items-center justify-between gap-2 border-t border-zinc-800/60">
              <button
                onClick={() => setActiveModalProduct(partnerProProduct)}
                className="text-xs text-zinc-400 hover:text-zinc-200 transition-colors inline-flex items-center gap-1 cursor-pointer"
                aria-label={`Ver detalhes de ${partnerProProduct.name}`}
              >
                <Info className="w-3.5 h-3.5" />
                <span>Detalhes</span>
              </button>

              {partnerProProduct.url && (
                <a
                  href={partnerProProduct.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{partnerProProduct.ctaText || 'Acessar o Partner Pro'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </article>

          {/* Split Ready AI */}
          <article className="p-6 sm:p-8 rounded-2xl bg-[#0d1017] border border-zinc-800/90 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                  {splitReadyProduct.category}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-zinc-800 text-blue-400 bg-blue-950/20">
                  Inteligência Empresarial
                </span>
              </div>

              <h3 className="text-2xl font-bold font-heading text-white">
                {splitReadyProduct.name}
              </h3>

              <p className="text-zinc-300 text-sm leading-relaxed">
                {splitReadyProduct.description}
              </p>

              <ProductScreenshot 
                productId={splitReadyProduct.id}
                productName={splitReadyProduct.name}
                category={splitReadyProduct.category}
                screenshotUrl={splitReadyProduct.screenshotUrl}
              />
            </div>

            <div className="pt-2 flex items-center justify-between gap-2 border-t border-zinc-800/60">
              <button
                onClick={() => setActiveModalProduct(splitReadyProduct)}
                className="text-xs text-zinc-400 hover:text-zinc-200 transition-colors inline-flex items-center gap-1 cursor-pointer"
                aria-label={`Ver detalhes de ${splitReadyProduct.name}`}
              >
                <Info className="w-3.5 h-3.5" />
                <span>Detalhes</span>
              </button>

              {splitReadyProduct.url && (
                <a
                  href={splitReadyProduct.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{splitReadyProduct.ctaText || 'Acessar o Split Ready AI'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </article>

        </div>

        {/* 3. OUTROS PRODUTOS EM COMPOSIÇÃO DIFERENCIADA */}
        <div className="space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4">
            DEMAIS PLATAFORMAS E INICIATIVAS DO ECOSSISTEMA
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherProducts.map((p) => (
              <article 
                key={p.id}
                className="p-6 rounded-xl bg-[#0a0c12] border border-zinc-800/80 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                    <span className={p.id.startsWith('roxou') ? 'text-purple-400' : ''}>
                      {p.category}
                    </span>
                    {p.badge && (
                      <span className={`px-2 py-0.5 rounded border ${
                        p.id.startsWith('roxou') 
                          ? 'border-purple-800/50 text-purple-300 bg-purple-950/40' 
                          : 'border-zinc-800 text-zinc-300 bg-zinc-900'
                      }`}>
                        {p.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold font-heading text-white">
                    {p.name}
                  </h3>

                  <p className="text-zinc-400 text-xs leading-relaxed line-clamp-3">
                    {p.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-800/60 flex items-center justify-between text-xs gap-2">
                  <button
                    onClick={() => setActiveModalProduct(p)}
                    className="text-zinc-400 hover:text-zinc-200 transition-colors inline-flex items-center gap-1 cursor-pointer"
                    aria-label={`Ver detalhes do produto ${p.name}`}
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Detalhes</span>
                  </button>

                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs transition-colors inline-flex items-center gap-1"
                    >
                      <span>{p.ctaText || 'Acessar ' + p.name}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>

      {/* Product Details Modal */}
      <ProductModal 
        product={activeModalProduct} 
        onClose={() => setActiveModalProduct(null)} 
      />
    </section>
  );
};
