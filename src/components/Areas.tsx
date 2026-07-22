import React from 'react';
import { AREAS_DATA } from '../data/areas';
import { 
  Cloud, 
  Sparkles, 
  Globe, 
  LayoutGrid, 
  Compass, 
  Building2, 
  ArrowUpRight,
  Cpu
} from 'lucide-react';

export const Areas: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cloud':
        return <Cloud className="w-6 h-6 text-blue-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-purple-400" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-cyan-400" />;
      case 'LayoutGrid':
        return <LayoutGrid className="w-6 h-6 text-indigo-400" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-pink-400" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-emerald-400" />;
      default:
        return <Cpu className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="areas" className="py-24 relative bg-[#090d16] border-y border-slate-800/60 overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300 mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Especialidades & Engenharia</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight mb-6">
            Áreas de <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">Atuação</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Nossa expertise abrange o ciclo completo de concepção, engenharia e escala de produtos digitais robustos.
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AREAS_DATA.map((area) => (
            <div 
              key={area.id}
              className="glass-panel rounded-2xl p-6 glass-panel-hover flex flex-col justify-between group border border-slate-800"
            >
              <div>
                {/* Icon & Metric */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-blue-500/40 transition-colors">
                    {getIcon(area.iconName)}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
                    {area.metrics}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-heading text-white mb-2.5 group-hover:text-blue-300 transition-colors">
                  {area.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {area.description}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                {area.tags.map((tag, idx) => (
                  <span 
                    key={idx}
                    className="text-[10px] font-mono text-slate-300 bg-slate-900 px-2 py-0.5 rounded border border-slate-800"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
