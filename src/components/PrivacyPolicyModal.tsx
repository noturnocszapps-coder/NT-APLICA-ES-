import React from 'react';
import { COMPANY_CONFIG } from '../data/company';
import { X, Shield, Lock, FileText, CheckCircle2 } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-[#0c101c] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/60">
          <div className="flex items-center gap-2.5">
            <Shield className="w-5 h-5 text-blue-400" />
            <h3 className="text-xl font-bold font-heading text-white">Política de Privacidade</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Policy Content */}
        <div className="p-6 sm:p-8 space-y-5 text-sm text-slate-300 leading-relaxed max-h-[60vh] overflow-y-auto font-sans">
          <p className="text-xs text-slate-400 font-mono">
            Última atualização: {new Date().toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}
          </p>

          <section className="space-y-2">
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <Lock className="w-4 h-4 text-blue-400" /> 1. Compromisso NT Aplicações
            </h4>
            <p>
              A <strong className="text-white">NT Aplicações</strong> valoriza a transparência, privacidade e proteção dos dados de todos os usuários que navegam em nosso site e interagem com nossas soluções digitais.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-indigo-400" /> 2. Coleta e Uso de Dados
            </h4>
            <p>
              As informações fornecidas em nossos formulários institucionais (como nome, empresa, e-mail e WhatsApp) são utilizadas exclusivamente para responder a solicitações de contato, apresentar propostas de negócios e fornecer suporte às nossas plataformas.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 3. Conformidade com a LGPD
            </h4>
            <p>
              Tratamos dados pessoais em estrita conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018). Não vendemos, alugamos ou compartilhamos dados pessoais com terceiros para fins publicitários não autorizados.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="text-base font-bold text-white">4. Contato do Encarregado</h4>
            <p>
              Para dúvidas relacionadas à privacidade e proteção de dados, entre em contato através do e-mail: <span className="text-blue-300 font-mono">{COMPANY_CONFIG.contactEmail}</span>.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/80 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors cursor-pointer"
          >
            Compreendido
          </button>
        </div>
      </div>
    </div>
  );
};
