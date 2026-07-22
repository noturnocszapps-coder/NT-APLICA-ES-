import React, { useState } from 'react';
import { COMPANY_CONFIG } from '../data/company';
import { Send, CheckCircle2, MessageCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactInfo: '', // E-mail ou WhatsApp
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      formData.message || COMPANY_CONFIG.whatsappDefaultMessage
    );
    const url = `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${text}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-[#07090e] border-t border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-left space-y-3 mb-10 sm:mb-12">
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

        {/* Clean Form Card */}
        <div className="p-6 sm:p-10 rounded-2xl bg-[#0d1017] border border-zinc-800/90 space-y-6">
          
          {submitted ? (
            <div className="py-10 text-center space-y-4 animate-fade-in">
              <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-200 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Mensagem Enviada!</h3>
              <p className="text-zinc-400 text-xs sm:text-sm max-w-sm mx-auto">
                Agradecemos seu contato. Responderemos em breve.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', contactInfo: '', message: '' });
                }}
                className="mt-2 px-4 py-2 rounded-lg bg-zinc-800 text-zinc-300 hover:text-white text-xs font-medium cursor-pointer"
              >
                Enviar nova mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
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
                  disabled={isSubmitting}
                  className="px-6 py-3 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Enviando...' : 'Enviar mensagem'}</span>
                </button>

                {COMPANY_CONFIG.whatsappNumber && (
                  <button
                    type="button"
                    onClick={openWhatsApp}
                    className="text-xs text-zinc-400 hover:text-zinc-200 transition-colors inline-flex items-center justify-center gap-1.5 cursor-pointer py-2"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Prefer conversa direta via WhatsApp</span>
                  </button>
                )}
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
