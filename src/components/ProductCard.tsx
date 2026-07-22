import React from 'react';
import { Product } from '../types';
import { ProductMockup } from './ProductMockup';
import { ExternalLink, Info, ArrowUpRight, ShieldAlert, Sparkles } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelectProduct }) => {
  return (
    <div className={`glass-panel rounded-2xl overflow-hidden p-6 flex flex-col justify-between transition-all duration-300 relative group border ${product.themeColor.border} hover:border-blue-500/50 hover:shadow-2xl hover:-translate-y-1`}>
      
      {/* Top Ambient Glow Gradient */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${product.themeColor.gradient} opacity-80 group-hover:opacity-100 transition-opacity`} />
      
      <div>
        {/* Category & Status Bar */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-[11px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-700/80 text-blue-300">
            {product.category}
          </span>
          {product.badge && (
            <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border ${
              product.isAvailable 
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
                : 'bg-amber-500/10 border-amber-500/30 text-amber-300'
            }`}>
              {product.badge}
            </span>
          )}
        </div>

        {/* Product Name */}
        <h3 className="text-2xl font-extrabold font-heading text-white mb-2.5 flex items-center justify-between group-hover:text-blue-300 transition-colors">
          <span>{product.name}</span>
        </h3>

        {/* Product Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-5 line-clamp-3">
          {product.description}
        </p>

        {/* Visual Mockup Container */}
        <div 
          onClick={() => onSelectProduct(product)}
          className="mb-6 cursor-pointer rounded-xl overflow-hidden border border-slate-800 bg-[#06080e] p-1 transition-all group-hover:border-slate-700 shadow-lg"
          title="Clique para expandir os detalhes do produto"
        >
          <ProductMockup productId={product.id} />
        </div>

        {/* Special Disclaimer Note if present */}
        {product.disclaimer && (
          <div className="mb-4 text-[11px] text-amber-300/80 bg-amber-950/20 border border-amber-500/20 p-2 rounded-lg flex items-start gap-1.5 leading-snug">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
            <span>Ferramenta proprietária NT Aplicações de inteligência empresarial.</span>
          </div>
        )}
      </div>

      {/* Card Actions */}
      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
        <button
          onClick={() => onSelectProduct(product)}
          className="text-xs font-medium text-slate-400 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
        >
          <Info className="w-3.5 h-3.5 text-blue-400" />
          <span>Detalhes</span>
        </button>

        {product.url && product.isAvailable ? (
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 rounded-lg bg-gradient-to-r ${product.themeColor.gradient} text-white font-semibold text-xs shadow-md hover:brightness-110 transition-all flex items-center gap-1.5 cursor-pointer`}
          >
            <span>{product.ctaText || 'Acessar'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : (
          <button
            onClick={() => onSelectProduct(product)}
            className="px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 text-xs font-medium hover:text-slate-200 transition-colors cursor-pointer"
          >
            Em Breve
          </button>
        )}
      </div>

    </div>
  );
};
