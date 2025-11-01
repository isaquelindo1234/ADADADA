'use client';

import Script from 'next/script';
import { ProgressBar } from './ProgressBar';

// Define the custom element type for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'vturb-smartplayer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        id: string;
      };
    }
  }
}

export function HeroSection() {
  return (
    <section className="py-8 md:py-12 text-center bg-background">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="w-full max-w-3xl md:max-w-[700px]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-white leading-tight mb-6 text-center">
            El truco de <span className="text-primary">1 minuto</span> para 'burlar' su ego y grabar tu <span className="text-primary">"Asignatura Energética"</span> en su <span className="text-primary">corazón</span> (para que te <span className="text-primary">necesite solo a ti</span>).
          </h1>
          <p className="max-w-xl mx-auto text-base md:text-lg text-muted-foreground mb-8">
            Existe una herramienta que activa este 'comando' biológico. Presiona play y descubre cómo usarla en 1 minuto al día.
          </p>
          <div className="w-full mx-auto rounded-lg overflow-hidden shadow-2xl glowing-shadow">
             <vturb-smartplayer 
                id="vid-68f80986633a52b4eafb688e" 
                style={{ display: 'block', margin: '0 auto', width: '100%', aspectRatio: '9/16' }}
              ></vturb-smartplayer>
              <Script 
                id="vturb-player-script"
                src="https://scripts.converteai.net/44747a07-9065-4f8b-b4cc-84e28db0abdb/players/68f80986633a52b4eafb688e/v4/player.js" 
                async
              />
          </div>
          <ProgressBar />
        </div>
      </div>
    </section>
  );
}
