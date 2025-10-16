'use client';

import * as React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Valentina R.",
    stars: 5,
    text: "No puedo creerlo. Dos días después de empezar a escuchar, me escribió. Dijo que no podía dejar de pensar en mí.",
  },
  {
    name: "Sofía P.",
    stars: 5,
    text: "Estaba muy escéptica, pero desesperada. En una semana, la energía entre nosotros cambió por completo.",
  },
  {
    name: "Camila G.",
    stars: 5,
    text: "Esto no solo trajo a mi ex de vuelta, sino que me siento más segura y magnética que nunca.",
  },
  {
    name: "Isabella L.",
    stars: 5,
    text: "Funcionó tal como dijo. Él apareció en mi puerta diciendo que había cometido un error. ¡Realmente funciona!",
  },
  {
    name: "Martina C.",
    stars: 5,
    text: "Me siento diferente, más en paz y poderosa. Y él lo notó. Nuestra comunicación ha mejorado 100%.",
  },
];

export function TestimonialSection() {
  return (
    <section className="py-12 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-white text-3xl md:text-4xl font-headline font-bold">
            Mujeres Reales, Resultados Reales
          </h2>
        </div>
        
        {/* Video Testimonial */}
        <div className="max-w-xs mx-auto mb-12">
          <div className="aspect-w-9 aspect-h-16 rounded-lg overflow-hidden border-2 border-primary/50 glowing-shadow">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/p-2kxZGJuVk"
              title="Depoimento em Vídeo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Text Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg bg-background transform transition-transform duration-300 hover:-translate-y-1">
              <p className="font-semibold text-white font-body mb-2">
                {testimonial.name}
              </p>
              <div className="flex my-2">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm font-body italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Helper to enable aspect ratio classes in Tailwind
// This is a simple implementation. For production, consider using @tailwindcss/aspect-ratio plugin
const AspectRatioPlugin = () => (
  <style jsx global>{`
    .aspect-w-9 { position: relative; padding-bottom: 56.25%; }
    .aspect-h-16 { position: relative; padding-bottom: 177.77%; }
    .aspect-w-9 > *, .aspect-h-16 > * { position: absolute; height: 100%; width: 100%; top: 0; right: 0; bottom: 0; left: 0; }
  `}</style>
);
