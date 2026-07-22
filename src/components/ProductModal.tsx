import React from 'react';
import { Product } from '../types';
import { ProductMockup } from './ProductMockup';
import { X, ExternalLink, ShieldAlert, CheckCircle2, Sparkles, Layers, ArrowRight } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-[#0c101c] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ambient Glow */}
        <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${product.themeColor.gradient}`} />
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          
          {/* Badge & Category */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/30 text-blue-300 uppercase tracking-wider">
              {product.category}
            </span>
            {product.badge && (
              <span className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-md border ${
                product.isAvailable 
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
                  : 'bg-amber-500/10 border-amber-500/30 text-amber-300'
              }`}>
                {product.badge}
              </span>
            )}
          </div>

          {/* Product Title */}
          <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-white mb-4 flex items-center gap-3">
            {product.name}
          </h3>

          {/* Product Description */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
            {product.description}
          </p>

          {/* Mockup Preview Area */}
          <div className="mb-6 rounded-xl overflow-hidden border border-slate-800 bg-[#080a10] p-1 shadow-inner">
            <ProductMockup productId={product.id} />
          </div>

          {/* Features List */}
          <div className="mb-6">
            <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>Destaques & Funcionalidades</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer (Special note for Split Ready AI or general products) */}
          {product.disclaimer && (
            <div className="mb-6 p-3.5 rounded-xl bg-amber-950/30 border border-amber-500/30 flex items-start gap-3 text-xs text-amber-200/90 leading-relaxed">
              <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>{product.disclaimer}</div>
            </div>
          )}

          {/* Action Footer */}
          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400 font-mono">
              NT Aplicações • Produto Oficial
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-sm font-medium w-full sm:w-auto transition-colors cursor-pointer"
              >
                Fechar
              </button>

              {product.url && product.isAvailable ? (
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-2.5 rounded-xl bg-gradient-to-r ${product.themeColor.gradient} text-white font-semibold text-sm shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer`}
                >
                  <span>{product.ctaText || 'Acessar Produto'}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <button
                  disabled
                  className="px-6 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-400 font-medium text-sm w-full sm:w-auto cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <span>Acesso em Breve</span>
                </button>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
