import React from 'react';
import { Product } from '../types';
import { ProductScreenshot } from './ProductScreenshot';
import { X, ExternalLink, CheckCircle2, ShieldAlert } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-[#0c0f17] border border-zinc-800 rounded-xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Fechar modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Badge & Category */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
              {product.category}
            </span>
            {product.badge && (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-zinc-800 text-zinc-300 bg-zinc-900">
                {product.badge}
              </span>
            )}
          </div>

          {/* Product Title */}
          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
            {product.name}
          </h3>

          {/* Product Description */}
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            {product.description}
          </p>

          {/* Screenshot Preview */}
          <ProductScreenshot 
            productId={product.id}
            productName={product.name}
            category={product.category}
            screenshotUrl={product.screenshotUrl}
          />

          {/* Features List */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400">
              Funcionalidades & Atributos
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2.5 rounded bg-[#080a10] border border-zinc-800/80 text-xs text-zinc-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer if present */}
          {product.disclaimer && (
            <div className="p-3 rounded-lg bg-zinc-900/80 border border-zinc-800 flex items-start gap-2 text-xs text-zinc-400 leading-relaxed">
              <ShieldAlert className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
              <div>{product.disclaimer}</div>
            </div>
          )}

          {/* Action Footer */}
          <div className="pt-4 border-t border-zinc-800 flex items-center justify-between gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer"
            >
              Fechar
            </button>

            {product.url && product.isAvailable ? (
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>{product.ctaText || 'Acessar Produto'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="text-xs font-mono text-zinc-400">
                Acesso em desenvolvimento
              </span>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
