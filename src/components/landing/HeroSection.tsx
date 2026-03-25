'use client';

import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

export function HeroSection() {
  const scrollToOffer = () => {
    const offerSection = document.getElementById('offer');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const avatars = [
    "https://i.pinimg.com/1200x/28/bd/84/28bd841dd6356da9d14e37fb02a95126.jpg",
    "https://i.pinimg.com/1200x/96/d9/1a/96d91ae72e36c0796d8baf20f3c94023.jpg",
    "https://i.pinimg.com/736x/8a/56/49/8a56495baade23a10b21818977d52760.jpg",
    "https://i.pinimg.com/736x/35/8e/e6/358ee60facb52cb06d14231e02f31007.jpg",
    "https://i.pinimg.com/1200x/c1/16/f2/c116f2f4dbfcb98891430e1d476a83e9.jpg"
  ];

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
          <Button
            size="lg"
            className="w-full h-auto py-6 text-xl font-bold btn-glow btn-gradient rounded-full leading-tight uppercase"
            onClick={scrollToOffer}
          >
            QUIERO ESCUCHAR LA FRECUENCIA
          </Button>
        </div>

        {/* Social Proof Avatars */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex -space-x-2">
            {avatars.map((url, i) => (
              <img
                key={i}
                src={url}
                alt="Usuaria satisfecha"
                className="w-10 h-10 rounded-full border-2 border-background object-cover"
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
