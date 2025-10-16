import { AuthorityBar } from '@/components/landing/AuthorityBar';
import { SpecialistSection } from '@/components/landing/SpecialistSection';
import { FaqSection } from '@/components/landing/FaqSection';
import { HeroSection } from '@/components/landing/HeroSection';
import { HowItWorksSection } from '@/components/landing/HowItWorksSection';
import { OfferSection } from '@/components/landing/OfferSection';
import { TestimonialSection } from '@/components/landing/TestimonialSection';
import { TrustBar } from '@/components/landing/TrustBar';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background overflow-x-hidden">
      <main className="flex-1">
        <HeroSection />
        <OfferSection />
        <AuthorityBar />
        <TrustBar />
        <HowItWorksSection />
        <SpecialistSection />
        <TestimonialSection />
        <FaqSection />
      </main>
    </div>
  );
}
