import React from 'react';

interface ProductScreenshotProps {
  productId: string;
  productName: string;
  category: string;
  screenshotUrl?: string;
  className?: string;
}

export const ProductScreenshot: React.FC<ProductScreenshotProps> = ({
  productId,
  productName,
  category,
  screenshotUrl,
  className = ''
}) => {
  return (
    <div className={`w-full rounded-xl overflow-hidden border border-zinc-800 bg-[#0a0c12] ${className}`}>
      
      {/* Top Browser / Window Frame Header */}
      <div className="flex items-center justify-between px-3.5 py-2 bg-[#0d1017] border-b border-zinc-800/80 select-none">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-700/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-700/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-700/60" />
        </div>
        <div className="text-[11px] font-mono text-zinc-400 tracking-wider truncate max-w-[200px]">
          {productName.toLowerCase().replace(/\s+/g, '')}.ntaplicacoes.com.br
        </div>
        <div className="w-10 text-right">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-zinc-600" />
        </div>
      </div>

      {/* Screenshot Content Body */}
      {screenshotUrl ? (
        <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-[#07090e] overflow-hidden">
          <img 
            src={screenshotUrl} 
            alt={`Screenshot do produto ${productName}`}
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        </div>
      ) : (
        /* Discreet Placeholder (No fake charts, no fake data) */
        <div className="p-6 sm:p-8 min-h-[160px] sm:min-h-[200px] flex flex-col justify-between bg-[#080a0f] relative overflow-hidden">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
            <span className="uppercase tracking-widest">{category}</span>
            <span className="px-2 py-0.5 rounded border border-zinc-800 bg-zinc-900 text-zinc-400 text-[10px]">
              Interface da Plataforma
            </span>
          </div>

          <div className="my-6">
            <div className="text-xl sm:text-2xl font-bold font-heading text-zinc-100">
              {productName}
            </div>
            <p className="text-xs text-zinc-400 font-mono mt-1">
              Plataforma digital em operação no ecossistema NT.
            </p>
          </div>

          <div className="pt-3 border-t border-zinc-800/60 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
            <span>NT Aplicações</span>
            <span>Ambiente Seguro</span>
          </div>
        </div>
      )}

    </div>
  );
};
