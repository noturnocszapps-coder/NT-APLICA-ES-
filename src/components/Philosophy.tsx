import React from 'react';

export const Philosophy: React.FC = () => {
  return (
    <section className="py-28 sm:py-36 relative bg-[#050505] border-t border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Subtle Signature Line Accent */}
        <div className="w-12 h-0.5 bg-purple-500 mx-auto" />

        {/* High impact pure typography */}
        <blockquote className="text-3xl sm:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight leading-[1.15] max-w-4xl mx-auto">
          "Não desenvolvemos apenas sistemas. <br className="hidden sm:inline" />
          Construímos produtos digitais."
        </blockquote>

        <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto font-normal leading-relaxed">
          Cada projeto da NT Aplicações nasce da identificação de um problema real e evolui através de tecnologia, experiência do usuário e autonomia.
        </p>

      </div>
    </section>
  );
};
