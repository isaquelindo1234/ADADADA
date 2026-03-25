'use client';

import { useState, useEffect } from 'react';
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function InfoSection() {
  const [isMounted, setIsMounted] = useState(false);
  const headphonesWoman = PlaceHolderImages.find(p => p.id === 'benefit-woman');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="bg-background">
      {/* First Info Block */}
      <div className="py-16 md:py-24 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Esta melodía es tan poderosa que te da una <span className="text-white font-semibold">"ventaja injusta"</span> sobre los hombres, y ya te lo adelanto. Si no te gusta llamar la atención, ser vista y notada por las personas, o ser cortejada por tu hombre, es mejor no escuchar...
              </p>
              <p>
                ¡Basta de perder tiempo con cosas que no funcionan: contacto cero, mensajes para conquistar, libros de autoayuda o ebooks que solo te cuentan teorías vacías! Esto no te ayudará en nada; yo ya hice todo lo que imaginaste antes de descubrir esto.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-2xl group-hover:bg-primary/30 transition-all duration-500" />
              {headphonesWoman && (
                <img
                  src={headphonesWoman.imageUrl}
                  alt={headphonesWoman.description}
                  width={500}
                  height={600}
                  className="relative rounded-2xl object-cover w-full shadow-2xl"
                  data-ai-hint={headphonesWoman.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Second Info Block (Reversed) */}
      <div className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-bold mb-4 uppercase tracking-widest text-sm">Si tu relación pende de un hilo o él te abandonó...</p>
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-white">
              Sé exactamente cómo te sientes...<br/>¡yo ya pasé por eso!
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-black min-h-[300px] flex items-center justify-center">
                {isMounted ? (
                  <img
                    src="https://i.imgur.com/GTdHh1h.gif"
                    alt="Demostración"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full aspect-video bg-black/20 animate-pulse" />
                )}
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6 text-muted-foreground text-base leading-relaxed">
              <p>
                Durante mucho tiempo vi a mis amigas, parientes cercanos y personas que sigo en redes sociales con relaciones tan increíbles: propuestas de matrimonio, flores, viajes...
              </p>
              <p>
                Y me preguntaba: ¿será que mi relación será así algún día? En medio de tantas peleas y malentendidos, ¿será que o el problema está en mí? ¿Nací para tener una relación arruinada?
              </p>
              <p className="text-white font-medium italic">
                No, eso va a cambiar a partir de hoy. Si escuchas este PULSO DEL AMOR que activa el interruptor de la atracción amorosa en ti, es probable que él te envíe un mensaje de forma casi inmediata.
              </p>
              <p>
                Pulso del Amor aumenta instantáneamente tu campo energético que está desalineado, el verdadero motivo por el cual estás enfrentando desafíos en tu relación, como peleas, separaciones e incluso dificultad para encontrar a alguien.
              </p>
              <p className="text-primary font-semibold">
                Esta melodía es tan poderosa que es prácticamente como si tuvieras el "Control Mental Masculino", ¡y menos del 2% de las mujeres saben que esto existe!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
