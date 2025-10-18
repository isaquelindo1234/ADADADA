'use client';

import Script from 'next/script';
import { ProgressBar } from './ProgressBar';

export function HeroSection() {
  return (
    <section className="py-8 md:py-12 text-center bg-background">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="w-full max-w-3xl md:max-w-[700px]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-white leading-tight mb-6 text-center">
            El truco psicológico de <span className="text-primary">1 minuto</span> para 'burlar' su ego y activar la necesidad biológica de <span className="text-primary">pensar en ti</span>.
          </h1>
          <p className="max-w-xl mx-auto text-base md:text-lg text-muted-foreground mb-8">
            La respuesta está en la física de la Resonancia Inducida®. Presiona play para que la especialista Elena Navarro te muestre la prueba.
          </p>
          <div
            className="w-full mx-auto rounded-lg overflow-hidden shadow-2xl glowing-shadow"
          >
            <Script
              src="https://fast.wistia.com/embed/335vqtv9ut.js"
              async
              type="module"
            />
            <style>
              {`wistia-player[media-id='335vqtv9ut']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/335vqtv9ut/swatch'); display: block; filter: blur(5px); padding-top:177.78%; }`}
            </style>
            <wistia-player media-id="335vqtv9ut" aspect="0.5625"></wistia-player>
          </div>
          <ProgressBar />
        </div>
      </div>
    </section>
  );
}

// Add Wistia to the global window object for TypeScript
declare global {
  interface Window {
    Wistia?: any;
  }
  namespace JSX {
    interface IntrinsicElements {
      'wistia-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { 'media-id': string; aspect: string; }, HTMLElement>;
    }
  }
}
