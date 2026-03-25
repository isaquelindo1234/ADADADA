import { HeroSection } from '@/components/landing/HeroSection';
import { InfoSection } from '@/components/landing/InfoSection';
import { TestimonialSection } from '@/components/landing/TestimonialSection';
import { FaqSection } from '@/components/landing/FaqSection';
import { Footer } from '@/components/landing/Footer';
import { UrgencyBanner } from '@/components/landing/UrgencyBanner';
import { MidPageOfferSection } from '@/components/landing/MidPageOfferSection';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <UrgencyBanner />
      <main className="flex-1">
        <HeroSection />
        <InfoSection />
        <MidPageOfferSection />
        <TestimonialSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
