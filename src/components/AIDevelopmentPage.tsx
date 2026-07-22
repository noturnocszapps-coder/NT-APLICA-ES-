import React, { useEffect, useState } from 'react';
import { ArrowLeft, ExternalLink, ArrowUpRight, ChevronDown, CheckCircle2, Sparkles, Shield, Cpu, Layers } from 'lucide-react';
import { Contact } from './Contact';

interface AIDevelopmentPageProps {
  onNavigateHome: (sectionId?: string) => void;
}

export const AIDevelopmentPage: React.FC<AIDevelopmentPageProps> = ({ onNavigateHome }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Set page meta tags dynamically for SEO on load
  useEffect(() => {
    document.title = "Desenvolvimento com Inteligência Artificial | NT Aplicações";
    
    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'A NT Aplicações desenvolve produtos digitais, sistemas e plataformas com inteligência artificial aplicada a problemas reais de negócios e tecnologia.');
    }

    // Update Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://www.ntaplicacoes.com.br/desenvolvimento-com-inteligencia-artificial');
    }

    // Update OG Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', 'Desenvolvimento com Inteligência Artificial | NT Aplicações');

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', 'A NT Aplicações desenvolve produtos digitais, sistemas e plataformas com inteligência artificial aplicada a problemas reais de negócios e tecnologia.');

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', 'https://www.ntaplicacoes.com.br/desenvolvimento-com-inteligencia-artificial');

    // Update Twitter Tags
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', 'Desenvolvimento com Inteligência Artificial | NT Aplicações');

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', 'A NT Aplicações desenvolve produtos digitais, sistemas e plataformas com inteligência artificial aplicada a problemas reais de negócios e tecnologia.');

    // Inject JSON-LD Schema
    const schemaScript = document.createElement('script');
    schemaScript.id = 'jsonld-ai-page';
    schemaScript.type = 'application/ld+json';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.ntaplicacoes.com.br/desenvolvimento-com-inteligencia-artificial#webpage",
          "url": "https://www.ntaplicacoes.com.br/desenvolvimento-com-inteligencia-artificial",
          "name": "Desenvolvimento com Inteligência Artificial | NT Aplicações",
          "description": "A NT Aplicações desenvolve produtos digitais, sistemas e plataformas com inteligência artificial aplicada a problemas reais de negócios e tecnologia.",
          "isPartOf": {
            "@id": "https://www.ntaplicacoes.com.br/#website"
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Início",
                "item": "https://www.ntaplicacoes.com.br/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Desenvolvimento com Inteligência Artificial",
                "item": "https://www.ntaplicacoes.com.br/desenvolvimento-com-inteligencia-artificial"
              }
            ]
          }
        },
        {
          "@type": "FAQPage",
          "@id": "https://www.ntaplicacoes.com.br/desenvolvimento-com-inteligencia-artificial#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "O que é desenvolvimento com inteligência artificial?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "É a engenharia e criação de sistemas, softwares e plataformas que integram recursos de inteligência artificial, como análise preditiva, interpretação de dados e processamento de linguagem natural, para solucionar demandas reais e complexas."
              }
            },
            {
              "@type": "Question",
              "name": "Como a inteligência artificial pode ser integrada a um sistema?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A integração é realizada por meio de APIs seguras, modelos especializados e pipelines de processamento server-side, garantindo isolamento de regras de negócio, alta performance e estrita privacidade."
              }
            },
            {
              "@type": "Question",
              "name": "É possível adicionar inteligência artificial a um sistema existente?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim. É possível expandir plataformas existentes adicionando módulos inteligentes para automação de tarefas, busca semântica, geração de diagnósticos e assistentes operacionais."
              }
            },
            {
              "@type": "Question",
              "name": "Todo projeto precisa utilizar inteligência artificial?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Não. Para a NT Aplicações, a tecnologia deve servir ao problema. Se a necessidade for resolvida de forma mais simples e robusta com engenharia tradicional, priorizamos a eficiência e a clareza sem complexidade desnecessária."
              }
            },
            {
              "@type": "Question",
              "name": "A NT Aplicações desenvolve produtos personalizados com IA?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A NT Aplicações avalia projetos e oportunidades de desenvolvimento de acordo com o problema, o escopo e a viabilidade tecnológica. Entre em contato para apresentar sua necessidade."
              }
            }
          ]
        }
      ]
    });
    document.head.appendChild(schemaScript);

    window.scrollTo(0, 0);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.getElementById('jsonld-ai-page');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const handleScrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqItems = [
    {
      question: "O que é desenvolvimento com inteligência artificial?",
      answer: "É a engenharia e criação de sistemas, softwares e plataformas que integram recursos de inteligência artificial, como análise preditiva, interpretação de dados e processamento de linguagem natural, para solucionar demandas reais e complexas dentro da arquitetura de uma aplicação."
    },
    {
      question: "Como a inteligência artificial pode ser integrada a um sistema?",
      answer: "A integração é realizada por meio de APIs seguras, modelos especializados e pipelines de processamento server-side, garantindo isolamento de regras de negócio, alta performance e estrita privacidade dos dados sem expor credenciais."
    },
    {
      question: "É possível adicionar inteligência artificial a um sistema existente?",
      answer: "Sim. É possível expandir plataformas legadas adicionando módulos inteligentes para automação de tarefas, busca semântica em bases de conhecimento, geração de diagnósticos e assistentes de apoio operacional."
    },
    {
      question: "Todo projeto precisa utilizar inteligência artificial?",
      answer: "Não. Para a NT Aplicações, a tecnologia deve servir ao problema. Se a necessidade for resolvida de forma mais simples e robusta com engenharia tradicional, priorizamos a eficiência e a clareza sem adicionar complexidade desnecessária."
    },
    {
      question: "A NT Aplicações desenvolve produtos personalizados com IA?",
      answer: "A NT Aplicações avalia projetos e oportunidades de desenvolvimento de acordo com o problema, o escopo e a viabilidade tecnológica. Entre em contato para apresentar sua necessidade."
    }
  ];

  const capabilities = [
    {
      number: "01",
      title: "Sistemas e plataformas inteligentes",
      description: "Desenvolvimento de aplicações capazes de incorporar recursos inteligentes dentro de fluxos reais de negócio, conectando bancos de dados, APIs e pipelines operacionais."
    },
    {
      number: "02",
      title: "Assistentes e experiências conversacionais",
      description: "Interfaces que utilizam linguagem natural para facilitar o acesso a informações, suporte técnico e execução de comandos complexos em sistemas corporativos."
    },
    {
      number: "03",
      title: "Análise e interpretação de informações",
      description: "Aplicação de inteligência artificial para organizar, interpretar e transformar dados não estruturados em informações estratégicas e diagnósticos acionáveis."
    },
    {
      number: "04",
      title: "Automação de processos",
      description: "Uso de tecnologia para reduzir tarefas repetitivas, otimizar a validação de documentos e melhorar a velocidade dos fluxos operacionais internos."
    },
    {
      number: "05",
      title: "Produtos digitais com IA integrada",
      description: "Criação de plataformas em que a inteligência artificial faz parte do core do produto e não apenas de uma funcionalidade isolada de fachada."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Entender o problema",
      description: "Mapeamento criterioso do desafio operacional ou de negócio antes de escolher qualquer ferramenta tecnológica."
    },
    {
      number: "02",
      title: "Definir onde a tecnologia gera valor",
      description: "Identificação do ponto exato onde a inteligência artificial ou a engenharia tradicional entregam o maior retorno."
    },
    {
      number: "03",
      title: "Projetar a experiência",
      description: "Desenho da arquitetura de informação, interfaces limpas e rotas de integração resilientes."
    },
    {
      number: "04",
      title: "Desenvolver e validar",
      description: "Implementação de código robusto, testes com dados reais e validação contínua dos resultados."
    },
    {
      number: "05",
      title: "Evoluir o produto",
      description: "Acompanhamento em produção, monitoramento de desempenho e ajustes para acompanhamento do crescimento."
    }
  ];

  return (
    <article className="pt-28 pb-16 sm:pt-36 sm:pb-24 bg-[#07090e] text-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">

        {/* Back Link Breadcrumb */}
        <div>
          <button
            onClick={() => onNavigateHome()}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors cursor-pointer bg-zinc-900/60 px-3.5 py-1.5 rounded-md border border-zinc-800"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar para a NT Aplicações</span>
          </button>
        </div>

        {/* HERO SECTION */}
        <section className="space-y-8 max-w-4xl text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/50 border border-purple-800/40 text-[11px] font-mono text-purple-300 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>TECNOLOGIA & INTELIGÊNCIA ARTIFICIAL</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight leading-[1.12]">
            Desenvolvimento com inteligência artificial para transformar ideias em produtos reais.
          </h1>

          <p className="text-zinc-300 text-base sm:text-xl leading-relaxed max-w-3xl">
            A NT Aplicações desenvolve produtos digitais, sistemas e plataformas utilizando tecnologia e inteligência artificial para criar soluções mais eficientes, inteligentes e escaláveis.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={handleScrollToContact}
              className="px-6 py-3.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-purple-950/40"
            >
              <span>Fale sobre seu projeto</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigateHome('ecosystem')}
              className="px-6 py-3.5 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-900/50 text-zinc-300 hover:text-white font-medium text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Conheça nossos produtos</span>
            </button>
          </div>
        </section>

        {/* SECTION 1: CONCEITO */}
        <section className="p-8 sm:p-12 rounded-2xl bg-[#0d1017] border border-zinc-800/80 space-y-6">
          <div className="text-xs font-mono uppercase tracking-widest text-purple-400">
            VISÃO E ABORDAGEM
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white tracking-tight">
            Inteligência artificial aplicada onde ela realmente faz sentido.
          </h2>

          <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed max-w-4xl">
            <p>
              Para a NT Aplicações, inteligência artificial é uma tecnologia aplicada à resolução de problemas. Ela pode fazer parte da experiência do usuário, da análise de informações, da automação de processos e da criação de novas formas de interação com produtos digitais.
            </p>
            <p className="text-zinc-400 text-sm">
              Não tratamos a inteligência artificial como uma tendência isolada ou mero artifício de comunicação. Cada implementação é orientada pela utilidade prática, robustez da arquitetura, segurança das informações e pelo valor tangível gerado para os usuários e para o negócio.
            </p>
          </div>
        </section>

        {/* SECTION 2: CAPACIDADES */}
        <section className="space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              O QUE PODEMOS CONSTRUIR
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
              O que podemos construir com inteligência artificial
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Desenvolvemos aplicações sob medida combinando engenharia de software tradicional com recursos inteligentes avançados.
            </p>
          </div>

          <div className="divide-y divide-zinc-800/80 border-y border-zinc-800/80">
            {capabilities.map((item) => (
              <div 
                key={item.number}
                className="py-8 px-2 sm:px-6 group hover:bg-zinc-900/40 transition-colors rounded-xl flex flex-col md:flex-row md:items-start justify-between gap-6"
              >
                <div className="flex items-start gap-4 md:w-1/2">
                  <span className="text-xs font-mono text-purple-400 shrink-0 mt-1">
                    {item.number}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="md:w-1/2 text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: PROCESSO */}
        <section className="space-y-12 bg-[#090b10] p-8 sm:p-12 rounded-2xl border border-zinc-800/80">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              METODOLOGIA
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
              Do problema ao produto.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              A inteligência artificial é escolhida quando realmente agrega valor técnico e estratégico ao projeto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step) => (
              <div 
                key={step.number}
                className="p-5 rounded-xl bg-[#0d1017] border border-zinc-800/60 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-xs font-mono text-purple-400 block font-bold">
                    {step.number}
                  </span>
                  <h3 className="text-base font-bold font-heading text-white">
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: PRODUTOS REAIS */}
        <section className="space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-purple-400">
              PROPOSIÇÃO PRÁTICA
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
              Inteligência aplicada a produtos reais.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Demonstramos nossa capacidade técnica desenvolvendo e operando plataformas próprias para o ecossistema NT Aplicações.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-2xl bg-[#0d1017] border border-zinc-800/90 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-blue-950/60 text-blue-300 border border-blue-800/50 text-[10px] font-mono uppercase tracking-wider">
                PRODUTO PROPRIETÁRIO COM INTELIGÊNCIA APLICADA
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                Split Ready AI
              </h3>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Ferramenta de diagnóstico e inteligência financeira criada para auxiliar empresas a compreenderem sua capacidade e se prepararem para os impactos do Split Payment e da nova realidade tributária.
              </p>

              <div className="pt-2">
                <a
                  href="https://contabil.ntaplicacoes.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                >
                  <span>Acessar o Split Ready AI</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 rounded-xl bg-[#07090e] border border-zinc-800 space-y-3 text-xs text-zinc-400">
              <div className="text-white font-bold font-heading text-sm">
                Ecossistema NT Aplicações
              </div>
              <p className="leading-relaxed">
                Nossos outros produtos — como Roxou, Partner Pro e Roxou Transporte — exemplificam nossa capacidade de construir plataformas escaláveis com alta densidade de engenharia.
              </p>
              <button
                onClick={() => onNavigateHome('ecosystem')}
                className="text-purple-400 hover:text-purple-300 font-mono inline-flex items-center gap-1 cursor-pointer pt-2"
              >
                <span>Ver ecossistema completo</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 5: FAQ PARA SEO */}
        <section className="space-y-8 max-w-4xl">
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              PERGUNTAS FREQUENTES
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white tracking-tight">
              Perguntas Frequentes sobre Desenvolvimento com IA
            </h2>
            <p className="text-zinc-400 text-sm">
              Esclarecimentos sobre como trabalhamos com tecnologia e inteligência artificial aplicada.
            </p>
          </div>

          <div className="space-y-3">
            {faqItems.map((faq, index) => (
              <div 
                key={index} 
                className="rounded-xl border border-zinc-800/80 bg-[#0d1017] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={openFaqIndex === index}
                >
                  <span className="font-heading font-semibold text-sm sm:text-base text-white">
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform duration-200 ${openFaqIndex === index ? 'rotate-180 text-purple-400' : ''}`} />
                </button>

                {openFaqIndex === index && (
                  <div className="px-5 pb-6 pt-0 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/40">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: CONTATO */}
        <section id="contact">
          <Contact />
        </section>

      </div>
    </article>
  );
};
