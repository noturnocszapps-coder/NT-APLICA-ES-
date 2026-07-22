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
    <section id="contact" className="py-24 sm:py-32 relative bg-[#050505] border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Desktop Split Layout (Left: Editorial & Cards, Right: Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Header & Direct Contacts */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-3">
              <div className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
                CONTATO DIRETO
              </div>

              <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight leading-tight">
                Fale com a NT.
              </h2>

              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Entre em contato para conhecer nossas plataformas, propor parcerias ou conversar sobre desenvolvimento de software.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-2">
              
              {/* E-mail Card */}
              <a
                href={`mailto:${COMPANY_CONFIG.contactEmail}`}
                className="p-5 rounded-2xl bg-[#09090b] border border-zinc-800/90 hover:border-purple-500/40 transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-purple-400 group-hover:text-purple-300 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase block">E-mail oficial</span>
                    <span className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
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
                className="p-5 rounded-2xl bg-[#09090b] border border-zinc-800/90 hover:border-emerald-500/40 transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-950/40 border border-emerald-900/40 flex items-center justify-center text-emerald-400 group-hover:text-emerald-300 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 uppercase block">WhatsApp direto</span>
                    <span className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                      {COMPANY_CONFIG.whatsappDisplay}
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-colors shrink-0" />
              </a>

            </div>
          </div>

          {/* Right Side: Clean Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-[#09090b] border border-zinc-800/90 space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-bold font-heading text-white">
                  Envie uma mensagem
                </h3>
                <p className="text-xs text-zinc-400">
                  Preencha os dados para iniciar o atendimento diretamente via WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {formError && (
                  <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-900/50 text-red-300 text-xs font-medium">
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
                      className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-purple-500 transition-colors"
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
                      placeholder="seu@email.com ou (18) 90000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-purple-500 transition-colors"
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
                    placeholder="Como podemos ajudar?"
                    className="w-full p-4 rounded-xl bg-[#050505] border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  />
                </div>

                {/* Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="px-6 py-3.5 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Enviar no WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleDirectWhatsApp}
                    className="text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-colors inline-flex items-center justify-center gap-1.5 cursor-pointer py-2"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Abrir WhatsApp direto</span>
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

