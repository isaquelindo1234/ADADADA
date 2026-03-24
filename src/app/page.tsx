'use client';

import { useState, useEffect } from 'react';
import { FaqSection } from '@/components/landing/FaqSection';
import { HeroSection } from '@/components/landing/HeroSection';
import { HowItWorksSection } from '@/components/landing/HowItWorksSection';
import { TestimonialSection } from '@/components/landing/TestimonialSection';
import { MidPageOfferSection } from '@/components/landing/MidPageOfferSection';
import { Footer } from '@/components/landing/Footer';
import { UrgencyBanner } from '@/components/landing/UrgencyBanner';

declare global {
  interface Window {
    utmify?: {
      run: () => void;
    };
  }
}

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const delayMs = 380000; // 380 segundos

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
      if (window.utmify && typeof window.utmify.run === 'function') {
        window.utmify.run();
      }
    }, delayMs);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <UrgencyBanner />
      <main className="flex-1">
        <HeroSection showButton={showContent} />

        {showContent && (
          <>
            <MidPageOfferSection />
            <HowItWorksSection />
            <TestimonialSection />
            <FaqSection />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
