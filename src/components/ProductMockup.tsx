import React from 'react';
import { 
  Sparkles, 
  MapPin, 
  QrCode, 
  CheckCircle2, 
  TrendingUp, 
  Car, 
  ShieldAlert, 
  Newspaper, 
  Calendar, 
  Users, 
  DollarSign, 
  Activity,
  ArrowUpRight,
  Zap
} from 'lucide-react';

interface ProductMockupProps {
  productId: string;
}

export const ProductMockup: React.FC<ProductMockupProps> = ({ productId }) => {
  switch (productId) {
    case 'roxou':
      return (
        <div className="relative w-full h-48 bg-[#0a0814] rounded-xl overflow-hidden border border-purple-500/20 p-3 font-sans select-none group-hover:border-purple-500/40 transition-colors">
          {/* Background Ambient Glow */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-600/30 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-pink-600/20 rounded-full blur-2xl pointer-events-none" />
          
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-2 border-b border-purple-900/30">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <span className="text-[11px] font-bold tracking-wider uppercase text-purple-300">Roxou App</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-purple-300/70 bg-purple-950/60 px-2 py-0.5 rounded-full border border-purple-500/20">
              <MapPin className="w-3 h-3 text-pink-400" />
              <span>Na sua cidade</span>
            </div>
          </div>

          {/* Body Content Mockup */}
          <div className="mt-2.5 space-y-2">
            {/* Live Event Card */}
            <div className="bg-purple-950/40 border border-purple-500/30 rounded-lg p-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-md bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold text-xs shadow-md">
                  RX
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Festival Gastronômico & Music</div>
                  <div className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
                    <Calendar className="w-2.5 h-2.5 text-pink-400" /> Hoje • 19:30 • Centro
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-medium bg-pink-500/20 text-pink-300 px-2 py-1 rounded border border-pink-500/30">
                Em Alta
              </span>
            </div>

            {/* Quick Filter Chips */}
            <div className="flex items-center gap-1.5 pt-0.5">
              <span className="text-[10px] bg-purple-600/30 text-purple-200 px-2 py-0.5 rounded-full border border-purple-500/30">
                🍸 Bares
              </span>
              <span className="text-[10px] bg-slate-800/80 text-slate-300 px-2 py-0.5 rounded-full border border-slate-700/50">
                🎵 Shows
              </span>
              <span className="text-[10px] bg-slate-800/80 text-slate-300 px-2 py-0.5 rounded-full border border-slate-700/50">
                🍕 Gastronomia
              </span>
            </div>
          </div>
        </div>
      );

    case 'roxou-partner-pro':
      return (
        <div className="relative w-full h-48 bg-[#080d18] rounded-xl overflow-hidden border border-cyan-500/20 p-3 font-sans select-none group-hover:border-cyan-500/40 transition-colors">
          <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <QrCode className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-[11px] font-bold text-slate-200 uppercase tracking-wide">Partner Pro Terminal</span>
            </div>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> Portaria Ativa
            </span>
          </div>

          {/* Dashboard Metrics */}
          <div className="mt-2.5 grid grid-cols-2 gap-2">
            <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-2">
              <div className="text-[10px] text-slate-400 flex items-center justify-between">
                <span>Check-ins Hoje</span>
                <Users className="w-3 h-3 text-cyan-400" />
              </div>
              <div className="text-base font-bold text-white mt-1">428 / 500</div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full mt-1.5 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-cyan-400 h-full w-[85%]" />
              </div>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-2">
              <div className="text-[10px] text-slate-400 flex items-center justify-between">
                <span>Última Validação</span>
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              </div>
              <div className="text-xs font-semibold text-emerald-300 mt-1 truncate">
                VIP #1092 • Confirmado
              </div>
              <div className="text-[9px] text-slate-400 mt-0.5">Há 12 segundos</div>
            </div>
          </div>

          {/* Action strip */}
          <div className="mt-2 bg-cyan-950/40 border border-cyan-500/30 rounded-lg p-2 flex items-center justify-between">
            <span className="text-[10px] text-cyan-200">Scanner QR Code pronto para uso</span>
            <span className="text-[10px] bg-cyan-500 text-slate-950 font-bold px-2 py-0.5 rounded shadow">Validar</span>
          </div>
        </div>
      );

    case 'roxou-motorista':
      return (
        <div className="relative w-full h-48 bg-[#0d0f14] rounded-xl overflow-hidden border border-amber-500/20 p-3 font-sans select-none group-hover:border-amber-500/40 transition-colors">
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />

          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-1.5">
              <Car className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-[11px] font-bold text-slate-200">Roxou Motorista</span>
            </div>
            <span className="text-[10px] bg-amber-500/10 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full">
              Meta Diária
            </span>
          </div>

          {/* Main Profit Stat */}
          <div className="mt-2.5 flex items-center justify-between bg-slate-900/90 border border-amber-500/20 rounded-lg p-2.5">
            <div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">Lucro Líquido Hoje</div>
              <div className="text-lg font-bold text-white font-mono flex items-center gap-1">
                R$ 384,50 <span className="text-[10px] font-sans font-normal text-emerald-400 flex items-center">+18%</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[10px] text-slate-400">14 Corridas</div>
              <div className="text-[11px] font-semibold text-amber-300 mt-0.5">R$ 27,40/hr</div>
            </div>
          </div>

          {/* Fuel & Expenses bar */}
          <div className="mt-2 grid grid-cols-2 gap-2 text-[10px]">
            <div className="bg-slate-900/60 p-1.5 rounded border border-slate-800 flex items-center justify-between">
              <span className="text-slate-400">Combustível:</span>
              <span className="text-rose-400 font-mono font-medium">R$ 72,00</span>
            </div>
            <div className="bg-slate-900/60 p-1.5 rounded border border-slate-800 flex items-center justify-between">
              <span className="text-slate-400">Rentabilidade:</span>
              <span className="text-emerald-400 font-mono font-medium">84.2%</span>
            </div>
          </div>
        </div>
      );

    case 'split-ready-ai':
      return (
        <div className="relative w-full h-48 bg-[#070d19] rounded-xl overflow-hidden border border-blue-500/20 p-3 font-sans select-none group-hover:border-blue-500/40 transition-colors">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-20 bg-blue-500/10 blur-2xl pointer-events-none" />

          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-[11px] font-bold text-slate-200">Split Ready AI</span>
            </div>
            <span className="text-[10px] bg-blue-500/20 text-blue-300 border border-blue-500/30 px-2 py-0.5 rounded-full font-mono">
              IA Diagnostic Engine
            </span>
          </div>

          {/* Simulator Panel */}
          <div className="mt-2.5 space-y-2">
            <div className="bg-slate-900/90 border border-blue-500/30 rounded-lg p-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-slate-400">Índice de Prontidão Tributária</span>
                <span className="text-xs font-bold text-emerald-400 font-mono">92/100 • Ótimo</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full mt-1.5 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-emerald-400 h-full w-[92%]" />
              </div>
            </div>

            <div className="bg-blue-950/40 border border-blue-800/40 rounded-lg p-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[10px] text-slate-200">Simulador de Retenção e Split Payment</span>
              </div>
              <ArrowUpRight className="w-3 h-3 text-blue-400" />
            </div>
          </div>
        </div>
      );

    case 'melhora-prudente':
      return (
        <div className="relative w-full h-48 bg-[#090f1a] rounded-xl overflow-hidden border border-sky-500/20 p-3 font-sans select-none group-hover:border-sky-500/40 transition-colors">
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-1.5">
              <Newspaper className="w-3.5 h-3.5 text-sky-400" />
              <span className="text-[11px] font-bold text-slate-200">Melhora Prudente</span>
            </div>
            <span className="text-[10px] bg-sky-500/10 text-sky-300 border border-sky-500/30 px-2 py-0.5 rounded-full">
              Portal Regional
            </span>
          </div>

          <div className="mt-2.5 space-y-2">
            <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-2">
              <div className="flex items-center gap-2">
                <span className="text-[9px] bg-sky-500/20 text-sky-300 px-1.5 py-0.5 rounded font-bold uppercase">Cidade</span>
                <span className="text-[9px] text-slate-400">Notícia Atualizada</span>
              </div>
              <div className="text-xs font-semibold text-slate-100 mt-1 line-clamp-1">
                Inovações urbanas e melhorias regionais em destaque
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="bg-slate-900/60 border border-slate-800 rounded p-2 text-[10px]">
                <div className="text-sky-400 font-bold">Iniciativas</div>
                <div className="text-slate-400 mt-0.5">Informação direta</div>
              </div>
              <div className="bg-slate-900/60 border border-slate-800 rounded p-2 text-[10px]">
                <div className="text-cyan-400 font-bold">População</div>
                <div className="text-slate-400 mt-0.5">Engajamento local</div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'prudente-em-foco':
      return (
        <div className="relative w-full h-48 bg-[#120e1a] rounded-xl overflow-hidden border border-yellow-500/20 p-3 font-sans select-none group-hover:border-yellow-500/40 transition-colors">
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 blur-2xl pointer-events-none" />

          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-yellow-400" />
              <span className="text-[11px] font-bold text-slate-200">Prudente em Foco</span>
            </div>
            <span className="text-[10px] bg-yellow-500/10 text-yellow-300 border border-yellow-500/30 px-2 py-0.5 rounded-full">
              Acervo & Produções
            </span>
          </div>

          <div className="mt-2.5 space-y-2">
            <div className="bg-gradient-to-r from-yellow-950/40 to-purple-950/40 border border-yellow-500/30 rounded-lg p-2.5">
              <div className="text-xs font-bold text-yellow-200">Memória & Novas Experiências</div>
              <div className="text-[10px] text-slate-300 mt-1">
                Produção executiva de shows, festivais e resgate histórico regional.
              </div>
            </div>

            <div className="flex items-center gap-2 text-[10px]">
              <span className="bg-purple-900/40 text-purple-300 px-2 py-1 rounded border border-purple-500/30">
                🎭 Festivais
              </span>
              <span className="bg-yellow-900/40 text-yellow-300 px-2 py-1 rounded border border-yellow-500/30">
                📸 Acervo Histórico
              </span>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};
