'use client';

import { useEffect } from 'react';

export function HeroSection() {
  // This useEffect handles the Wistia video loading.
  useEffect(() => {
    const wistiaVideoId = '335vqtv9ut';
    const script = document.createElement('script');
    script.src = 'https://fast.wistia.com/assets/external/E-v1.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Wistia) {
        window.Wistia.embed(wistiaVideoId, {
          version: 'v1',
          videoWidth: '100%',
          videoHeight: '100%',
          playerColor: 'FE3C72',
          videoFoam: {
            // This creates the 9:16 aspect ratio
            maxWidth: 400,
            aspectRatio: 9 / 16,
          },
          autoPlay: true,
          muted: true,
          controlsVisibleOnLoad: true,
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
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
            className="wistia_responsive_padding"
            style={{
              padding: '177.78% 0 0 0',
              position: 'relative',
              boxShadow: '0 20px 50px -10px rgba(254, 60, 114, 0.3)',
              borderRadius: '12px',
              overflow: 'hidden',
              maxWidth: '400px',
              margin: '0 auto'
            }}
          >
            <div
              className="wistia_responsive_wrapper"
              style={{
                height: '100%',
                left: 0,
                position: 'absolute',
                top: 0,
                width: '100%',
              }}
            >
              <div
                className="wistia_embed wistia_async_335vqtv9ut videoFoam=true"
                style={{
                  height: '100%',
                  position: 'relative',
                  width: '100%',
                }}
              >
                &nbsp;
              </div>
            </div>
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
