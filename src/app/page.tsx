'use client';

import { useState, useEffect } from 'react';
import { SpecialistSection } from '@/components/landing/SpecialistSection';
import { FaqSection } from '@/components/landing/FaqSection';
import { HeroSection } from '@/components/landing/HeroSection';
import { HowItWorksSection } from '@/components/landing/HowItWorksSection';
import { TestimonialSection } from '@/components/landing/TestimonialSection';
import { MidPageOfferSection } from '@/components/landing/MidPageOfferSection';
import { Footer } from '@/components/landing/Footer';
import { AuthorityLogos } from '@/components/landing/AuthorityLogos';
import Script from 'next/script';

// Extend the Window interface to include utmify
declare global {
  interface Window {
    utmify?: {
      run: () => void;
    };
  }
}

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
      // When content becomes visible, tell UTMify to re-scan the page
      if (window.utmify && typeof window.utmify.run === 'function') {
        window.utmify.run();
      }
    }, 120000); // 120 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1">
        <HeroSection />
        <AuthorityLogos />

        {showContent && (
          <>
            <MidPageOfferSection />
            <HowItWorksSection />
            <SpecialistSection />
            <TestimonialSection />
            <FaqSection />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
