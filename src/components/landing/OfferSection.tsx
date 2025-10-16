'use client';

import { CheckCircle2, Gift, Radio, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function OfferSection() {
  const deliverables = [
    { name: 'Acceso vitalicio a las Frecuencias Principales', icon: <CheckCircle2 className="text-primary" /> },
    { name: 'Biblioteca de Audios de Reprogramación', icon: <CheckCircle2 className="text-primary" /> },
    { name: 'Acceso ilimitado a Iris (IA)', icon: <Sparkles className="text-primary" /> },
    { name: 'Guía de Inicio Rápido', icon: <CheckCircle2 className="text-primary" /> },
    { name: '+ 5 Bonos Misteriosos', icon: <Gift className="text-primary" /> },
  ];

  return (
    <section id="offer" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-card border border-primary/30 rounded-2xl p-6 md:p-10 shadow-2xl glowing-shadow">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-headline font-bold text-white leading-tight">
              Tu Acceso <span className="text-primary">Exclusivo</span> por estar en esta presentación:
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column: Mockup */}
            <div className="flex justify-center">
                <img
                  src="https://i.postimg.cc/d1MwzR3r/New-Mockup.png"
                  alt="Mockup do Produto Pulso del Amor"
                  width={350}
                  height={350}
                  loading="lazy"
                  className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] w-full max-w-[280px] md:max-w-xs h-auto"
                  data-ai-hint="product box"
                />
              </div>

            {/* Right Column: Deliverables, Price and CTA */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
               <ul className="space-y-4 font-body text-white/90 mb-6">
                {deliverables.map((item, index) => (
                  <li key={index} className="flex items-center text-lg">
                    <div className="w-6 h-6 mr-3 flex-shrink-0">{item.icon}</div>
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
              
              <div className="w-full max-w-sm mx-auto md:mx-0">
                 <div className='text-center my-4'>
                    <p className="text-lg text-muted-foreground font-body line-through">Precio Regular: $47 USD</p>
                    <p className="text-5xl md:text-6xl font-headline font-bold text-white">
                        HOY: solo $19 <span className="text-4xl">USD</span>
                    </p>
                    <p className='text-xs text-muted-foreground mt-1'>(El valor será convertido a tu moneda local en el checkout)</p>
                 </div>
                <Button
                  size="lg"
                  className="w-full h-auto py-4 text-xl font-bold btn-glow btn-gradient"
                >
                  SÍ, QUIERO ACCEDER A PULSO DEL AMOR AHORA
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
