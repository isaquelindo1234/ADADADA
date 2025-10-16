
'use client';

import * as React from "react";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Valentina R.",
    stars: 5,
    text: "No puedo creerlo. Dos días después de empezar a escuchar, me escribió. Dijo que no podía dejar de pensar en mí.",
    image: "/images/valentina.jpg",
  },
  {
    name: "Sofía P.",
    stars: 5,
    text: "Estaba muy escéptica, pero desesperada. En una semana, la energía entre nosotros cambió por completo.",
    image: "/images/sofia.jpg",
  },
  {
    name: "Camila G.",
    stars: 5,
    text: "Esto no solo trajo a mi ex de vuelta, sino que me siento más segura y magnética que nunca.",
    image: "/images/camila.jpg",
  },
  {
    name: "Isabella L.",
    stars: 5,
    text: "Funcionó tal como dijo. Él apareció en mi puerta diciendo que había cometido un error. ¡Realmente funciona!",
    image: "/images/isabella.jpg",
  },
  {
    name: "Martina C.",
    stars: 5,
    text: "Me siento diferente, más en paz y poderosa. Y él lo notó. Nuestra comunicación ha mejorado 100%.",
    image: "/images/martina.jpg",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative w-28 h-28 mb-4">
                <Image
                  src={testimonial.image}
                  alt={`Foto de ${testimonial.name}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <p className="font-semibold text-white font-body">
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
