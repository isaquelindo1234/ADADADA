'use client';

import { CheckCircle2, Star, Download, Radio, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

// SET THE TIME (in seconds) for the offer to appear after the page loads.
const OFFER_APPEAR_TIME_IN_SECONDS = 230; // 3 minutes and 50 seconds

export function OfferSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, OFFER_APPEAR_TIME_IN_SECONDS * 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      if (!timeLeft) return;

      const intervalId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [isVisible, timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const deliverables = [
    { name: 'Programa Principal: Pulso del Amor', icon: <Star className="text-secondary" /> },
    { name: 'Bono 1: Frecuencia "Atracción Inmediata"', icon: <Radio className="text-secondary" /> },
    { name: 'Bono 2: Frecuencia "Anti-Infidelidad"', icon: <ShieldCheck className="text-secondary" /> },
    { name: 'Bono 3: Frecuencia "Conexión Emocional"', icon: <Radio className="text-secondary" /> },
    { name: 'Bono 4: Frecuencia "Seducción Sonora"', icon: <Radio className="text-secondary" /> },
    { name: 'Bono 5: Acceso a Actualizaciones Futuras', icon: <Download className="text-secondary" /> },
    { name: 'Acceso de por vida a la plataforma Iris', icon: <Star className="text-secondary" /> },
  ];

  if (!isVisible) {
    return null;
  }

  return (
    <section id="offer" className="py-12 md:py-16 bg-background animate-in fade-in duration-700">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-card border border-primary/30 rounded-2xl p-6 md:p-10 shadow-2xl glowing-shadow">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column: Deliverables and Mockup */}
            <div className="space-y-6">
              <h3 className="font-bold text-lg text-white text-center md:text-left">Tu Acceso Exclusivo a "Pulso del Amor":</h3>
              <ul className="space-y-3 font-body text-white/90">
                {deliverables.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0">{item.icon}</div>
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
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
            </div>

            {/* Right Column: Timer, Price and CTA */}
            <div className="flex flex-col items-center text-center">
               <div className="bg-primary/10 border border-primary text-primary rounded-lg px-4 py-2 mb-4">
                 <span className="font-bold text-lg">{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
               </div>
              <p className="text-lg text-muted-foreground font-body">Precio Regular: <span className="line-through">$47 USD</span></p>
              <p className="text-base text-white/80 font-body mb-2">HOY: solo</p>
              <div className="text-6xl md:text-7xl font-headline font-bold text-white mb-4">
                $19 USD
              </div>
              <div className="w-full max-w-sm">
                <Button
                  size="lg"
                  className="w-full h-auto py-4 text-lg font-bold btn-glow btn-gradient"
                >
                  SÍ, QUIERO ACCEDER A PULSO DEL AMOR AHORA
                </Button>
                <p className="text-xs text-muted-foreground mt-3">
                  Pago único. Acceso de por vida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
