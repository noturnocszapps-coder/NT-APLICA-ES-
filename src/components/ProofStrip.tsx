import React from 'react';

export const ProofStrip: React.FC = () => {
  const productsList = [
    { name: 'ROXOU', category: 'Entretenimento' },
    { name: 'PARTNER PRO', category: 'Gestão VIP' },
    { name: 'ROXOU TRANSPORTE', category: 'Mobilidade' },
    { name: 'SPLIT READY AI', category: 'Inteligência' },
    { name: 'MELHORA PRUDENTE', category: 'Informação' },
    { name: 'PRUDENTE EM FOCO', category: 'Produção' },
  ];

  return (
    <section className="py-8 bg-[#09090b] border-y border-zinc-800/80 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Label */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 rounded-full bg-purple-500" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">
              PRODUTOS DESENVOLVIDOS E OPERADOS PELA NT
            </span>
          </div>

          {/* Typographic Product Suite Grid / Row */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 font-heading font-bold text-xs sm:text-sm tracking-wider text-zinc-300">
            {productsList.map((p, idx) => (
              <React.Fragment key={p.name}>
                <div className="flex items-center gap-2 group cursor-default">
                  <span className="text-white group-hover:text-purple-300 transition-colors">
                    {p.name}
                  </span>
                  <span className="text-[9px] font-mono text-zinc-400 uppercase border border-zinc-800 px-1.5 py-0.2 rounded bg-zinc-900/60">
                    {p.category}
                  </span>
                </div>
                {idx < productsList.length - 1 && (
                  <span className="text-zinc-400 hidden sm:inline">•</span>
                )}
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
