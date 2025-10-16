'use client';

import { useEffect } from 'react';

export function HeroSection() {
  
  return (
    <section className="py-8 md:py-12 text-center bg-background">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-white leading-tight mb-6 text-center">
            Existe un <span className="text-primary">'interruptor de arrepentimiento'</span> en el cerebro masculino. <br /> Pocas mujeres saben cómo activarlo.
          </h1>
          <p className="max-w-xl mx-auto text-base text-muted-foreground mb-8">
            La respuesta está en la física de la Resonancia Inducida®. Presiona play para que la especialista Elena Navarro te muestre la prueba.
          </p>
          <div 
            className="w-full max-w-[400px] mx-auto rounded-lg overflow-hidden shadow-2xl glowing-shadow"
            style={{ 
              aspectRatio: '9 / 16',
            }}
            >
             <img 
                src="https://i.postimg.cc/y8N1gBqH/vsl-thumb.png" 
                alt="Video thumbnail"
                className="w-full h-full object-cover"
                data-ai-hint="video thumbnail"
              />
          </div>
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
}
