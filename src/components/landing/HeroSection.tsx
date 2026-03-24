'use client';

import Script from 'next/script';
import { ProgressBar } from './ProgressBar';
import { Button } from '@/components/ui/button';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'vturb-smartplayer': any;
    }
  }
}

interface HeroSectionProps {
  showButton?: boolean;
}

export function HeroSection({ showButton }: HeroSectionProps) {
  return (
    <section className="py-8 md:py-12 text-center bg-background">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="w-full max-w-3xl md:max-w-[700px]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-white leading-tight mb-6 text-center">
            Descubre cómo hacer que él te extrañe, vaya tras de ti y suplique volver —<span className="text-primary">sin parecer desesperada ni perseguido.</span>
          </h1>
          <p className="max-w-xl mx-auto text-base md:text-lg text-muted-foreground mb-8">
            (Funciona en 5 días or menos, incluso si él está frío o distante)
          </p>

          {/* VSL Video Container */}
          <div className="w-full mb-6 flex justify-center">
            <div className="w-full max-w-[400px]">
              <vturb-smartplayer
                id="vid-69c1a5303d18cfb2430cacf4"
                style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px' }}
              />
              <Script
                src="https://scripts.converteai.net/aa65ee97-137b-4cf6-a06b-e20a641d4cda/players/69c1a5303d18cfb2430cacf4/v4/player.js"
                strategy="afterInteractive"
                async
              />
            </div>
          </div>

          {/* Delayed CTA Button */}
          {showButton && (
            <div className="w-full max-w-md mx-auto mb-8 animate-in fade-in zoom-in duration-500">
              <a 
                href="https://pay.hotmart.com/E101916835T?checkoutMode=10" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="w-full h-auto py-5 text-xl md:text-2xl font-bold btn-glow btn-gradient rounded-full leading-tight whitespace-normal uppercase"
                >
                  SÍ, QUIERO EL PODER PARA CONQUISTARLO
                </Button>
              </a>
              <p className="text-xs text-muted-foreground mt-3 flex items-center justify-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Acceso inmediato disponible
              </p>
            </div>
          )}

          <ProgressBar />
        </div>
      </div>
    </section>
  );
}
