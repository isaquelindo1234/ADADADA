
'use client';

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Valentina R.",
    stars: 5,
    text: "No puedo creerlo. Dos días después de empezar a escuchar, me escribió. Dijo que no podía dejar de pensar en mí. ¡Esto es increíble!",
    image: "https://i.pinimg.com/736x/b9/3c/5e/b93c5ed12332b032114b2e5926fc9538.jpg",
    imageAlt: "Testimonio en chat 1"
  },
  {
    name: "Sofía P.",
    stars: 5,
    text: "Estaba muy escéptica, pero desesperada. En una semana, la energía entre nosotros cambió por completo. Ahora estamos planeando vernos. ¡Gracias Elena!",
    image: "https://i.pinimg.com/1200x/7c/20/eb/7c20ebeb483371cf7515a463ad6191fe.jpg",
    imageAlt: "Testimonio en chat 2"
  },
  {
    name: "Camila G.",
    stars: 5,
    text: "Esto no solo trajo a mi ex de vuelta, sino que me siento más segura y magnética que nunca. Otras personas me notan más. Es como si tuviera un superpoder.",
    image: "https://i.pinimg.com/736x/47/77/b9/4777b9050fd3706ed66c6de7ac6d6254.jpg",
    imageAlt: "Testimonio en chat 3"
  },
  {
    name: "Isabella L.",
    stars: 5,
    text: "Funcionó tal como dijo. Él apareció en mi puerta diciendo que había cometido un error. Estoy en shock, pero tan feliz. ¡Realmente funciona!",
    image: "https://i.pinimg.com/736x/2f/93/69/2f936975cf94c13fc7cdaeb8f655cae7.jpg",
    imageAlt: "Testimonio en chat 4"
  },
  {
    name: "Martina C.",
    stars: 5,
    text: "Me siento diferente, más en paz y poderosa. Y él lo notó. Nuestra comunicación ha mejorado 100% y estamos más unidos que antes.",
    image: "https://i.pinimg.com/736x/a0/44/e0/a044e065abf7dccec2f336a5cf8925f5.jpg",
    imageAlt: "Testimonio en chat 5"
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
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-xs sm:max-w-xl md:max-w-4xl lg:max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="bg-background h-full flex flex-col justify-between border-border">
                    <CardContent className="p-4 md:p-6 space-y-4">
                       <img
                          src={testimonial.image}
                          alt={testimonial.imageAlt}
                          width="400"
                          height="711"
                          loading="lazy"
                          className="rounded-lg object-contain w-full h-auto"
                          data-ai-hint="chat message"
                        />
                      <div className="flex">
                        {[...Array(testimonial.stars)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-muted-foreground text-sm font-body italic">
                        "{testimonial.text}"
                      </p>
                      <p className="font-semibold text-white font-body pt-2">
                        - {testimonial.name}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
