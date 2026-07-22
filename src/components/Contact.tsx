import React, { useState } from 'react';
import { COMPANY_CONFIG } from '../data/company';
import { Send, MessageCircle, Mail, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactInfo: '', // E-mail ou WhatsApp
    message: ''
  });

  const [formError, setFormError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormError('');
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.contactInfo.trim() || !formData.message.trim()) {
      setFormError('Por favor, preencha todos os campos antes de enviar.');
      return;
    }

    const textToFormat = `Olá, vim pelo site da NT Aplicações.

Nome: ${formData.name.trim()}
Contato: ${formData.contactInfo.trim()}

Mensagem:
${formData.message.trim()}`;

    const encodedText = encodeURIComponent(textToFormat);
    const whatsappUrl = `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodedText}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(COMPANY_CONFIG.whatsappDefaultMessage);
    const url = `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${text}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-[#07090e] border-t border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Title */}
        <div className="text-left space-y-3">
          <div className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
            CONTATO
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
            Tem uma ideia ou quer falar com a NT?
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Entre em contato para conhecer nossos produtos, propor uma parceria ou conversar sobre novas oportunidades.
          </p>
        </div>

        {/* Visible Contacts Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* E-mail Card */}
          <a
            href={`mailto:${COMPANY_CONFIG.contactEmail}`}
            className="p-5 rounded-xl bg-[#0d1017] border border-zinc-800/90 hover:border-zinc-700 transition-colors flex items-center justify-between group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-purple-400 group-hover:text-purple-300 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-zinc-400 uppercase block">E-mail oficial</span>
                <span className="text-sm font-medium text-white group-hover:text-purple-300 transition-colors">
                  {COMPANY_CONFIG.contactEmail}
                </span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-colors shrink-0" />
          </a>

          {/* WhatsApp Card */}
          <a
            href={COMPANY_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl bg-[#0d1017] border border-zinc-800/90 hover:border-emerald-900/50 transition-colors flex items-center justify-between group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-emerald-950/40 border border-emerald-900/40 flex items-center justify-center text-emerald-400 group-hover:text-emerald-300 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-emerald-400 uppercase block">WhatsApp direto</span>
                <span className="text-sm font-medium text-white group-hover:text-emerald-300 transition-colors">
                  {COMPANY_CONFIG.whatsappDisplay}
                </span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-colors shrink-0" />
          </a>
        </div>

        {/* Clean Form Card */}
        <div className="p-6 sm:p-10 rounded-2xl bg-[#0d1017] border border-zinc-800/90 space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold font-heading text-white">
              Envie uma mensagem direta
            </h3>
            <p className="text-xs text-zinc-400">
              Preencha os campos abaixo para ser direcionado ao atendimento no WhatsApp com sua mensagem formatada.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {formError && (
              <div className="p-3 rounded-lg bg-red-950/40 border border-red-900/50 text-red-300 text-xs font-medium">
                {formError}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Nome */}
              <div>
                <label htmlFor="contact-name" className="block text-xs font-mono text-zinc-400 mb-1.5 uppercase">
                  Nome *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  className="w-full px-3.5 py-3 rounded-lg bg-[#07090e] border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-zinc-600 transition-colors"
                />
              </div>

              {/* E-mail ou WhatsApp */}
              <div>
                <label htmlFor="contact-info" className="block text-xs font-mono text-zinc-400 mb-1.5 uppercase">
                  E-mail ou WhatsApp *
                </label>
                <input
                  id="contact-info"
                  type="text"
                  name="contactInfo"
                  required
                  value={formData.contactInfo}
                  onChange={handleChange}
                  placeholder="seu@email.com ou (00) 00000-0000"
                  className="w-full px-3.5 py-3 rounded-lg bg-[#07090e] border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-zinc-600 transition-colors"
                />
              </div>
            </div>

            {/* Mensagem */}
            <div>
              <label htmlFor="contact-message" className="block text-xs font-mono text-zinc-400 mb-1.5 uppercase">
                Mensagem *
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Como podemos conversar?"
                className="w-full p-3.5 rounded-lg bg-[#07090e] border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-zinc-600 transition-colors resize-none"
              />
            </div>

            {/* Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Enviar mensagem</span>
              </button>

              <button
                type="button"
                onClick={handleDirectWhatsApp}
                className="text-xs text-zinc-400 hover:text-zinc-200 transition-colors inline-flex items-center justify-center gap-1.5 cursor-pointer py-2"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Iniciar conversa sem formulário</span>
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};

