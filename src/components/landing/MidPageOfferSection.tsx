'use client';

import { CheckCircle2, Gift, Sparkles, ShieldCheck, Lock, CircleCheckBig } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function MidPageOfferSection() {

  const deliverables = [
    { name: 'Acceso vitalicio a las Frecuencias Principales', icon: <CheckCircle2 className="text-primary" /> },
    { name: 'Biblioteca de Audios de Reprogramación', icon: <CheckCircle2 className="text-primary" /> },
    { name: 'Acceso ilimitado a Iris (IA)', icon: <Sparkles className="text-primary" /> },
    { name: 'Guía de Inicio Rápido', icon: <CheckCircle2 className="text-primary" /> },
    { name: '+ 5 Bonos Misteriosos', icon: <Gift className="text-primary" /> },
  ];

  const trustElements = [
    {
      icon: <ShieldCheck className="h-5 w-5 text-primary" />,
      text: "Garantía de 30 Días",
    },
    {
      icon: <Lock className="h-5 w-5 text-primary" />,
      text: "Pago 100% Seguro",
    },
    {
      icon: <CircleCheckBig className="h-5 w-5 text-primary" />,
      text: "Acceso Inmediato",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container">
        <div className="max-w-5xl mx-auto bg-card border border-primary/20 rounded-2xl p-4 md:p-10 shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Visual Column */}
          <div className="flex justify-center items-center">
              <img
                src="https://i.postimg.cc/yxhqBBWj/Whisk-5def57aea14cccebbc347a165bbe7b1ddr-removebg-preview.png"
                alt="Mockup do Produto Pulso del Amor"
                width="400"
                height="400"
                loading="lazy"
                className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] w-full max-w-xs md:max-w-sm h-auto"
                data-ai-hint="product box phone"
              />
            </div>

          {/* Details Column */}
          <div className="flex flex-col">
            <h2 className="text-2xl sm:text-3xl font-headline font-bold text-white leading-tight mb-6">
              Tu Acceso <span className="text-primary">Exclusivo</span> por estar en esta presentación:
            </h2>
            
             <ul className="space-y-3 font-body text-white/90 mb-6">
              {deliverables.map((item, index) => (
                <li key={index} className="flex items-center text-base bg-background/50 rounded-lg p-2 md:p-3">
                  <div className="w-6 h-6 mr-3 flex-shrink-0">{item.icon}</div>
                  <span dangerouslySetInnerHTML={{ __html: item.name.replace('Frecuencias Principales', '<strong>Frecuencias Principales</strong>').replace('Iris (IA)', '<strong>Iris (IA)</strong>') }}></span>
                </li>
              ))}
            </ul>
            
            <div className='text-center my-4'>
              <p className="text-lg text-muted-foreground font-body line-through">Precio Regular: $47 USD</p>
              <p className="text-5xl md:text-6xl font-headline font-bold text-white">
                  HOY: solo $19 <span className="text-3xl md:text-4xl">USD</span>
              </p>
              <p className='text-xs text-muted-foreground mt-1'>(El valor será convertido a tu moneda local en el checkout)</p>
            </div>

            <a href="https://pay.mundpay.com/01997cb3-78e8-7291-b9d5-b4a27fc0f595?ref=" target="_blank" rel="noopener noreferrer">
              <Button
                  size="lg"
                  className="w-full h-auto py-4 text-lg md:text-xl font-bold btn-glow btn-gradient mb-6 leading-tight whitespace-normal"
                >
                  SÍ, QUIERO EL PODER PARA CONQUISTARLO
              </Button>
            </a>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-center mt-6">
                {trustElements.map((item, index) => (
                    <div key={index} className="flex items-center justify-center gap-2">
                    {item.icon}
                    <span className="text-xs font-semibold text-white">{item.text}</span>
                    </div>
                ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
