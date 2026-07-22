import React from 'react';

export const HowWeBuild: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Identificamos um problema real',
      description: 'Analisamos demandas concretas de mercado, operacionais ou regionais sem fricção já resolvida.'
    },
    {
      number: '02',
      title: 'Desenhamos uma solução digital',
      description: 'Projetamos arquitetura, modelo de negócios, experiência do usuário e fluxos com rigor editorial.'
    },
    {
      number: '03',
      title: 'Construímos o produto',
      description: 'Desenvolvemos com código proprietário, alta performance, segurança e APIs server-side.'
    },
    {
      number: '04',
      title: 'Colocamos no mundo',
      description: 'Lançamos e operamos ativamente, gerenciando infraestrutura, usuários e validação real.'
    },
    {
      number: '05',
      title: 'Medimos, aprendemos e evoluímos',
      description: 'Acompanhamos dados de uso, otimizamos performance e iteramos continuadamente.'
    }
  ];

  return (
    <section id="how-we-build" className="py-24 sm:py-32 relative bg-[#050505] border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-2xl mb-16 sm:mb-20">
          <div className="text-xs font-mono tracking-widest text-zinc-400 uppercase mb-3">
            NOSSO CICLO DE DESENVOLVIMENTO
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight leading-tight">
            Como construímos nossos produtos.
          </h2>
        </div>

        {/* Horizontal Process Narrative (Desktop) / Vertical Stack (Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-4 relative">
          
          {steps.map((s, idx) => (
            <div 
              key={s.number}
              className="p-5 sm:p-6 rounded-2xl bg-[#09090b] border border-zinc-800/80 hover:border-zinc-700 transition-colors space-y-4 relative flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono text-purple-400 font-bold">{s.number}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                </div>

                <h3 className="text-base font-bold font-heading text-white leading-snug">
                  {s.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                  {s.description}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-0.5 bg-zinc-800 z-10" />
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
