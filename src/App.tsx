import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Ecosystem } from './components/Ecosystem';
import { Areas } from './components/Areas';
import { Philosophy } from './components/Philosophy';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';

export default function App() {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-zinc-100 flex flex-col font-sans selection:bg-purple-500/20 selection:text-purple-200">
      {/* Header */}
      <Header onNavigate={handleNavigate} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onNavigate={handleNavigate} />
        <Ecosystem />
        <About />
        <Areas />
        <Philosophy />
        <Contact />
      </main>

      {/* Footer */}
      <Footer 
        onNavigate={handleNavigate} 
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
