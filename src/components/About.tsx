import React from 'react';
import { Target, Layers, Code2, Zap, Rocket, Shield, CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-[#090d16] border-y border-slate-800/60 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-4">
            <Target className="w-3.5 h-3.5" />
            <span>Sobre a NT Aplicações</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight leading-tight mb-6">
            Tecnologia criada para <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              resolver problemas reais.
            </span>
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            A <strong className="text-white font-semibold">NT Aplicações</strong> desenvolve produtos digitais próprios e soluções tecnológicas focadas em transformar processos, criar novas experiências e resolver problemas reais através da tecnologia.
          </p>

          <p className="text-base text-slate-400 leading-relaxed">
            Nosso ecossistema reúne plataformas voltadas para <span className="text-blue-300 font-medium">entretenimento, negócios, mobilidade, informação, gestão</span> e <span className="text-purple-300 font-medium">inteligência empresarial</span>.
          </p>
        </div>

        {/* Visual Presentation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="glass-panel p-8 rounded-2xl glass-panel-hover relative group">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Desenvolvimento Nativo</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Criamos cada linha de código com foco na melhor engenharia de software, garantindo alta velocidade, estabilidade e segurança.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-blue-400">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Sem dependência externa de terceiros</span>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-2xl glass-panel-hover relative group">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Ecossistema Conectado</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Nossos produtos complementam ecossistemas inteiros de valor, integrando cidades, pessoas, estabelecimentos e frotas.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-purple-400">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Multissetorial e modular</span>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-2xl glass-panel-hover relative group">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Orientação a Resultados</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Não criamos apenas interfaces estéticas; desenhamos ferramentas com impacto financeiro, operacional e social mensurável.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-cyan-400">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Foco no usuário final</span>
            </div>
          </div>

        </div>

        {/* Institutional Metrics Banner */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-purple-950/40 border border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold font-heading text-white font-mono">06</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-mono mt-1">Produtos No Portfólio</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold font-heading text-blue-400 font-mono">100%</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-mono mt-1">Desenvolvimento Próprio</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold font-heading text-indigo-400 font-mono">24/7</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-mono mt-1">Infraestrutura em Nuvem</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold font-heading text-purple-400 font-mono">Multi</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-mono mt-1">Setores de Atuação</div>
          </div>
        </div>

      </div>
    </section>
  );
};
