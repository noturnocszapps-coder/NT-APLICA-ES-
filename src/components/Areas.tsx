import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface AreaItem {
  number: string;
  title: string;
  description: string;
  hasAiLink?: boolean;
}

interface AreasProps {
  onNavigateRoute?: (route: string) => void;
}

export const Areas: React.FC<AreasProps> = ({ onNavigateRoute }) => {
  const areasList: AreaItem[] = [
    {
      number: '01',
      title: 'Entretenimento e descoberta',
      description: 'Plataformas para localização de eventos, curadoria local e engajamento cultural.'
    },
    {
      number: '02',
      title: 'Tecnologia para negócios',
      description: 'Soluções de gestão operacional, controle de acesso VIP, reservas e CRM.'
    },
    {
      number: '03',
      title: 'Mobilidade',
      description: 'Ferramentas de controle de custos, rentabilidade e metas para motoristas de aplicativos.'
    },
    {
      number: '04',
      title: 'Inteligência empresarial',
      description: 'Engines de diagnóstico financeiro e simulação de impactos de Split Payment e reforma tributária.',
      hasAiLink: true
    },
    {
      number: '05',
      title: 'Informação e cidades',
      description: 'Centralizadores de informação regional e serviços para aproximar população e município.'
    },
    {
      number: '06',
      title: 'Experiências',
      description: 'Produção executiva, resgate histórico e acervos digitais de marcos regionais.'
    }
  ];

  return (
    <section id="areas" className="py-24 sm:py-32 relative bg-[#050505] border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-left max-w-2xl mb-12 sm:mb-16">
          <div className="text-xs font-mono tracking-widest text-zinc-400 uppercase mb-3">
            ÁREAS DE ATUAÇÃO
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
            Segmentos onde aplicamos nossas plataformas.
          </h2>
        </div>

        {/* Minimalist Editorial List */}
        <div className="divide-y divide-zinc-800/80 border-y border-zinc-800/80">
          {areasList.map((item) => (
            <div 
              key={item.number}
              className="py-6 sm:py-8 group hover:bg-zinc-900/40 transition-colors px-3 sm:px-6 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="flex items-baseline gap-4 sm:gap-6">
                <span className="text-sm font-mono text-purple-400 font-bold shrink-0">
                  {item.number}
                </span>
                <span className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-purple-300 transition-colors">
                  {item.title}
                </span>
              </div>

              <div className="text-xs sm:text-sm text-zinc-400 md:max-w-md md:text-right font-normal space-y-2">
                <p>{item.description}</p>
                {item.hasAiLink && (
                  <div className="pt-1">
                    <a
                      href="/desenvolvimento-com-inteligencia-artificial"
                      onClick={(e) => {
                        e.preventDefault();
                        if (onNavigateRoute) {
                          onNavigateRoute('/desenvolvimento-com-inteligencia-artificial');
                        }
                      }}
                      className="text-xs font-mono text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center gap-1 cursor-pointer font-medium"
                    >
                      <span>Desenvolvimento com Inteligência Artificial</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
