'use client';

import { ProgressBar } from './ProgressBar';

export function HeroSection() {
  return (
    <section className="py-8 md:py-12 text-center bg-background">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="w-full max-w-3xl md:max-w-[700px]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-white leading-tight mb-6 text-center">
            La manera poco conocida de hacer que <span className="text-primary">CUALQUIER PERSONA</span> escuche esta melodía durante 5 minutos.
          </h1>
          <p className="max-w-xl mx-auto text-base md:text-lg text-muted-foreground mb-8">
            Existe una herramienta que activa este 'comando' biológico. Presiona play y descubre cómo usarla.
          </p>
          <ProgressBar />
        </div>
      </div>
    </section>
  );
}
