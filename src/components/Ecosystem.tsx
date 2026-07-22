import React, { useState } from 'react';
import { PRODUCTS_DATA } from '../data/products';
import { Product, ProductCategory } from '../types';
import { ProductCard } from './ProductCard';
import { ProductModal } from './ProductModal';
import { Layers, Sparkles, Filter, Grid } from 'lucide-react';

export const Ecosystem: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  const categories: { key: ProductCategory; label: string }[] = [
    { key: 'all', label: 'Todos os Produtos' },
    { key: 'Descoberta e entretenimento', label: 'Entretenimento' },
    { key: 'Tecnologia para negócios', label: 'Negócios' },
    { key: 'Mobilidade', label: 'Mobilidade' },
    { key: 'Inteligência empresarial', label: 'Inteligência' },
    { key: 'Informação e cidades', label: 'Cidades' },
    { key: 'Experiências e produção', label: 'Produções' },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter(p => p.category === selectedCategory);

  return (
    <section id="ecosystem" className="py-24 relative bg-[#080b11] overflow-hidden">
      
      {/* Background Lights */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300 mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Nosso Ecossistema</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight mb-6">
            Vitrine Central de <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
              Produtos Digitais NT
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Desenvolvemos plataformas autônomas e ecossistemas SaaS desenhados para resolver demandas específicas em diferentes mercados.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center mb-12 overflow-x-auto pb-3 scrollbar-none">
          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-3.5 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.key
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg shadow-blue-500/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onSelectProduct={(p) => setActiveModalProduct(p)} 
            />
          ))}
        </div>

        {/* Add Product Modular Notice / Future Architecture Structure */}
        <div className="mt-16 p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-400 font-mono">
            💡 Arquitetura modular: Novos produtos digitais criados pela <strong className="text-slate-200">NT Aplicações</strong> são integrados a este ecossistema central continuamente.
          </p>
        </div>

      </div>

      {/* Expanded Modal */}
      <ProductModal 
        product={activeModalProduct} 
        onClose={() => setActiveModalProduct(null)} 
      />
    </section>
  );
};
