import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 relative bg-[#07090e] border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column Title */}
          <div className="lg:col-span-5 text-left space-y-3">
            <div className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
              SOBRE A EMPRESA
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight leading-tight">
              Uma empresa. <br />
              Vários produtos.
            </h2>
          </div>

          {/* Right Column Text */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              A NT Aplicações desenvolve e opera produtos digitais próprios. Cada plataforma nasce de uma necessidade identificada no mundo real e evolui de forma independente dentro de um ecossistema tecnológico comum.
            </p>

            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
              Entretenimento, gestão, mobilidade, informação e inteligência empresarial são mercados diferentes. A tecnologia é o ponto de conexão.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
