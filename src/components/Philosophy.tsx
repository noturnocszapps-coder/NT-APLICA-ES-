import React from 'react';
import { COMPANY_CONFIG } from '../data/company';
import { Quote, Sparkles, Code2, Cpu } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <section className="py-28 relative bg-[#080b11] overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-600/15 via-indigo-600/20 to-purple-600/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Glowing Container Card */}
        <div className="relative p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-slate-900/90 via-[#0a0e1a]/95 to-slate-900/90 border border-slate-700/60 shadow-2xl overflow-hidden backdrop-blur-xl">
          
          {/* Top Line Accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 via-purple-500 to-cyan-400" />
          
          {/* Icon Badge */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 p-[1px] shadow-xl shadow-blue-500/20 mb-8">
            <div className="w-full h-full bg-[#0a0d17] rounded-[15px] flex items-center justify-center">
              <Quote className="w-6 h-6 text-blue-400" />
            </div>
          </div>

          {/* Main Statement */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight text-white leading-tight mb-8 max-w-4xl mx-auto">
            “{COMPANY_CONFIG.philosophyHeadline}”
          </h2>

          {/* Complementary Text */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            {COMPANY_CONFIG.philosophyComplement}
          </p>

          {/* Subtle Decorative Elements */}
          <div className="mt-10 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Inovação Contínua</span>
            </span>
            <span className="text-slate-700">•</span>
            <span className="flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-purple-400" />
              <span>Engenharia de Precisão</span>
            </span>
            <span className="text-slate-700">•</span>
            <span className="flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>Propósito Prático</span>
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
