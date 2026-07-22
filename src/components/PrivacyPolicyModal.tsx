import React from 'react';
import { COMPANY_CONFIG } from '../data/company';
import { X, Shield } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-xl bg-[#0c0f17] border border-zinc-800 rounded-xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-zinc-800/80 flex items-center justify-between bg-[#0a0c12]">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-zinc-400" />
            <h3 className="text-base font-bold font-heading text-white">Política de Privacidade</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Policy Content */}
        <div className="p-6 space-y-4 text-xs text-zinc-300 leading-relaxed max-h-[60vh] overflow-y-auto font-sans">
          <p className="text-[10px] text-zinc-400 font-mono uppercase">
            Última atualização: {new Date().toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}
          </p>

          <section className="space-y-1.5">
            <h4 className="text-sm font-bold text-white">1. Compromisso NT Aplicações</h4>
            <p>
              A <strong className="text-white">NT Aplicações</strong> valoriza a transparência e a proteção dos dados de todos os usuários que navegam em nosso site e utilizam nossas soluções digitais.
            </p>
          </section>

          <section className="space-y-1.5">
            <h4 className="text-sm font-bold text-white">2. Coleta e Uso de Dados</h4>
            <p>
              As informações fornecidas nos formulários (como nome, e-mail ou WhatsApp) são utilizadas exclusivamente para responder a solicitações de contato e apresentar nossas soluções.
            </p>
          </section>

          <section className="space-y-1.5">
            <h4 className="text-sm font-bold text-white">3. Conformidade com a LGPD</h4>
            <p>
              Tratamos dados em estrita conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018). Não comercializamos dados com terceiros.
            </p>
          </section>

          <section className="space-y-1.5">
            <h4 className="text-sm font-bold text-white">4. Contato</h4>
            <p>
              Para dúvidas relacionadas à privacidade, entre em contato pelo e-mail: <span className="text-zinc-200 font-mono">{COMPANY_CONFIG.contactEmail}</span>.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-zinc-800/80 bg-[#0a0c12] flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-zinc-100 text-zinc-950 font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            Compreendido
          </button>
        </div>
      </div>
    </div>
  );
};
