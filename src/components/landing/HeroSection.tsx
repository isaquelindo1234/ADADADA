'use client';

import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="py-12 md:py-20 text-center bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col items-center relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-white leading-tight mb-6 text-center">
          Descubre cómo hacer que él te extrañe, vaya tras de ti y suplique volver —<span className="text-primary">sin parecer desesperada ni perseguirlo</span>.
        </h1>
        <p className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl mb-10 font-body">
          (Funciona en 5 días o menos, incluso si él está frío o distante)
        </p>

        <div className="w-full max-w-md mx-auto mb-8">
          <a 
            href="https://pay.hotmart.com/E101916835T?off=h7rlii2k&checkoutMode=10" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="w-full h-auto py-6 text-xl font-bold btn-glow btn-gradient rounded-full leading-tight uppercase"
            >
              QUIERO ESCUCHAR LA FRECUENCIA
            </Button>
          </a>
        </div>

        {/* Social Proof Avatars */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <img
                key={i}
                src={`https://picsum.photos/seed/${i + 10}/40/40`}
                alt="Usuaria satisfecha"
                className="w-10 h-10 rounded-full border-2 border-background"
              />
            ))}
          </div>
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-xs text-white font-semibold">+ 5.879 mujeres</span>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />
    </section>
  );
}
