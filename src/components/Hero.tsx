import React from 'react';
import { COMPANY_CONFIG } from '../data/company';
import { ArrowRight, MessageSquare, Sparkles, Layers, Cpu, ShieldCheck, Globe } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#080b11]">
      
      {/* Abstract Tech Visual Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      
      {/* Radial Lights & Gradient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/15 to-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[280px] h-[280px] bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Animated Light Grid Line Accent */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Top Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-blue-500/30 text-xs font-mono text-blue-300 shadow-xl shadow-blue-500/10 mb-8 backdrop-blur-md animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
          <span className="text-slate-300">Empresa de Produtos Digitais & Ecossistemas SaaS</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-heading tracking-tight text-white max-w-5xl mx-auto leading-[1.08] mb-6">
          Transformamos ideias em <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-300 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
            produtos digitais.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed mb-10">
          {COMPANY_CONFIG.subtagline}
        </p>

        {/* Dual Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-16">
          <button
            onClick={() => onNavigate('ecosystem')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-base shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
          >
            <Layers className="w-5 h-5 text-blue-200" />
            <span>Conheça nossas soluções</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 text-slate-200 hover:text-white border border-slate-700/80 hover:border-slate-600 font-semibold text-base backdrop-blur-md transition-all flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 text-indigo-400" />
            <span>Fale com a NT Aplicações</span>
          </button>
        </div>

        {/* Institutional Trust Indicators / Abstract Tech Badges */}
        <div className="pt-8 border-t border-slate-800/60 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-slate-400 text-xs sm:text-sm font-medium">
          <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-slate-900/40 border border-slate-800/50">
            <Cpu className="w-4 h-4 text-blue-400" />
            <span>Arquitetura Própria</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-slate-900/40 border border-slate-800/50">
            <Globe className="w-4 h-4 text-indigo-400" />
            <span>Escala & Nuvem</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-slate-900/40 border border-slate-800/50">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Segurança & LGPD</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-slate-900/40 border border-slate-800/50">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Produtos Únicos</span>
          </div>
        </div>

      </div>
    </section>
  );
};
