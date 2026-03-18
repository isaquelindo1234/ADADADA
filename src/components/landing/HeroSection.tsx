'use client';

import { ProgressBar } from './ProgressBar';

export function HeroSection() {
  return (
    <section className="py-8 md:py-12 text-center bg-background">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="w-full max-w-3xl md:max-w-[700px]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-white leading-tight mb-6 text-center">
            El truco de <span className="text-primary">1 minuto</span> para 'burlar' su ego y grabar tu <span className="text-primary">"Asignatura Energética"</span> en su <span className="text-primary">corazón</span> (para que te <span className="text-primary">necesite solo a ti</span>).
          </h1>
          <p className="max-w-xl mx-auto text-base md:text-lg text-muted-foreground mb-8">
            Existe una herramienta que activa este 'comando' biológico. Descubre cómo usarla en 1 minuto al día.
          </p>
          <ProgressBar />
        </div>
      </div>
    </section>
  );
}
