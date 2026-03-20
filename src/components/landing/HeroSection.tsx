'use client';

import Script from 'next/script';
import { ProgressBar } from './ProgressBar';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'vturb-smartplayer': any;
    }
  }
}

export function HeroSection() {
  return (
    <section className="py-8 md:py-12 text-center bg-background">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="w-full max-w-3xl md:max-w-[700px]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-white leading-tight mb-6 text-center">
            La manera poco conocida de conquistar a <span className="text-primary">CUALQUIER PERSONA</span> escuchando esta melodía durante 5 minutos.
          </h1>
          <p className="max-w-xl mx-auto text-base md:text-lg text-muted-foreground mb-8">
            Existe una herramienta que activa este 'comando' biológico. Presiona play y descubre cómo usarla.
          </p>

          {/* VSL Video Container */}
          <div className="w-full mb-8 flex justify-center">
            <div className="w-full max-w-[400px]">
              <vturb-smartplayer
                id="vid-69bc114dd54d8d20f1012f08"
                style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px' }}
              />
              <Script
                src="https://scripts.converteai.net/aa65ee97-137b-4cf6-a06b-e20a641d4cda/players/69bc114dd54d8d20f1012f08/v4/player.js"
                strategy="afterInteractive"
                async
              />
            </div>
          </div>

          <ProgressBar />
        </div>
      </div>
    </section>
  );
}
