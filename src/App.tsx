import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Ecosystem } from './components/Ecosystem';
import { Areas } from './components/Areas';
import { Philosophy } from './components/Philosophy';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { AIDevelopmentPage } from './components/AIDevelopmentPage';

export default function App() {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname.replace(/\/$/, '') || '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/\/$/, '') || '/';
      setCurrentPath(path);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Reset Home Head tags when on Home
  useEffect(() => {
    if (currentPath === '/') {
      document.title = "NT Aplicações | Tecnologia e Produtos Digitais";
      
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 'A NT Aplicações desenvolve e opera produtos digitais, plataformas web e soluções de tecnologia para negócios, mobilidade, entretenimento e informação.');
      }

      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', 'https://www.ntaplicacoes.com.br/');
      }

      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', 'NT Aplicações | Tecnologia e Produtos Digitais');

      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', 'A NT Aplicações desenvolve e opera produtos digitais, plataformas web e soluções de tecnologia para negócios, mobilidade, entretenimento e informação.');

      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.setAttribute('content', 'https://www.ntaplicacoes.com.br/');

      const twTitle = document.querySelector('meta[name="twitter:title"]');
      if (twTitle) twTitle.setAttribute('content', 'NT Aplicações | Tecnologia e Produtos Digitais');

      const twDesc = document.querySelector('meta[name="twitter:description"]');
      if (twDesc) twDesc.setAttribute('content', 'A NT Aplicações desenvolve e opera produtos digitais, plataformas web e soluções de tecnologia para negócios, mobilidade, entretenimento e informação.');
    }
  }, [currentPath]);

  const handleNavigateRoute = (route: string) => {
    const normalizedRoute = route.replace(/\/$/, '') || '/';
    window.history.pushState({}, '', normalizedRoute);
    setCurrentPath(normalizedRoute);
    window.scrollTo(0, 0);
  };

  const handleNavigateSection = (sectionId: string) => {
    if (currentPath !== '/') {
      window.history.pushState({}, '', '/');
      setCurrentPath('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo(0, 0);
        }
      }, 50);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isAiPage = currentPath === '/desenvolvimento-com-inteligencia-artificial';

  return (
    <div className="min-h-screen bg-[#07090e] text-zinc-100 flex flex-col font-sans selection:bg-purple-500/20 selection:text-purple-200">
      {/* Header */}
      <Header 
        onNavigate={handleNavigateSection} 
        onNavigateRoute={handleNavigateRoute}
        currentPath={currentPath}
      />

      {/* Main Content */}
      <main className="flex-grow">
        {isAiPage ? (
          <AIDevelopmentPage onNavigateHome={(sectionId) => {
            if (sectionId) {
              handleNavigateSection(sectionId);
            } else {
              handleNavigateRoute('/');
            }
          }} />
        ) : (
          <>
            <Hero onNavigate={handleNavigateSection} />
            <Ecosystem />
            <About />
            <Areas onNavigateRoute={handleNavigateRoute} />
            <Philosophy />
            <Contact />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer 
        onNavigate={handleNavigateSection} 
        onNavigateRoute={handleNavigateRoute}
        onOpenPrivacy={() => setPrivacyModalOpen(true)} 
      />

      {/* Privacy Policy Overlay */}
      <PrivacyPolicyModal 
        isOpen={privacyModalOpen} 
        onClose={() => setPrivacyModalOpen(false)} 
      />
    </div>
  );
}
